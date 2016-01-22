// Dependencies.
import React from 'react';
import { connect } from 'react-redux';

// Actions.
import {
  changeFolder,
  setFileManagerData,
  setContentAreaView,
  toggleRightSidebar,
  setRightPanelAreaView,
  toggleModal,
  setModalView
} from '../../redux/actions';

// Constants.
import {
  DEFAULT,
  PREVIEW,
  UPLOAD,
  ACTIVITY,
  DETAIL,
  DETAILFORM,
  VIEWER_CHANGE_REQUEST,
  APPROVE_CHANGE_REQUEST,
  APPROVAL_WORKFLOW,
  SEARCH_RESULTS,
  TOGGLE_RIGHT_SIDEBAR,
  SHARE,
  CHECKIN,
  CHECKOUT,
  DOWNLOAD,
  UPLOAD_NEW_VERSION,
  RELEASE_NOTIFICATION,
  PERIODIC_REVIEW
  // DATAGRID
} from '../../redux/constants';

// Core components.
import { DropdownButton, MenuItem } from 'react-bootstrap';

// Layouts.
import Main from '../../layouts/main';

import ContentArea from './content-area';
import RightPanelArea from './right-panel-area';
import ModalArea from './modal-area';

// Utility methods.
import utils from '../../utils';

// Json file with folder structure data.
// const SourceData = '../../../static/data/documents-data-DEMO.json';
import Firebase from 'firebase';


// Define class.
class Page extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);

    // Set page title.
    utils.title(props);
  }

  componentDidMount() {
    const { state, dispatch } = this.props;
    // const { dispatch } = this.props;
    // Please do not remove the commented area.

    // // JSON FILE
    // // Fetch Source Json data.
    // fetch(SourceData).then(response => response.json())
    //   .then(data => {
    //     // Redux action.
    //     const parsedFolders = utils.parseTreeWithBreadcrumb(data.document_folder);
    //     const flatFolders = utils.convertToFlatTree([], parsedFolders);
    //     const docFiles = data.document;
    //     dispatch(setFileManagerData(parsedFolders[0], flatFolders, docFiles));
    //     dispatch(changeFolder(0));
    //   })
    //   .catch(error => {this.setState({error}); });

    // FIREBASE`
    // Fetch Source Json data from Firebase
    let ref = new Firebase(state.firebaseUrl);
    ref.once('value', data => {
      // console.log('data from firebase', data.val());
      // Redux action.
      const parsedFolders = utils.parseTreeWithBreadcrumb(data.val().document_folder);
      const flatFolders = utils.convertToFlatTree([], parsedFolders);
      const docFiles = data.val().document;
      dispatch(setFileManagerData(parsedFolders[0], flatFolders, docFiles));
      dispatch(changeFolder(0));
    });

    // // RETHINKDB
    // // Fetching data from RethinkDB.
    // fetch('http://localhost:3001/documents').then(response => response.json())
    //   .then(data => {
    //     // Redux action.
    //     const parsedFolders = utils.parseTreeWithBreadcrumb(data[0].document_folder);
    //     const flatFolders = utils.convertToFlatTree([], parsedFolders);
    //     const docFiles = data[0].document;
    //     dispatch(setFileManagerData(parsedFolders[0], flatFolders, docFiles));
    //     dispatch(changeFolder(0));
    //   })
    //   .catch(error => {this.setState({error}); });

    // Set initial state.
    dispatch(setContentAreaView(DEFAULT));
    dispatch(setRightPanelAreaView(ACTIVITY));
    dispatch(toggleModal(false));
  }

  handleContentButtonClick(view) {
    const { dispatch } = this.props;
    dispatch(setContentAreaView(view));
  }

  handleRightPanelButtonClick(view) {
    const { dispatch } = this.props;
    dispatch(setRightPanelAreaView(view));
  }

  handleModalToggle(view) {
    const { dispatch } = this.props;
    dispatch(setModalView(view));
    dispatch(toggleModal(true));
  }

  handleRightSidePanelToggle() {
    const { state, dispatch } = this.props;
    dispatch(toggleRightSidebar(state.rightSidebarOpened));
  }

  // Render method.
  render() {
    const { state } = this.props;
    // console.log('state:', state);
    return (
      <div>
        <Main>

          {/* Column wrapper. */}
          <div className={ state.rightSidebarOpened ? 'main-col-wrapper sidebar--open clearfix' : 'main-col-wrapper sidebar--closed clearfix' }>

            {/* Left (Main) column. */}
            <div className="main-col main-col-left">

              <div style={{ padding: '20px 20px 0', marginBottom: -10 }}>

                <DropdownButton id="tempNavigationDropdown" bsSize="xs" title=" Temporary Navigation">
                  <MenuItem onClick={this.handleContentButtonClick.bind(this, DEFAULT)}> Default </MenuItem>
                  <MenuItem onClick={this.handleContentButtonClick.bind(this, PREVIEW)}> Preview </MenuItem>
                  <MenuItem onClick={this.handleContentButtonClick.bind(this, UPLOAD)}> Upload </MenuItem>
                  <MenuItem onClick={this.handleContentButtonClick.bind(this, SEARCH_RESULTS)}> Search Results </MenuItem>
                  <MenuItem className="divider" />
                  <MenuItem onClick={this.handleRightPanelButtonClick.bind(this, ACTIVITY)}> Activity List</MenuItem>
                  <MenuItem onClick={this.handleRightPanelButtonClick.bind(this, DETAIL)}> Detail </MenuItem>
                  <MenuItem onClick={this.handleRightPanelButtonClick.bind(this, DETAILFORM)}> Detail Form </MenuItem>
                  <MenuItem onClick={this.handleRightPanelButtonClick.bind(this, RELEASE_NOTIFICATION)}> Release Notification </MenuItem>
                  <MenuItem onClick={this.handleRightPanelButtonClick.bind(this, VIEWER_CHANGE_REQUEST)}> Change Request </MenuItem>
                  <MenuItem onClick={this.handleRightPanelButtonClick.bind(this, APPROVE_CHANGE_REQUEST)}> Approve Change Request </MenuItem>
                  <MenuItem onClick={this.handleRightPanelButtonClick.bind(this, APPROVAL_WORKFLOW)}> Approval Workflow </MenuItem>
                  <MenuItem onClick={this.handleRightPanelButtonClick.bind(this, PERIODIC_REVIEW)}> Periodic Review </MenuItem>
                  <MenuItem className="divider" />
                  <MenuItem onClick={this.handleModalToggle.bind(this, CHECKIN)}>Check In</MenuItem>
                  <MenuItem onClick={this.handleModalToggle.bind(this, CHECKOUT)}>Check Out</MenuItem>
                  <MenuItem onClick={this.handleModalToggle.bind(this, DOWNLOAD)}>Download</MenuItem>
                  <MenuItem onClick={this.handleModalToggle.bind(this, UPLOAD_NEW_VERSION)}>Upload New Version</MenuItem>
                  <MenuItem className="divider" />
                  <MenuItem onClick={this.handleModalToggle.bind(this, SHARE)}>Share</MenuItem>
                  <MenuItem onClick={this.handleRightSidePanelToggle.bind(this, TOGGLE_RIGHT_SIDEBAR)}>Toggle Right Panel</MenuItem>
                </DropdownButton>
              </div>

              {/* ContentArea component */}
              <ContentArea />

            </div>

            {/* Right (Side Panel) column. */}
            <div className="main-col main-col-right">

              {/* RightPanelArea component */}
              <RightPanelArea />

            </div>
          </div>
        </Main>

        {/* Modal view component */}
        <ModalArea />
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
