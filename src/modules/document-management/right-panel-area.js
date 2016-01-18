// Dependencies.
import React from 'react';
import { connect } from 'react-redux';
import { getWindowDimensions, toggleRightSidebar, setRightPanelAreaView } from '../../redux/actions';
import { ACTIVITY, DETAIL, DETAILFORM, VIEWER_CHANGE_REQUEST } from '../../redux/constants';

import {Nav, NavItem} from 'react-bootstrap';
import Icon from 'react-fa';

// Components.
import DocumentActivityList from './components/RightPanelArea/ActivityList';
import DocumentDetail from './components/RightPanelArea/Detail';
import DocumentDetailForm from './components/RightPanelArea/DetailForm';
// import ChangeRequestSubmit from './components/RightPanelArea/ChangeRequestSubmit';

// Utility methods.
import utils from '../../utils';

// Const.
const TAB_TASKS = 'TAB_TASKS';
const TAB_DETAIL = 'TAB_DETAIL';

// Define class.
class RightPanelArea extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);

    this.state = {
      currentTab: TAB_TASKS
    };
  }

  updateDimensions() {
    const { dispatch } = this.props;
    const dimensions = utils.getWindowDimensions();
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

  handleTabClick(tab) {
    const { state, dispatch } = this.props;
    if (!state.rightSidebarOpened) {
      dispatch(toggleRightSidebar(state.rightSidebarOpened));
    } else if (state.rightSidebarOpened && tab === this.state.currentTab) {
      dispatch(toggleRightSidebar(state.rightSidebarOpened));
    }
    switch (tab) {
    case TAB_DETAIL:
      dispatch(setRightPanelAreaView(DETAIL));
      break;
    default:
      dispatch(setRightPanelAreaView(ACTIVITY));
    }
    this.setState({ currentTab: tab });
  }

  // Render method.
  render() {
    const { state } = this.props;

    // Right panel view.
    const currentView = state.rightPanelAreaView;
    let rightPanelArea;
    switch (currentView) {
    case ACTIVITY:
      rightPanelArea = <DocumentActivityList />;
      this.state.currentTab = TAB_TASKS;
      break;
    case DETAIL:
      rightPanelArea = <DocumentDetail />;
      this.state.currentTab = TAB_DETAIL;
      break;
    case DETAILFORM:
      rightPanelArea = <DocumentDetailForm />;
      this.state.currentTab = TAB_DETAIL;
      break;
    case VIEWER_CHANGE_REQUEST:
      // rightPanelArea = <ChangeRequestSubmit />;
      this.state.currentTab = TAB_DETAIL;
      break;
    default:
      rightPanelArea = <DocumentActivityList />;
      this.state.currentTab = TAB_TASKS;
    }

    return (
      <div>
        <div className="sidebar" style={{height: state.windowDimensions.height - 50}}>
          {rightPanelArea}
        </div>

        <Nav ulClassName="sidebar-tabs">

          <NavItem onClick={this.handleTabClick.bind(this, TAB_TASKS)}
            className={this.state.currentTab === TAB_TASKS ? 'active' : ''}>
            <Icon name="check-square-o" className="fa-fw" />
          </NavItem>

          <NavItem onClick={this.handleTabClick.bind(this, TAB_DETAIL)}
            className={this.state.currentTab === TAB_DETAIL ? 'active' : ''}>
            <Icon name="info-circle" className="fa-fw" />
          </NavItem>

        </Nav>

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
