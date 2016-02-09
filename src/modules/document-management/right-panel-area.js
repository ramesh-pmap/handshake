// Dependencies.
import React from 'react';
import { connect } from 'react-redux';
import {
  getWindowDimensions,
  toggleRightSidebar,
  setRightPanelAreaView
} from '../../redux/actions';
import {
  ACTIVITY,
  DETAIL,
  DETAILFORM,
  DETAIL_DRAFT,
  DETAIL_SUBMITTED,
  VIEWER_CHANGE_REQUEST,
  APPROVE_CHANGE_REQUEST,
  VERSION_HISTORY,
  RELEASE_NOTIFICATION,
  APPROVAL_WORKFLOW,
  PERIODIC_REVIEW
} from '../../redux/constants';

import { Nav, NavItem, Tooltip, OverlayTrigger } from 'react-bootstrap';
import Icon from 'react-fa';

// Components.
import DocumentActivityList from './components/RightPanelArea/ActivityList';
import DocumentDetail from './components/RightPanelArea/Detail';
import DocumentDetailForm from './components/RightPanelArea/DetailForm';
import DocumentDetailDraft from './components/RightPanelArea/DetailDraft';
import DocumentDetailSubmitted from './components/RightPanelArea/DetailSubmitted';
import ChangeRequestSubmit from './components/RightPanelArea/ChangeRequestSubmit';
import ChangeRequestApprove from './components/RightPanelArea/ChangeRequestApprove';
import VersionHistory from './components/RightPanelArea/VersionHistory';
import ReleaseNotification from './components/RightPanelArea/ReleaseNotification';
import ApprovalWorkflow from './components/RightPanelArea/ApprovalWorkflow';
import PeriodicReview from './components/RightPanelArea/PeriodicReview';

// Utility methods.
import utils from '../../utils';

// Const.
const TAB_TASKS = 'TAB_TASKS';
const TAB_DETAIL = 'TAB_DETAIL';

const expandCollapseTooltip = <Tooltip id="expandCollapseTooltip">Expand/Collapse</Tooltip>;
// const tasksTooltip = <Tooltip id="tasksTooltip">Tasks</Tooltip>;
// const detailTooltip = <Tooltip id="detailTooltip">Document Detail</Tooltip>;

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
    if (!state.ui.rightSidebarOpened) {
      dispatch(toggleRightSidebar(state.ui.rightSidebarOpened));
    } else if (state.ui.rightSidebarOpened && tab === this.state.currentTab) {
      dispatch(toggleRightSidebar(state.ui.rightSidebarOpened));
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

  handleCloseButtonClick() {
    const { state, dispatch } = this.props;
    dispatch(toggleRightSidebar(state.ui.rightSidebarOpened));
  }

  // Render method.
  render() {
    const { state } = this.props;

    // Right panel view.
    const currentView = state.ui.rightPanelAreaView;
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
    case DETAIL_DRAFT:
      rightPanelArea = <DocumentDetailDraft />;
      this.state.currentTab = TAB_DETAIL;
      break;
    case DETAIL_SUBMITTED:
      rightPanelArea = <DocumentDetailSubmitted />;
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
      this.state.currentTab = TAB_DETAIL;
      break;
    case APPROVAL_WORKFLOW:
      rightPanelArea = <ApprovalWorkflow />;
      this.state.currentTab = TAB_DETAIL;
      break;
    case RELEASE_NOTIFICATION:
      rightPanelArea = <ReleaseNotification />;
      this.state.currentTab = TAB_DETAIL;
      break;
    case PERIODIC_REVIEW:
      rightPanelArea = <PeriodicReview />;
      this.state.currentTab = TAB_DETAIL;
      break;
    default:
      rightPanelArea = <DocumentActivityList />;
      this.state.currentTab = TAB_TASKS;
    }

    let sidebarHeight = state.ui.windowDimensions.height;
    if (state.ui.windowDimensions.width >= 768) {
      sidebarHeight = state.ui.windowDimensions.height - 50;
    }

    return (
      <div>
        <div className="sidebar" style={{height: sidebarHeight}}>
          {rightPanelArea}
        </div>

        <Nav ulClassName="sidebar-tabs">

          <OverlayTrigger placement="left" overlay={expandCollapseTooltip}>
            <NavItem onClick={this.handleCloseButtonClick.bind(this, TAB_TASKS)}
              className="active">
              {/* className={this.state.currentTab === TAB_TASKS ? 'active' : ''}> */}
              <Icon name="expand" className="fa-fw" />
            </NavItem>
          </OverlayTrigger>

          {/*
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
          */}

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
