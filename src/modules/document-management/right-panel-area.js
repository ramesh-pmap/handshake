// Dependencies.
import React from 'react';
import { connect } from 'react-redux';
import { getWindowDimensions, toggleRightSidebar, setRightPanelAreaView } from '../../redux/actions';
import { ACTIVITY, DETAIL, DETAILFORM, VIEWER_CHANGE_REQUEST, APPROVE_CHANGE_REQUEST, VERSION_HISTORY, APPROVAL_WORKFLOW } from '../../redux/constants';

import {Nav, NavItem, Tooltip, OverlayTrigger} from 'react-bootstrap';
import Icon from 'react-fa';

// Components.
import DocumentActivityList from './components/RightPanelArea/ActivityList';
import DocumentDetail from './components/RightPanelArea/Detail';
import DocumentDetailForm from './components/RightPanelArea/DetailForm';
import ChangeRequestSubmit from './components/RightPanelArea/ChangeRequestSubmit';
import ChangeRequestApprove from './components/RightPanelArea/ChangeRequestApprove';
import VersionHistory from './components/RightPanelArea/VersionHistory';
import ApprovalWorkflow from './components/RightPanelArea/ApprovalWorkflow';

// Utility methods.
import utils from '../../utils';

// Const.
const TAB_TASKS = 'TAB_TASKS';
const TAB_DETAIL = 'TAB_DETAIL';
const TAB_VERSION_HISTORY = 'TAB_VERSION_HISTORY';

const tasksTooltip = <Tooltip id="tasksTooltip">Tasks</Tooltip>;
const detailTooltip = <Tooltip id="detailTooltip">Document Detail</Tooltip>;
const versionHistoryTooltip = <Tooltip id="versionHistoryTooltip">Version History</Tooltip>;

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
    case TAB_VERSION_HISTORY:
      dispatch(setRightPanelAreaView(VERSION_HISTORY));
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
      rightPanelArea = <ChangeRequestSubmit />;
      this.state.currentTab = TAB_DETAIL;
      break;
    case APPROVE_CHANGE_REQUEST:
      rightPanelArea = <ChangeRequestApprove />;
      this.state.currentTab = TAB_DETAIL;
      break;
    case VERSION_HISTORY:
      rightPanelArea = <VersionHistory />;
      this.state.currentTab = TAB_VERSION_HISTORY;
      break;
    case APPROVAL_WORKFLOW:
      rightPanelArea = <ApprovalWorkflow />;
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

          <OverlayTrigger placement="left" overlay={tasksTooltip}>
            <NavItem onClick={this.handleTabClick.bind(this, TAB_TASKS)}
              className={this.state.currentTab === TAB_TASKS ? 'active' : ''}>
              <Icon name="check-square-o" className="fa-fw" />
            </NavItem>
          </OverlayTrigger>

          <OverlayTrigger placement="left" overlay={detailTooltip}>
            <NavItem onClick={this.handleTabClick.bind(this, TAB_DETAIL)}
              className={this.state.currentTab === TAB_DETAIL ? 'active' : ''}>
              <Icon name="info-circle" className="fa-fw" />
            </NavItem>
          </OverlayTrigger>

          <OverlayTrigger placement="left" overlay={versionHistoryTooltip}>
            <NavItem onClick={this.handleTabClick.bind(this, TAB_VERSION_HISTORY)}
              className={this.state.currentTab === TAB_VERSION_HISTORY ? 'active' : ''}>
              <Icon name="list-ol" className="fa-fw" />
            </NavItem>
          </OverlayTrigger>

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
