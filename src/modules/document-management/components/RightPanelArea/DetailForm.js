// Dependencies.
import React from 'react';
import { connect } from 'react-redux';
import { setRightPanelAreaView } from '../../../../redux/actions';
import { DETAIL } from '../../../../redux/constants';

// Components.
import {Button, Input, FormControls} from 'react-bootstrap';
// import Icon from 'react-fa';
import Select from 'react-select';

// DatePicker.
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';


// Define class.
class DetailForm extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);

    this.state = {
      startDate: moment()
    };
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
    const selectNoResultsText = 'Sorry, the name you type cannot be found.';

    return (
      <div>
        <div className="fixed-title clearfix">
          <h3 className="pull-left">Selected File</h3>
          <div className="pull-right">
            <Button bsStyle="info" bsSize="sm" onClick={this.handleSaveButtonClick.bind(this)}>
              Save
            </Button>
          </div>
        </div>

        <div className="sidebar-details">
          <div className="document-details">

            <Input type="text" label="Title" labelClassName=" required" />

            <Input type="text" label="Internal Document ID" />

            <Input type="number" label="Version" labelClassName=" required" />

            <div className="form-group">
              <label className="control-label">Document Owner</label>
              <Select
                name="form-control"
                placeholder="Type to find Document Owner"
                noResultsText={selectNoResultsText}
                value=""
                options={employeePicklistOptions}
                // multi
                // isLoading
              />
            </div>

            <div className="form-group">
              <label className="control-label">Author</label>
              <Select
                name="form-control"
                placeholder="Type to find Author"
                noResultsText={selectNoResultsText}
                value=""
                options={employeePicklistOptions}
              />
            </div>

            <FormControls.Static label="Uploaded/Referenced By" value="John Doe"/>

            <DatePicker
              className="form-control"
              selected={this.state.startDate}
              onChange={this.handleChange.bind(this)}
              dateFormat="MMMM d, YYYY"
              // isClearable
              showYearDropdown
            />
            {/* <FormControls.Static label="Date Uploaded/Referenced" value="11/7/2015"/> */}

            <FormControls.Static label="Modified By" value="John Doe"/>

            <FormControls.Static label="Modified Date" value="11/8/2015"/>

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
              <label className="control-label">Document Level</label>
              <Select
                name="form-control"
                placeholder="Type to find Document Level"
                noResultsText={selectNoResultsText}
                value=""
                options={docLevelPicklistOptions}
              />
            </div>

            <Input type="select" multiple label="Display Folders" labelClassName=" required">
              <option>1.01 Incident and Emergency Management</option>
              <option>2.0 Quality Management System</option>
            </Input>

            <Input type="textarea" label="Description" />
            <Input type="textarea" label="Keywords/Tags" />

            <Input type="select" multiple label="Reference Documents">
              <option>Incident Management</option>
              <option>Incident Investigation</option>
            </Input>

            <Input type="textarea" label="Regulatory References" />
            <FormControls.Static label="Review Date" value="12/20/2015"/>
            <Input type="textarea" label="Review Date" />

            <Input type="select" label="Retention Period">
              <option>Option1</option>
              <option>Option2</option>
              <option>Option3</option>
            </Input>

            <Input type="textarea" label="Reason for Change" />

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
