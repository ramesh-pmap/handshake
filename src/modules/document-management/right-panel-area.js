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
    utils.updateSidePanelWidth(leftSidebarOpened);

    const dimensions = utils.getWindowDimensions();
    dispatch(getWindowDimensions(dimensions));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  }

  componentDidMount() {
    // Update dimensions.
    this.updateDimensions();
    // Window Resizing.
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }

  // Render method.
  render() {
    const { state } = this.props;
    let sidebarHeight = state.windowDimensions.height;

    // Right Panel
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

    return (
      <div className="sidebar" style={{height: sidebarHeight}}>
        {rightPanelArea}
      </div>
    );
  }
}

// propTypes.
RightPanelArea.propTypes = {
  dispatch: React.PropTypes.func,
  state: React.PropTypes.object
};
const mapStateToProps = (state) => ({
  state
});

// Export.
export default connect(mapStateToProps)(RightPanelArea);
