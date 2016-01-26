// Dependencies.
import React from 'react';
import { connect } from 'react-redux';
import { setRightPanelAreaView } from '../../../../redux/actions';
import { DETAIL } from '../../../../redux/constants';
import Icon from 'react-fa';

// Core components.
import { Button, Input, FormControls } from 'react-bootstrap';
import DetailViewDropdown from './DetailViewDropdown';
// import Icon from 'react-fa';

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
      actionItemForm: 'none',
      startDate: moment()
    };
  }

  handleSaveButtonClick() {
    const { dispatch } = this.props;
    // console.log('Save clicked');
    dispatch(setRightPanelAreaView(DETAIL));
  }

  handleActionItemOptionChange(e) {
    const val = e.target.checked;
    switch (val) {
    case true:
      this.setState({ actionItemForm: 'block' });
      break;
    default:
      this.setState({ actionItemForm: 'none' });
    }
  }

  handleChange(date) {
    this.setState({ startDate: date });
  }

  // Render method.
  render() {
    const actionItemForm = this.state.actionItemForm;
    const innerIcon = <Icon name="file" />;

    return (
      <div>
        <div className="fixed-title clearfix">
          <DetailViewDropdown />
          <div className="pull-right sidebar-header-actions">
            <Button bsStyle="default" bsSize="xs" onClick={this.handleSaveButtonClick.bind(this)}>
            Cancel
            </Button>
            &nbsp;
            <Button bsStyle="info" bsSize="xs" onClick={this.handleSaveButtonClick.bind(this)}>
            Save
            </Button>
          </div>
        </div>

        <div className="sidebar-details">
          <div className="document-details">
            <div className="well">
              <p>Change Request Summary</p>
              <FormControls.Static label="Requested By" value="Jane Doe"/>
              <FormControls.Static label="Reviewed Date" value="1/10/16"/>
              <FormControls.Static label="Reason for Change Request" value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
              <FormControls.Static label="Requested Changes" value="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
              <FormControls.Static label="Priority" value="Medium"/>
            </div>
            <Input type="select" multiple label="Reviewed By" labelClassName=" required">
              <option>John Smith</option>
              <option>Bob Roberts</option>
              <option>Janette Walls</option>
            </Input>
            <FormControls.Static label="Reviewed Date" value="1/12/16"/>
            <Input type="textarea" label="Change Request Review Comments" maxLength="2000" />

            <Input type="select" label="Change Request Status" labelClassName=" required">
              <option defaultValue>Pending Review</option>
              <option>Approved</option>
              <option>Rejected</option>
            </Input>

            <Input type="checkbox" label="Add Action Item?" onClick={this.handleActionItemOptionChange.bind(this)} />

            <div style={{display: actionItemForm}}>
              <FormControls.Static label="Source ID" value="US-WestLake-15-ERGO-016"/>
              <Input type="textarea" label="Action Item Title" />
              <FormControls.Static label="Action Item Category" value="Ergonomics"/>

              <Input type="select" label="Action Item Type" labelClassName=" required">
                <option defaultValue>Corrective Action</option>
                <option>Action 2</option>
                <option>Action 3</option>
                <option>Action 4</option>
              </Input>

              <Input type="textarea" label="Action Item Description" maxLength="2000" />

              <Input type="select" label="Action Item Priority" labelClassName="required">
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </Input>

              <div className="form-group">
                <label className="control-label">Action Item Due Date</label>
                <DatePicker
                  className="form-control"
                  selected={this.state.startDate}
                  onChange={this.handleChange.bind(this)}
                  dateFormat="MMMM DD, YYYY"
                  addonAfter={innerIcon}
                  // isClearable
                  showYearDropdown
                />
              </div>

              <Input type="select" multiple label="Owners" labelClassName=" required">
                <option>John Smith</option>
                <option>Bob Roberts</option>
                <option>Janette Walls</option>
              </Input>
              <Input type="checkbox" label="Notify Owners Immediately" onClick={this.handleActionItemOptionChange.bind(this)} />
              <Input type="select" multiple label="Assigned By" labelClassName=" required">
                <option>John Smith</option>
                <option>Bob Roberts</option>
                <option>Janette Walls</option>
              </Input>
              <Input type="select" label="Action Item Status" labelClassName=" required">
                <option>Open</option>
                <option>Closed</option>
              </Input>
              <Input type="textarea" label="Action Taken" maxLength="2000" />
              <Input type="file" label="Add Attachment"/>
            </div>
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
