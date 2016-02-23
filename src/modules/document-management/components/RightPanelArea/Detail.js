// Dependencies.
import React from 'react';
import { connect } from 'react-redux';

// Core components.
import {
  FormControls,
  Tooltip,
  OverlayTrigger,
  ListGroup,
  ListGroupItem,
  Button
} from 'react-bootstrap';
import Icon from 'react-fa';

// Actions.
import {
  setRightPanelAreaView,
  setContentAreaView,
  toggleModal,
  setModalView
} from '../../../../redux/actions/ui-actions';

// Components.
import Avatar from '../../../../components/Avatar';
import DetailViewDropdown from './DetailViewDropdown';

// Constants.
import {
  PREVIEW,
  DETAILFORM,
  DOWNLOAD,
  VIEWER_CHANGE_REQUEST
} from '../../../../redux/constants/ui-constants';

import moment from 'moment';


// Tooltip const.
const tooltipOwner = (
  <Tooltip id="tooltip1">This is the Owner of the Document.</Tooltip>
);
const tooltipApprover1 = (
  <Tooltip id="tooltip2">If the status is green, Approver #1 has approved the document on 12/19/2015.</Tooltip>
);
const tooltipApprover2 = (
  <Tooltip id="tooltip3">Approver #2 has approved the document on 12/20/2015.</Tooltip>
);
const tooltipApprover3 = (
  <Tooltip id="tooltip4">Approver #3 has approved the document on 12/20/2015.</Tooltip>
);
const tooltipApprover4 = (
  <Tooltip id="tooltip5">If the status is yellow, Final Approver #4 has yet to approve or reject the document.</Tooltip>
);
const tooltipStatus = (
  <Tooltip id="tooltip6">The document has been approved.</Tooltip>
);

// Panels const.
const DETAIL_PANEL = 'detail panel';
const WORKFLOW_PANEL = 'workflow panel';

