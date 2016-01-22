// Dependencies.
import React from 'react';
import { connect } from 'react-redux';
import { setRightPanelAreaView } from '../../../../redux/actions';
import { DETAIL } from '../../../../redux/constants';

// Components.
import {Button, Input, FormControls} from 'react-bootstrap';
// import Icon from 'react-fa';
import Select from 'react-select';


// Define class.
class DetailForm extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);
  }

  handleSaveButtonClick() {
    const { dispatch } = this.props;
    // console.log('Save clicked');
    dispatch(setRightPanelAreaView(DETAIL));
  }

  handleChange(date) {
    this.setState({ startDate: date });
  }

  // Render method.
  render() {
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
    const selectNoResultsText = 'Sorry, the name you type cannot be found.';

    return (
      <div>
        <div className="fixed-title clearfix">
          <h3 className="pull-left">Selected File</h3>
          <div className="btn-group pull-right">
            <Button bsStyle="info" bsSize="sm" onClick={this.handleSaveButtonClick.bind(this)}>
            Save
            </Button>
          </div>
        </div>

        <div className="sidebar-details">
          <div className="document-details">

            <Input type="text" label="Title" labelClassName=" required" />

            <Input type="text" label="Internal Document ID" />

            {/*
            <Input type="text" label="URL" labelClassName=" required" />

            <Input type="text" label="Web Site Maintained By" />

            <Input type="text" label="Physical Location" />
            */}

            <Input type="number" label="Version" labelClassName=" required" />

            <Input type="select" multiple label="Document Scope" labelClassName=" required">
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

            <div className="form-group">
              <label className="control-label">Business Process</label>
              <Select
                name="form-control"
                placeholder="Type to find Business Process"
                noResultsText={selectNoResultsText}
                value=""
                options={businessProcessOptions}
                // multi
                // isLoading
              />
            </div>

            <div className="form-group">
              <label className="control-label required">Document Owner</label>
              <Select
                name="form-control"
                placeholder="Type to find Document Owner"
                noResultsText={selectNoResultsText}
                value=""
                options={employeePicklistOptions}
              />
            </div>

            <div className="form-group">
              <label className="control-label">Document Coordinator</label>
              <Select
                name="form-control"
                placeholder="Type to find Document Coordinator"
                noResultsText={selectNoResultsText}
                value=""
                options={employeePicklistOptions}
              />
            </div>

            <FormControls.Static label="Uploaded/Referenced By" value="John Doe"/>

            <FormControls.Static label="Date Uploaded/Referenced" value="11/07/15"/>

            <FormControls.Static label="Modified By" value="John Doe"/>

            <FormControls.Static label="Modified Date" value="11/08/2015"/>

            <FormControls.Static label="Document Status" value="Pending Approval"/>

            <div className="form-group">
              <label className="control-label">Document Type</label>
              <Select
                name="form-control"
                placeholder="Type to find Document Type"
                noResultsText={selectNoResultsText}
                value=""
                options={docTypePicklistOptions}
              />
            </div>

            <div className="form-group">
              <label className="control-label required">Document Level</label>
              <Select
                name="form-control"
                placeholder="Type to find Document Level"
                noResultsText={selectNoResultsText}
                value=""
                options={docLevelPicklistOptions}
              />
            </div>

            <div className="form-group">
              <label className="control-label required">Auto Release Document</label><br/>
              <input type="checkbox" />
            </div>

            <div className="form-group">
              <label className="control-label required">Document View</label>
              <Select
                name="form-control"
                noResultsText={selectNoResultsText}
                value="Public"
                options={documentViewOptions}
              />
            </div>

            <Input type="select" multiple label="Private Viewers">
              <option>Document Owner Name</option>
              <option>Document Coordinator Name</option>
              <option>Other Viewer</option>
              <option>Other Viewer</option>
              <option>Other Viewer</option>
              <option>Other Viewer</option>
            </Input>

            <Input type="select" label="Primary Folder" labelClassName=" required">
              <option>1.0 EHS Management</option>
              <option>2.0 Environmental Management</option>
              <option>3.0 Health and Safety</option>
              <option>4.0 Security and Loss Prevention</option>
            </Input>

            <Input type="select" multiple label="Additional Display Folders">
              <option>1.1 Management</option>
              <option>1.2 People Involvement</option>
              <option>1.3 Prevention</option>
              <option>1.4 Knowledge of the Site</option>
              <option>1.5 Mgmt of Contractors and Suppliers</option>
              <option>2.1 Compliance</option>
              <option>2.2 Resources</option>
              <option>2.3 Specific Themes</option>
              <option>3.1 Health</option>
              <option>3.2 Hazardous Activities</option>
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
              <Input type="number" labelClassName=" required"/>
              <Input type="select" labelClassName=" required">
                <option>Days</option>
                <option>Weeks</option>
                <option>Months</option>
                <option>Years</option>
              </Input>
            </div>

            <Input
              type="text"
              label="Periodic Review Start Date"
              labelClassName=" required"
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
