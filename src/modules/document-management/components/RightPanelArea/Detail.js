// Dependencies.
import React from 'react';
import { connect } from 'react-redux';

// Core components.
import {FormControls, Tooltip, OverlayTrigger, ListGroup, ListGroupItem, Button /* , Input */ } from 'react-bootstrap';
import Icon from 'react-fa';

// Tooltip const.
const tooltipOwner = (
  <Tooltip id="tooltip1">This is the Owner of the Document.</Tooltip>
);
const tooltipApprover1 = (
  <Tooltip id="tooltip2">If the status is green, Person #2 has approved the document on 12/19/2015.</Tooltip>
);
const tooltipApprover2 = (
  <Tooltip id="tooltip3">If the status is yellow, it is pending approval from Person #3 on 12/20/2015.</Tooltip>
);
const tooltipApprover3 = (
  <Tooltip id="tooltip4">If the status is red, Person #4 has rejected the document on 12/20/2015.</Tooltip>
);
const tooltipStatus = (
  <Tooltip id="tooltip5">The document has been approved.</Tooltip>
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

  showDetailForm(e) {
    e.preventDefault();
  }

  showPreview(e) {
    e.preventDefault();
  }

  showDetailPreview(e) {
    e.preventDefault();
  }

  showWorkflowPreview(e) {
    e.preventDefault();
  }

  // Render method.
  render() {
    const { state } = this.props;
    const currentFileId = state.currentFileId;
    const docFiles = state.docFiles;
    let fileData = [];

    // Find selected file in the array.
    if (docFiles) {
      for (let i = 0; i < docFiles.length; i++) {
        if (docFiles[i].doc_id === currentFileId) {
          fileData = docFiles[i];
        }
      }
    }

    // Get file details.
    const docTitle = fileData.doc_title;
    const docId = fileData.doc_id;
    const docVersion = fileData.doc_version;
    const docOwner = fileData.doc_owner;
    const docAuthor = fileData.doc_author;
    const fileUploadedBy = fileData.file_uploaded_by;
    const fileUploadedDate = fileData.file_uploaded_date;
    const docModifiedBy = fileData.doc_modified_by;
    const docModifiedDate = fileData.doc_modified_date;
    const docStatusId = fileData.doc_status_id;
    const fileType = fileData.file_type;
    const docLevel = fileData.doc_level;
    const docDisplayFolders = fileData.doc_display_folders;
    const docDescription = fileData.doc_description;
    const docKeywords = fileData.doc_keywords;
    const extReferenceDocuments = fileData.ext_reference_documents;
    const extRegulatoryRef = fileData.ext_regulatory_ref;
    const docReviewDate = fileData.doc_review_date;
    const docRetentionPeriod = fileData.doc_retention_period;
    const docChangeRequest = fileData.doc_change_request;
    const fileName = fileData.file_name;
    const fileSize = fileData.file_size;


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

          <FormControls.Static label="Title" value={docTitle} />
          <FormControls.Static label="Internal Document ID" value={docId} />
          <FormControls.Static label="Version" value={docVersion} />
          <FormControls.Static label="Document Owner" value={docOwner} />
          <FormControls.Static label="Author" value={docAuthor} />
          <FormControls.Static label="Uploaded/Referenced By" value={fileUploadedBy} />
          <FormControls.Static label="Date Uploaded/Referenced" value={fileUploadedDate} />
          <FormControls.Static label="Modified By" value={docModifiedBy} />
          <FormControls.Static label="Modified Date" value={docModifiedDate} />
          <FormControls.Static label="Document Status" value={docStatusId} />
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
        </div>
      );
      break;
    case WORKFLOW_PANEL:
      panelsArea = (
        <div className="nested-cards">
          <p>
            <Button bsStyle="link" bsSize="xs" className="text-muted" onClick={this.showDetailPreview.bind(this)}>
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
                <div className="avatar default corner-icon" onClick={this.showWorkflowPreview.bind(this)}>
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
                <div className="avatar default corner-icon" onClick={this.showWorkflowPreview.bind(this)}>
                  <img src="/static/images/a2.jpg" alt="image"/>
                </div>
                <div className="meta-wrapper">
                  <div className="clearfix">
                    <p className="pull-left">10/11/2015</p>
                    <p className="pull-right approved">Aprroved</p>
                  </div>
                </div>
              </div>
            </ListGroupItem>

            <ListGroupItem href="#link1">
              <div className="list-card pending">
                <h4>Janette Walls</h4>
                <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div className="avatar default corner-icon" onClick={this.showWorkflowPreview.bind(this)}>
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
                <div className="avatar default corner-icon" onClick={this.showWorkflowPreview.bind(this)}>
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
          <h3 className="pull-left">Selected File</h3>
          <div className="pull-right sidebar-header-actions">
            <Icon name="eye" className="fa-fw fa-lg text-muted" onClick={this.showPreview.bind(this)} />
            <Icon name="download" className="fa-fw fa-lg text-muted" />
            <Icon name="pencil" className="fa-fw fa-lg text-muted" onClick={this.showDetailForm.bind(this)}/>
          </div>
        </div>

        <div className="sidebar-details">
          <div className="workflow-avatars">
            <div className="document-details">
              <FormControls.Static label="Workflow" />
            </div>
            <OverlayTrigger placement="bottom" overlay={tooltipOwner}>
              <div className="avatar default" onClick={this.showWorkflowPreview.bind(this)}>
                <img src="/static/images/a1.jpg" alt="image"/>
              </div>
            </OverlayTrigger>
            <div className="divider-vertical"></div>
            <OverlayTrigger placement="bottom" overlay={tooltipApprover1}>
              <div className="avatar approved" onClick={this.showWorkflowPreview.bind(this)}>
                <img src="/static/images/a2.jpg" alt="image"/>
              </div>
            </OverlayTrigger>
            <OverlayTrigger placement="bottom" overlay={tooltipApprover2}>
              <div className="avatar pending" onClick={this.showWorkflowPreview.bind(this)}>
                <img src="/static/images/a3.jpg" alt="image"/>
              </div>
            </OverlayTrigger>
            <OverlayTrigger placement="bottom" overlay={tooltipApprover3}>
              <div className="avatar pending" onClick={this.showWorkflowPreview.bind(this)}>
                <img src="/static/images/a4.jpg" alt="image"/>
              </div>
            </OverlayTrigger>
            <div className="divider-vertical"></div>
            <OverlayTrigger placement="bottom" overlay={tooltipApprover3}>
              <div className="avatar default" onClick={this.showWorkflowPreview.bind(this)}>
                <img src="/static/images/a4.jpg" alt="image"/>
              </div>
            </OverlayTrigger>
            <div className="divider-vertical"></div>
            <OverlayTrigger placement="bottom" overlay={tooltipStatus}>
              <div className="avatar unchecked" onClick={this.showWorkflowPreview.bind(this)}>
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
  showDetailForm: React.PropTypes.func,
  showPreview: React.PropTypes.func,
  dispatch: React.PropTypes.func,
  state: React.PropTypes.object
};
const mapStateToProps = (state) => ({
  state
});

// Export.
export default connect(mapStateToProps)(Detail);