// Define class.
class Detail extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);
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

  // Render method.
  render() {
    const { state } = this.props;
    let documentData = state.document ? state.document.items : [];

    // Get file details.
    const docTitle = documentData.Title;
    const docId = documentData.Id;
    const docVersion = documentData.Version;
    const docOwner = documentData.Owner.Description;
    const docAuthor = documentData.Author.Description;
    const fileUploadedBy = documentData.file_uploaded_by; //
    const fileUploadedDate = documentData.file_uploaded_date; //
    const docModifiedBy = documentData.UpdatedByName;
    const docModifiedDate = moment(documentData.UpdatedDate).format('MM/DD/YYYY');
    const docStatus = documentData.Status;
    const fileType = documentData.Type;
    const docLevel = documentData.LevelType;
    const docDisplayFolders = documentData.doc_display_folders; //
    const docDescription = documentData.doc_description; //
    const docKeywords = documentData.doc_keywords; //
    const extReferenceDocuments = documentData.ext_reference_documents; //
    const extRegulatoryRef = documentData.ext_regulatory_ref; //
    const docReviewDate = documentData.doc_review_date; //
    const docRetentionPeriod = documentData.doc_retention_period; //
    const docChangeRequest = documentData.doc_change_request; //
    const fileName = documentData.FileName;
    const fileSize = documentData.file_size; //
    const fileActive = documentData.doc_is_active; //


    // Panels
    const panelToShow = DETAIL_PANEL;
    let panelsArea;

    switch (panelToShow) {
    case DETAIL_PANEL:
      panelsArea = (
        <div className="document-details">

        {/*
          <Button bsStyle="default" bsSize="xs">Comment</Button>
          &nbsp;
          or
          &nbsp;
          <Button bsStyle="danger" bsSize="xs">Reject</Button>
          &nbsp;
          <Button bsStyle="success" bsSize="xs">Approve</Button>
          <hr />
          <Input type="textarea" label="Enter any questions or comments" />
          <Button bsStyle="info" bsSize="xs">Submit</Button>
          <hr />
          */}
          <div className="form-group">
            <Button bsSize="sm" bsStyle="success" block onClick={this.handleRightPanelButtonClick.bind(this, VIEWER_CHANGE_REQUEST)}>Submit Change Request</Button>
          </div>
          <FormControls.Static label="Title" value={docTitle} />
          <FormControls.Static label="Internal Document ID" value={docId} />
          <FormControls.Static label="Version" value={docVersion} />
          <FormControls.Static label="Document Owner" value={docOwner} />
          <FormControls.Static label="Author" value={docAuthor} />
          <FormControls.Static label="Uploaded/Referenced By" value={fileUploadedBy} />
          <FormControls.Static label="Date Uploaded/Referenced" value={fileUploadedDate} />
          <FormControls.Static label="Modified By" value={docModifiedBy} />
          <FormControls.Static label="Modified Date" value={docModifiedDate} />
          <FormControls.Static label="Document Status" value={docStatus} />
          <FormControls.Static label="Document Type" value={fileType} />
          <FormControls.Static label="Document Level" value={docLevel} />
          <FormControls.Static label="Display Folders" value={docDisplayFolders} />
          <FormControls.Static label="Description" value={docDescription} />
          <FormControls.Static label="Keywords/Tags" value={docKeywords} />
          <FormControls.Static label="Reference Documents" value={extReferenceDocuments} />
          <FormControls.Static label="Regulatory References" value={extRegulatoryRef} />
          <FormControls.Static label="Review Date" value={docReviewDate} />
          <FormControls.Static label="Retention Period" value={docRetentionPeriod} />
          <FormControls.Static label="Reason for Change" value={docChangeRequest} />
          <FormControls.Static label="File Name" value={fileName} />
          <FormControls.Static label="File Size" value={fileSize} />
          <FormControls.Static label="File Active" value={fileActive} />
          <div className="form-group">
            <Button bsSize="sm" bsStyle="danger" block>Archive</Button>
          </div>
        </div>
      );
      break;
    case WORKFLOW_PANEL:
      panelsArea = (
        <div className="nested-cards">
          <p>
            <Button bsStyle="link" bsSize="xs" className="text-muted">
              <small>
                <Icon name="chevron-left" />
                &nbsp;
                BACK TO DETAILS
              </small>
            </Button>
          </p>

          <ListGroup bsStyle="info">

            <ListGroupItem href="#link1">
              <div className="list-card neutral">
                <h4>John Doe</h4>
                <br />
                <div className="avatar default corner-icon">
                  <img src="/static/images/a1.jpg" alt="image"/>
                </div>
                <div className="meta-wrapper">
                  <div className="clearfix">
                    <p className="pull-left">10/11/2015</p>
                    <p className="pull-right default">Owner</p>
                  </div>
                </div>
              </div>
            </ListGroupItem>

            <ListGroupItem href="#link1">
              <div className="list-card approved">
                <h4>Mark Smith</h4>
                <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="avatar default corner-icon">
                  <img src="/static/images/a2.jpg" alt="image"/>
                </div>
                <div className="meta-wrapper">
                  <div className="clearfix">
                    <p className="pull-left">10/11/2015</p>
                    <p className="pull-right approved">Approved</p>
                  </div>
                </div>
              </div>
            </ListGroupItem>

            <ListGroupItem href="#link1">
              <div className="list-card pending">
                <h4>Janette Walls</h4>
                <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div className="avatar default corner-icon">
                  <img src="/static/images/a3.jpg" alt="image"/>
                </div>
                <div className="meta-wrapper">
                  <div className="clearfix">
                    <p className="pull-left">10/19/2015</p>
                    <p className="pull-right pending">Pending Approval</p>
                  </div>
                </div>
              </div>
            </ListGroupItem>

            <ListGroupItem href="#link1">
              <div className="list-card rejected">
                <h4>Bob Roberts</h4>
                <br />
                <div className="avatar default corner-icon">
                  <img src="/static/images/a4.jpg" alt="image"/>
                </div>
                <div className="meta-wrapper">
                  <div className="clearfix">
                    <p className="pull-left">10/20/2015</p>
                    <p className="pull-right rejected">Rejected</p>
                  </div>
                </div>
              </div>
            </ListGroupItem>

          </ListGroup>
          <br/><br/>
        </div>
      );
      break;
    default:
      panelsArea = null;
    }

    return (
      <div>
        <div className="fixed-title clearfix">
          <div className="pull-left">
            <DetailViewDropdown />
          </div>
          <div className="pull-right sidebar-header-actions">
              <Button bsStyle="link" bsSize="xs" onClick={this.handleContentButtonClick.bind(this, PREVIEW)}>
                <Icon name="eye" className="fa-fw text-muted" />
              </Button>
              <Button bsStyle="link" bsSize="xs" onClick={this.handleModalToggle.bind(this, DOWNLOAD)}>
                <Icon name="download" className="fa-fw text-muted" />
              </Button>
              <Button bsStyle="link" bsSize="xs" onClick={this.handleRightPanelButtonClick.bind(this, DETAILFORM)}>
                <Icon name="pencil" className="fa-fw text-muted" />
              </Button>
          </div>
        </div>

        <div className="sidebar-details">
          <div className="workflow-avatars col-md-12">
            <div className="document-details">
              <FormControls.Static label="Workflow" />
            </div>
            <OverlayTrigger placement="bottom" overlay={tooltipOwner}>
              <Avatar src="/static/images/a1.jpg" status="approved" shape="circle" size=""/>
            </OverlayTrigger>
            <div className="divider-vertical"></div>
            <OverlayTrigger placement="bottom" overlay={tooltipApprover1}>
              <Avatar src="/static/images/a2.jpg" status="approved" shape="circle" size=""/>
            </OverlayTrigger>
            <OverlayTrigger placement="bottom" overlay={tooltipApprover2}>
              <Avatar src="/static/images/a3.jpg" status="approved" shape="circle" size=""/>
            </OverlayTrigger>
            <OverlayTrigger placement="bottom" overlay={tooltipApprover3}>
              <Avatar src="/static/images/a4.jpg" status="approved" shape="circle" size=""/>
            </OverlayTrigger>
            <div className="divider-vertical"></div>
            <OverlayTrigger placement="bottom" overlay={tooltipApprover4}>
              <Avatar src="/static/images/a5.jpg" status="approved" shape="circle" size=""/>
            </OverlayTrigger>
            <div className="divider-vertical"></div>
            <OverlayTrigger placement="bottom" overlay={tooltipStatus}>
              <div className="avatar unchecked">
                <Icon name="check" className="fa-lg" />
              </div>
            </OverlayTrigger>
          </div>

          {panelsArea}

        </div>
      </div>
    );
  }
}

// Parent Functions.
Detail.propTypes = {
  dispatch: React.PropTypes.func,
  state: React.PropTypes.object
};
const mapStateToProps = (state) => ({
  state
});

// Export.
export default connect(mapStateToProps)(Detail);
