// Dependencies.
import React from 'react';
import { connect } from 'react-redux';
import { changeFolder, setFileManagerData, setSidebarHeight, setContentAreaView, setRightPanelAreaView } from '../../redux/actions';
// import { DEFAULT, ACTIVITY } from '../../redux/constants';
import { DEFAULT, PREVIEW, UPLOAD, ACTIVITY, DETAIL, DETAILFORM } from '../../redux/constants';

// Core components.
import {Row, Col} from 'react-bootstrap';

// Layouts.
import Main from '../../layouts/shell-demo/main';

import ContentArea from './content-area.js';
import RightPanelArea from './right-panel-area.js';

// Utility methods.
import utils from '../../utils';

// Json file with folder structure data.
const FileManagerData = '../../../static/data/filemanager-data.json';


// Define class.
class Page extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);

    // Set page title.
    utils.title(props);
  }

  updateDimensions() {
    const { state } = this.props;
    const leftSidebarOpened = state.leftSidebarOpened;
    utils.updateSidePanelWidth(leftSidebarOpened);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  }

  componentDidMount() {
    const { dispatch } = this.props;
    // Fetch Json data.
    fetch(FileManagerData).then(r => r.json())
      .then(data => {
        // Redux action.
        // utils.createFolderMatrix([], data.fileManager);
        dispatch(setFileManagerData(data.fileManager[0], utils.createFolderMatrix([], data.fileManager) ));
        dispatch(changeFolder(data.fileManager[0].path));
      })
      .catch(error => {this.setState({error}); });

    // Set initial state.
    dispatch(setSidebarHeight(540));
    dispatch(setContentAreaView(DEFAULT));
    dispatch(setRightPanelAreaView(ACTIVITY));

    // Update dimensions.
    this.updateDimensions();
    // Window Resizing.
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }

  handleContentButtonClick(view) {
    const { dispatch } = this.props;
    dispatch(setContentAreaView(view));
  }

  handleRightPanelButtonClick(view) {
    const { dispatch } = this.props;
    dispatch(setRightPanelAreaView(view));
  }

  // Render method.
  render() {
    const { state } = this.props;

    return (
      <div>
        <Main>
          <button onClick={this.handleContentButtonClick.bind(this, DEFAULT)} > Default </button>
          <button onClick={this.handleContentButtonClick.bind(this, PREVIEW)} > Preview </button>
          <button onClick={this.handleContentButtonClick.bind(this, UPLOAD)} > Upload </button>
          |
          <button onClick={this.handleRightPanelButtonClick.bind(this, ACTIVITY)} > Activity List </button>
          <button onClick={this.handleRightPanelButtonClick.bind(this, DETAIL)} > Detail </button>
          <button onClick={this.handleRightPanelButtonClick.bind(this, DETAILFORM)} > Detail Form </button>
          <Row>
            <Col sm={9} id="doc_mgt-left_column">
              {/* ContentArea component */}
              <ContentArea />
            </Col>

            <Col sm={3} id="doc_mgt-right_column" className="sidebar-wrapper">
              <div className="sidebar" style={{height: state.sidebarHeight + 'px'}}>
                {/* RightPanelArea component */}
                <RightPanelArea />
              </div>
            </Col>
          </Row>

        </Main>

      </div>
    );
  }
}

// propTypes.
Page.propTypes = {
  dispatch: React.PropTypes.func,
  state: React.PropTypes.object
};
const mapStateToProps = (state) => ({
  state
});

// Export.
export default connect(mapStateToProps)(Page);
