// Dependencies.
import React from 'react';
import { Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getWindowDimensions } from '../../redux/actions';
import { ACTIVITY, DETAIL, DETAILFORM } from '../../redux/constants';

// Components.
import DocumentActivityList from './components/RightPanelArea/ActivityList';
import DocumentDetail from './components/RightPanelArea/Detail';
import DocumentDetailForm from './components/RightPanelArea/DetailForm';

// Utility methods.
import utils from '../../utils';

// Define class.
class RightPanelArea extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);

    this.state = {
      panelSize: '100%'
    };
  }

  updateDimensions() {
    const { state, dispatch } = this.props;
    const leftSidebarOpened = state.leftSidebarOpened;
    let columnWidth = this.props.columnWidth;
    const totalColumnGrids = 12;
    const navWidth = 230;

    // Get window dimensions from utils.
    const dimensions = utils.getWindowDimensions();
    const windowWidth = dimensions.width;

    // Calculate percentage of columns from total columns. (ie, 3 / 12 * 100 = 25%)
    const calculatedColumnWidth = Math.round(columnWidth / totalColumnGrids * 100);
    // console.log(columnWidth, 'is', calculatedColumnWidth, '% of', totalColumnGrids, 'columns.');

    // Calculate by multiplying percentage.
    let percentageWidth = Math.floor(windowWidth * (calculatedColumnWidth / 100));
    // console.log((calculatedColumnWidth / 100));

    if (leftSidebarOpened) {
      percentageWidth = Math.floor((windowWidth - navWidth) / calculatedColumnWidth);
    }

    if (windowWidth >= 768) {
      this.setState({
        panelSize: percentageWidth + 'px'
      });
    }

    dispatch(getWindowDimensions(dimensions));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  }

  componentDidMount() {
    // Update dimensions.
    this.updateDimensions();
    // Window resizing.
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }

  // Render method.
  render() {
    const { state } = this.props;
    let sidebarHeight = state.windowDimensions.height;

    // Right panel view.
    const currentView = state.rightPanelAreaView;
    let rightPanelArea;

    switch (currentView) {
    case ACTIVITY:
      rightPanelArea = <DocumentActivityList />;
      break;
    case DETAIL:
      rightPanelArea = <DocumentDetail />;
      break;
    case DETAILFORM:
      rightPanelArea = <DocumentDetailForm />;
      break;
    default:
      rightPanelArea = <DocumentActivityList />;
    }

    // Toggle right panel.
    const isRightPanelOpen = state.rightSidebarOpened;
    // let leftSidePanelDisplay = 'block';
    // if (!isRightPanelOpen) {
    //   leftSidePanelDisplay = 'none';
    // }
    // console.log(isRightPanelOpen, leftSidePanelDisplay);

    // <div className="sidebar" style={{height: sidebarHeight, display: leftSidePanelDisplay}}>

    const rightPanelStyles = {
      width: this.state.panelSize,
      right: sidebarHeight
    };

    return (
      <Col sm={this.props.columnWidth} id="doc_mgt-right_column" className="sidebar-wrapper">
        <div className={ isRightPanelOpen ? 'sidebar open' : 'sidebar closed'} style={rightPanelStyles}>
          {rightPanelArea}
        </div>
      </Col>
    );
  }
}

// propTypes.
RightPanelArea.propTypes = {
  columnWidth: React.PropTypes.number,
  dispatch: React.PropTypes.func,
  state: React.PropTypes.object
};
const mapStateToProps = (state) => ({
  state
});

// Export.
export default connect(mapStateToProps)(RightPanelArea);
