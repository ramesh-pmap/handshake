// Dependencies.
import React from 'react';
import { connect } from 'react-redux';
import { setRightPanelAreaView } from '../../../../redux/actions/ui-actions';
import { DETAIL_DRAFT, ACTIVITY } from '../../../../redux/constants/ui-constants';

import { Row, Col, Button, Input, FormControls } from 'react-bootstrap';
// import Icon from 'react-fa';
import Select from 'react-select';

// Components.
import Avatar from '../../../../components/Avatar';
import DataSelect from '../../../../components/DataForms/DataSelect';


// Define class.
class DetailForm extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);

    this.state = {
      workflowFormIsVisible: false,
      isDocViewPrivate: false
    };
  }

  // handleSaveButtonClick(view) {
  //   const { dispatch } = this.props;
  //   dispatch(setRightPanelAreaView(view));
  // }

  handleRightPanelButtonClick(view) {
    const { dispatch } = this.props;
    dispatch(setRightPanelAreaView(view));
  }

  handleChange(date) {
    this.setState({ startDate: date });
  }

  handleDocumentLevelChange(val) {
    // alert(val);
    if (val >= 1) {
      this.setState({ workflowFormIsVisible: true });
    } else {
      this.setState({ workflowFormIsVisible: false });
    }
  }

  handleDocViewChange(val) {
    if (val === 'Private') {
      this.setState({ isDocViewPrivate: true });
    } else {
      this.setState({ isDocViewPrivate: false });
    }
  }


  // Render method.
  render() {
    const { state } = this.props;
    let documentData = state.document ? state.document.items : [];

    // Get file details.
    const docTitle = documentData.Title;
    const docId = documentData.Id;
    const docVersion = documentData.Version;
    // const docOwner = documentData.OwnerId; //
    // const docAuthor = documentData.AuthorId; //
    // const fileUploadedBy = documentData.file_uploaded_by; //
    // const fileUploadedDate = documentData.file_uploaded_date; //
    // const docModifiedBy = documentData.UpdatedByName;
    // const docModifiedDate = documentData.UpdatedDate;
    // const docStatus = documentData.Status;
    // const fileType = documentData.Type;
    // const docLevel = documentData.LevelType;
    // const docDisplayFolders = documentData.doc_display_folders; //
    // const docDescription = documentData.doc_description; //
    // const docKeywords = documentData.doc_keywords; //
    // const extReferenceDocuments = documentData.ext_reference_documents; //
    // const extRegulatoryRef = documentData.ext_regulatory_ref; //
    // const docReviewDate = documentData.doc_review_date; //
    // const docRetentionPeriod = documentData.doc_retention_period; //
    // const docChangeRequest = documentData.doc_change_request; //
    // const fileName = documentData.FileName;
    // const fileSize = documentData.file_size; //
    // const fileActive = documentData.doc_is_active; //

    const employeePicklistOptions = [
      { value: 'John Smith', label: 'John Smith', clearableValue: false },
      { value: 'Bob Roberts', label: 'Bob Roberts', clearableValue: false },
      { value: 'Janette Walls', label: 'Janette Walls', clearableValue: false }
    ];
    const businessProcessOptions = [
      {value: 'EHS', label: 'EHS'},
      {value: 'Quality', label: 'Quality'},
      {value: 'Supply Chain', label: 'Supply Chain'},
      {value: 'Operations', label: 'Operations'},
      {value: 'Retail', label: 'Retail'},
      {value: 'Human Resources', label: 'Human Resources'},
    ];
    const docTypePicklistOptions = [
      { value: 'Document', label: 'Document'},
      { value: 'Images', label: 'Images'},
      { value: 'Photo', label: 'Photo'},
      { value: 'Spreadsheet', label: 'Spreadsheet'}
    ];
    const docLevelPicklistOptions = [
      { value: '1', label: 'Level 1'},
      { value: '2', label: 'Level 2'},
      { value: '3', label: 'Level 3'},
      { value: '4', label: 'Level 4'}
    ];
    const documentViewOptions = [
      { value: 'Public', label: 'Public'},
      { value: 'Private', label: 'Private'}
    ];
    const retentionPeriodOptions = [
      { value: 'Not Applicable', label: 'Not Applicable'},
      { value: '6 Months', label: '6 Months'},
      { value: '1 Year', label: '1 Year'},
      { value: '3 Years', label: '3 Years'},
      { value: '5 Years', label: '5 Years'},
      { value: '10 Years', label: '10 Years'},
      { value: '15 Years', label: '15 Years'},
      { value: '30 Years', label: '30 Years'}
    ];
    const documentScope = [
      { value: 'Corporate', label: 'Corporate'},
      { value: 'Division', label: 'Division'},
      { value: 'Facility', label: 'Facility'}
    ];

    const documentDepartment = [
      { value: 'Department 1', label: 'Department 1'},
      { value: 'Department 2', label: 'Department 2'},
      { value: 'Department 3', label: 'Department 3'},
      { value: 'Department 4', label: 'Department 4'}
    ];

    const selectNoResultsText = 'Sorry, the name you type cannot be found.';

    let workflowForm;
    if (this.state.workflowFormIsVisible) {
      workflowForm = (
        <div className="well">
          <p><small>Assign an approver to each position in the approval process.</small></p>
          <p><strong>First Stage</strong></p>
          <hr/>
          <Row className="form-group">
            <Col xs={2}>
              <Avatar />
            </Col>
            <Col xs={10}>
              <Select
                name="form-control"
                noResultsText={selectNoResultsText}
                value=""
                options={employeePicklistOptions}
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Col xs={2}>
              <Avatar />
            </Col>
            <Col xs={10}>
              <Select
                name="form-control"
                noResultsText={selectNoResultsText}
                value=""
                options={employeePicklistOptions}
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Col xs={2}>
              <Avatar />
            </Col>
            <Col xs={10}>
              <Select
                name="form-control"
                noResultsText={selectNoResultsText}
                value=""
                options={employeePicklistOptions}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Input type="number" label="Approval Time Frame" labelClassName="required" placeholder="# of days" />
            </Col>
          </Row>
          <p><strong>Final Stage</strong></p>
          <hr/>
          <Row>
            <Col xs={2}>
              <Avatar />
            </Col>
            <Col xs={10}>
              <Select
                name="form-control"
                noResultsText={selectNoResultsText}
                value=""
                options={employeePicklistOptions}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Input type="number" label="Approval Time Frame" labelClassName="required" placeholder="# of days" />
            </Col>
          </Row>
        </div>
      );
    }

    return (
      <div>
        <div className="fixed-title clearfix">
          <h3 className="pull-left">Selected File</h3>
          <div className="pull-right sidebar-header-actions">
            <Button bsStyle="default" bsSize="xs" onClick={this.handleRightPanelButtonClick.bind(this, ACTIVITY)}>
            Cancel
            </Button>
            &nbsp;
            <Button bsStyle="success" bsSize="xs" onClick={this.handleRightPanelButtonClick.bind(this, DETAIL_DRAFT)}>
            Save
            </Button>
          </div>
        </div>

        <div className="sidebar-details">
          <div className="document-details">

            <Input type="text" label="Title" labelClassName="required" defaultValue={docTitle} />

            <Input type="text" label="Internal Document ID" defaultValue={docId} />

            <Input type="number" label="Version" labelClassName="required" defaultValue={docVersion} />

            <DataSelect
              label="Document Scope"
              options={documentScope}
              isRequired
              multi
            />

            <DataSelect
              label="Department"
              options={documentDepartment}
              multi
            />
          { /* }
            <Input type="select" multiple label="Document Scope" labelClassName="required">
              <option>Corporate</option>
              <option>Division</option>
              <option>Facility</option>
            </Input>

            <Input type="select" multiple label="Department">
              <option>Department 1</option>
              <option>Department 2</option>
              <option>Department 3</option>
              <option>Department 4</option>
            </Input>
            {*/}

            <DataSelect
              label="Business Process"
              options={businessProcessOptions}
              placeholder="Type to find Business Process"
              noResultsText={selectNoResultsText}
            />

            <DataSelect
              label="Document Owner"
              options={employeePicklistOptions}
              placeholder="Type to find Document Owner"
              noResultsText={selectNoResultsText}
              isRequired
            />

            <DataSelect
              label="Document Coordinator"
              options={employeePicklistOptions}
              placeholder="Type to find Document Coordinator"
              noResultsText={selectNoResultsText}
            />

            <DataSelect
              label="Document Type"
              options={docTypePicklistOptions}
              placeholder="Type to find Document Type"
              noResultsText={selectNoResultsText}
            />

            <DataSelect
              label="Document Level"
              options={docLevelPicklistOptions}
              placeholder="Type to find Document Level"
              noResultsText={selectNoResultsText}
              onChange={this.handleDocumentLevelChange.bind(this)}
              isRequired
            />


            {workflowForm}

            <Input type="checkbox" label="Auto Release Document"/>

            <div className="form-group">
              <label className="control-label required">Document View</label>
              <Select
                name="form-control"
                noResultsText={selectNoResultsText}
                value="Public"
                options={documentViewOptions}
                onChange={this.handleDocViewChange.bind(this)}
              />
            </div>

            {
              this.state.isDocViewPrivate ?
                <div className="well well-sm">
                  <Input type="select" multiple label="Private Viewers">
                    <option>Document Owner Name</option>
                    <option>Document Coordinator Name</option>
                    <option>Other Viewer</option>
                    <option>Other Viewer</option>
                    <option>Other Viewer</option>
                    <option>Other Viewer</option>
                  </Input>
                </div>
              : null
            }

            <Input type="select" label="Primary Folder" labelClassName="required">
              <option>1.0 EHS Management</option>
              <option>1.1 Management</option>
              <option>1.2 People Involvement</option>
              <option>1.3 Prevention</option>
              <option>1.4 Knowledge of the Site</option>
              <option>1.5 Mgmt of Contractors and Suppliers</option>
              <option>2.0 Environmental Management</option>
              <option>2.1 Compliance</option>
              <option>2.2 Resources</option>
              <option>2.3 Specific Themes</option>
              <option>3.0 Health and Safety</option>
              <option>3.1 Health</option>
              <option>3.2 Hazardous Activities</option>
              <option>4.0 Security and Loss Prevention</option>
            </Input>

            <Input type="select" multiple label="Additional Display Folders">
              <option>1.0 EHS Management</option>
              <option>1.1 Management</option>
              <option>1.2 People Involvement</option>
              <option>1.3 Prevention</option>
              <option>1.4 Knowledge of the Site</option>
              <option>1.5 Mgmt of Contractors and Suppliers</option>
              <option>2.0 Environmental Management</option>
              <option>2.1 Compliance</option>
              <option>2.2 Resources</option>
              <option>2.3 Specific Themes</option>
              <option>3.0 Health and Safety</option>
              <option>3.1 Health</option>
              <option>3.2 Hazardous Activities</option>
              <option>4.0 Security and Loss Prevention</option>
            </Input>

            <Input type="textarea" label="Description" />

            <Input type="text" label="Keywords/Tags" />

            <Input type="select" multiple label="Reference Documents">
              <option>Incident Management</option>
              <option>Incident Investigation</option>
            </Input>

            <Input type="text" label="Regulatory References" />

            <div className="form-group">
              <label className="control-label required">Periodic Review Frequency</label>
              <Input type="number" labelClassName="required"/>
              <Input type="select" labelClassName="required">
                <option>Days</option>
                <option>Weeks</option>
                <option>Months</option>
                <option>Years</option>
              </Input>
            </div>

            <Input
              type="text"
              label="Periodic Review Start Date"
              labelClassName="required"
              placeholder="Defaults to 'Final' date"
            />

            <div className="form-group">
              <label className="control-label">Retention Period</label>
              <Select
                name="form-control"
                noResultsText={selectNoResultsText}
                value="Not Applicable"
                options={retentionPeriodOptions}
              />
            </div>
            <FormControls.Static label="Document Status" value="Pending Approval"/>

            <FormControls.Static label="Last Modified By" value="John Doe"/>

            <FormControls.Static label="Last Modified Date" value="11/08/2015"/>

            <FormControls.Static label="Uploaded/Referenced By" value="John Doe"/>

            <FormControls.Static label="Date Uploaded/Referenced" value="11/07/15"/>

            <FormControls.Static label="File Name" value="OSHA_V2.0.docx"/>

            <FormControls.Static label="File Size" value="2.5 MB"/>

          </div>
        </div>
      </div>
    );
  }
}

// propTypes.
DetailForm.propTypes = {
  dispatch: React.PropTypes.func,
  state: React.PropTypes.object
};
const mapStateToProps = (state) => ({
  state
});

// Export.
export default connect(mapStateToProps)(DetailForm);
