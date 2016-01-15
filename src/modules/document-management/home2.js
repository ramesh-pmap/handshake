// Dependencies.
import React from 'react';
import { connect } from 'react-redux';
import { changeFolder, setFileManagerData, setContentAreaView, setRightPanelAreaView } from '../../redux/actions';
// import { DEFAULT, ACTIVITY } from '../../redux/constants';
import { DEFAULT, PREVIEW, UPLOAD, ACTIVITY, DETAIL, DETAILFORM, SEARCH_RESULTS } from '../../redux/constants';

// Core components.
import {Row, Col} from 'react-bootstrap';

// Layouts.
import Main from '../../layouts/main';

import ContentArea from './content-area.js';
import RightPanelArea from './right-panel-area.js';

// Utility methods.
import utils from '../../utils';

// Json file with folder structure data.
// const FileManagerData = '../../../static/data/filemanager-data.json';
const SourceData = '../../../static/data/documents-data-SKF.json';

// Define class.
class Page extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);

    // Set page title.
    utils.title(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    // Fetch Json data.
    // fetch(FileManagerData).then(response => response.json())
    //   .then(data => {
    //     // Redux action.
    //     // utils.createFolderMatrix([], data.fileManager);
    //     // dispatch(setFileManagerData(data.fileManager[0], utils.createFolderMatrix([], data.fileManager) ));
    //     // dispatch(changeFolder(data.fileManager[0].id));
    //   })
    //   .catch(error => {this.setState({error}); });

    // Fetch Source Json data.
    fetch(SourceData).then(response => response.json())
      .then(data => {
        // Redux action.
        const parsedFolders = utils.parseTreeWithBreadcrumb(data.document_folder);
        const flatFolders = utils.convertToFlatTree([], parsedFolders);
        const docFiles = data.document;
        dispatch(setFileManagerData(parsedFolders[0], flatFolders, docFiles));
        dispatch(changeFolder(0));
      })
      .catch(error => {this.setState({error}); });

    // Set initial state.
    // dispatch(setSidebarHeight(sidebarHeight));
    dispatch(setContentAreaView(DEFAULT));
    dispatch(setRightPanelAreaView(ACTIVITY));
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
    const isRightPanelOpen = state.rightPanelAreaToggle;

    let leftColumnSize = 9;
    let rightColumnSize = 3;
    if ( !isRightPanelOpen ) {
      leftColumnSize = 11;
      rightColumnSize = 1;
    }
    // console.log(leftColumnSize, rightColumnSize);

    return (
      <div>
        <Main>
          <Row>
            <Col sm={leftColumnSize} id="doc_mgt-left_column">

              <button onClick={this.handleContentButtonClick.bind(this, DEFAULT)} > Default </button>
              <button onClick={this.handleContentButtonClick.bind(this, PREVIEW)} > Preview </button>
              <button onClick={this.handleContentButtonClick.bind(this, UPLOAD)} > Upload </button>
              <button onClick={this.handleContentButtonClick.bind(this, SEARCH_RESULTS)} > Search Results </button>
              |
              <button onClick={this.handleRightPanelButtonClick.bind(this, ACTIVITY)} > Activity List </button>
              <button onClick={this.handleRightPanelButtonClick.bind(this, DETAIL)} > Detail </button>
              <button onClick={this.handleRightPanelButtonClick.bind(this, DETAILFORM)} > Detail Form </button>

              {/* ContentArea component */}
              <ContentArea loadContentAreaView={this.handleContentButtonClick.bind(this)} />

            </Col>

            <Col sm={rightColumnSize} id="doc_mgt-right_column" className="sidebar-wrapper">
              {/* RightPanelArea component */}
              <RightPanelArea columnWidth={rightColumnSize} />
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
