// Dependencies.
import React from 'react';
// import {Link} from 'react-router';
// import {LinkContainer} from 'react-router-bootstrap';

// Core components.
import {FormControls, Tooltip, OverlayTrigger} from 'react-bootstrap';
import Icon from 'react-fa';

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
// Define class.
class Layout extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);
  }

  showDetailForm(e) {
    e.preventDefault();
    this.props.showDetailForm();
  }
  showPreview(e) {
    e.preventDefault();
    this.props.showPreview();
  }

  // Render method.
  render() {
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
              <div className="avatar default">
                <img src="/static/images/a1.jpg" alt="image"/>
              </div>
            </OverlayTrigger>
            <div className="divider-vertical"></div>
            <OverlayTrigger placement="bottom" overlay={tooltipApprover1}>
              <div className="avatar approved">
                <img src="/static/images/a2.jpg" alt="image"/>
              </div>
            </OverlayTrigger>
            <OverlayTrigger placement="bottom" overlay={tooltipApprover2}>
              <div className="avatar pending">
                <img src="/static/images/a3.jpg" alt="image"/>
              </div>
            </OverlayTrigger>
            <OverlayTrigger placement="bottom" overlay={tooltipApprover3}>
              <div className="avatar rejected">
                <img src="/static/images/a4.jpg" alt="image"/>
              </div>
            </OverlayTrigger>
            <div className="divider-vertical"></div>
            <OverlayTrigger placement="bottom" overlay={tooltipApprover3}>
              <div className="avatar rejected">
                <img src="/static/images/a4.jpg" alt="image"/>
              </div>
            </OverlayTrigger>
            <div className="divider-vertical"></div>
            <OverlayTrigger placement="bottom" overlay={tooltipStatus}>
              <div className="avatar checked">
                <Icon name="check" className="fa-lg" />
              </div>
            </OverlayTrigger>
          </div>

          <div className="document-details">
            <FormControls.Static label="Title" value="Doc Title" />
            <FormControls.Static label="Internal Document ID" value="123456789-0" />
            <FormControls.Static label="Version" value="2.0"/>
            <FormControls.Static label="Document Owner" value="John Doe"/>
            <FormControls.Static label="Author" value="John Doe"/>
            <FormControls.Static label="Uploaded/Referenced By" value="John Doe"/>
            <FormControls.Static label="Date Uploaded/Referenced" value="11/7/2015"/>
            <FormControls.Static label="Modified By" value="John Doe"/>
            <FormControls.Static label="Modified Date" value="11/8/2015"/>
            <FormControls.Static label="Document Status" value="Pending Approval"/>
            <FormControls.Static label="Document Type" value="Document"/>
            <FormControls.Static label="Document Level" value="Level 1"/>
            <FormControls.Static label="Display Folders" value="-"/>
            <FormControls.Static label="Description" value="John Doe"/>
            <FormControls.Static label="Keywords/Tags" value="-"/>
            <FormControls.Static label="Reference Documents" value="-"/>
            <FormControls.Static label="Regulatory References" value="-"/>
            <FormControls.Static label="Review Date" value="12/20/2015"/>
            <FormControls.Static label="Retention Period" value="-"/>
            <FormControls.Static label="Reason for Change" value="Slight revisions"/>
            <FormControls.Static label="File Name" value="OSHA_V2.0.docx"/>
            <FormControls.Static label="File Size" value="2.5 MB"/>
          </div>
        </div>
      </div>
    );
  }
}

// Parent Functions.
Layout.propTypes = {
  showDetailForm: React.PropTypes.func,
  showPreview: React.PropTypes.func
};

// Export.
export default Layout;
