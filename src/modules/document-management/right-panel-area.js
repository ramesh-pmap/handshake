// Dependencies.
import React from 'react';
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
  }

  updateDimensions() {
    const { state, dispatch } = this.props;
    const leftSidebarOpened = state.leftSidebarOpened;
    // utils.updateSidePanelWidth(leftSidebarOpened);

    const sidePanel = document.querySelector('#doc_mgt-right_column');
    let columnWidth = this.props.columnWidth;

    const totalColumnGrids = 12;
    const calculatedColumnWidth = Math.round(columnWidth / totalColumnGrids * 100);
    console.log(columnWidth, 'is', calculatedColumnWidth, '% of', totalColumnGrids, 'columns.');

    const dimensions = utils.getWindowDimensions();
    const x = dimensions.width;

    const navWidth = 230;
    let percentageWidth = Math.floor(x * (calculatedColumnWidth / 100));
    console.log((calculatedColumnWidth / 100));

    if (leftSidebarOpened) {
      percentageWidth = Math.floor((x - navWidth) / calculatedColumnWidth);
    }
    // console.log(x, navWidth, percentageWidth);
    console.log('percentageWidth:', percentageWidth);

    // console.log('============================');
    // console.log('open:', leftSidebarOpened);
    // console.log('x:', x);
    // console.log('percentageWidth:', percentageWidth);
    // console.log('navWidth:', navWidth);

    // this.setState({width: x, height: y});
    if (x >= 768) {
      sidePanel.style.width = percentageWidth + 'px';
    } else {
      sidePanel.style.width = '100%';
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
    let sidePanelDisplay = 'block';
    if (!isRightPanelOpen) {
      sidePanelDisplay = 'none';
    }
    // console.log(isRightPanelOpen, sidePanelDisplay);

    return (
      <div className="sidebar" style={{height: sidebarHeight, display: sidePanelDisplay}}>
        {rightPanelArea}
      </div>
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
