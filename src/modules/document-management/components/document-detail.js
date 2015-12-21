// Dependencies.
import React from 'react';
// import {Link} from 'react-router';
// import {LinkContainer} from 'react-router-bootstrap';

// Core components.
import {Button, ButtonGroup, DropdownButton, MenuItem, FormControls} from 'react-bootstrap';
import Icon from 'react-fa';


// Define class.
class Layout extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);

    this.state = {
    };
  }

  showDetailForm(e) {
    e.preventDefault();
    this.props.showDetailForm();
  }

  // Render method.
  render() {
    return (
      <div>

        <div className="fixed-title">
          <ButtonGroup className="title-dropdown">
            <DropdownButton id="doc_mgt-actions_dropdown" title="All Tasks" bsStyle="link" bsSize="lg">
              <MenuItem eventKey="1">Pending <small>(2)</small></MenuItem>
              <MenuItem eventKey="2">Ready for Release <small>(1)</small></MenuItem>
              <MenuItem eventKey="3">Change Requests <small>(7)</small></MenuItem>
              <MenuItem eventKey="4">All Tasks</MenuItem>
            </DropdownButton>
          </ButtonGroup>
        </div>

        <div className="workflow-avatars">
          <img src="/static/images/a1.jpg" alt="image"/>
          <div className="divider-vertical"></div>
          <img src="/static/images/a2.jpg" alt="image"/>
          <img src="/static/images/a3.jpg" alt="image"/>
          <img src="/static/images/a4.jpg" alt="image"/>
          <div className="divider-vertical"></div>
          <Icon name="check-circle-o" className="fa-fw fa-3x text-muted" />
        </div>

        <div className="form-horizontal static">
          <FormControls.Static label="Title" labelClassName="col-md-4" wrapperClassName="col-md-8" value="Doc Title" />
          <FormControls.Static label="Internal Document ID" labelClassName="col-md-4" wrapperClassName="col-md-8" value="123456789-0" />
          <FormControls.Static label="Version" labelClassName="col-md-4" wrapperClassName="col-md-8" value="1.0"/>
          <FormControls.Static label="Document Owner" labelClassName="col-md-4" wrapperClassName="col-md-8" value="John Doe"/>
          <FormControls.Static label="Author" labelClassName="col-md-4" wrapperClassName="col-md-8" value="John Doe"/>
          <FormControls.Static label="Uploaded/Referenced By" labelClassName="col-md-4" wrapperClassName="col-md-8" value="John Doe"/>
          <FormControls.Static label="Date Uploaded/Referenced" labelClassName="col-md-4" wrapperClassName="col-md-8" value="12/19/2015"/>
          <FormControls.Static label="Modified By" labelClassName="col-md-4" wrapperClassName="col-md-8" value="John Doe"/>
          <FormControls.Static label="Modified Date" labelClassName="col-md-4" wrapperClassName="col-md-8" value="12/20/2015"/>
          <FormControls.Static label="Document Status" labelClassName="col-md-4" wrapperClassName="col-md-8" value="Pending Approval"/>
          <FormControls.Static label="Document Type" labelClassName="col-md-4" wrapperClassName="col-md-8" value="Document"/>
          <FormControls.Static label="Document Level" labelClassName="col-md-4" wrapperClassName="col-md-8" value="Level 1"/>
          <FormControls.Static label="Display Folders" labelClassName="col-md-4" wrapperClassName="col-md-8" value=""/>
          <FormControls.Static label="Description" labelClassName="col-md-4" wrapperClassName="col-md-8" value="John Doe"/>
          <FormControls.Static label="Keywords/Tags" labelClassName="col-md-4" wrapperClassName="col-md-8" value=""/>
          <FormControls.Static label="Reference Documents" labelClassName="col-md-4" wrapperClassName="col-md-8" value=""/>
          <FormControls.Static label="Regulatory References" labelClassName="col-md-4" wrapperClassName="col-md-8" value=""/>
          <FormControls.Static label="Review Date" labelClassName="col-md-4" wrapperClassName="col-md-8" value="12/20/2015"/>
          <FormControls.Static label="Retention Period" labelClassName="col-md-4" wrapperClassName="col-md-8" value=""/>
          <FormControls.Static label="Reason for Change" labelClassName="col-md-4" wrapperClassName="col-md-8" value="Slight revisions"/>
          <FormControls.Static label="File Name" labelClassName="col-md-4" wrapperClassName="col-md-8" value="OSHA_V2.0.docx"/>
          <FormControls.Static label="File Size" labelClassName="col-md-4" wrapperClassName="col-md-8" value="2.5 MB"/>
        </div>

        <br />
        <Button bsStyle="warning" bsSize="sm" onClick={this.showDetailForm.bind(this)}>
          Edit
        </Button>

      </div>
    );
  }
}

// Parent Functions.
Layout.propTypes = {
  showDetailForm: React.PropTypes.func
};

// Export.
export default Layout;
