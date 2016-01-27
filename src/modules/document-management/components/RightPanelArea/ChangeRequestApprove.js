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

// Panels const.
const APPROVER = 'APPROVER';
const VIEWER = 'VIEWER';

// Define class.
class DetailForm extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);

    this.state = {
      actionItemForm: 'none',
      startDate: moment(),
      panelToShow: APPROVER
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

  toggleViewer(view) {
    // const { state, dispatch } = this.props;
    this.setState({ panelToShow: view });
  }

  // Render method.
  render() {
    const actionItemForm = this.state.actionItemForm;
    const innerIcon = <Icon name="file" />;

    let panelsArea;
    switch (this.state.panelToShow) {
    case APPROVER:
      panelsArea = (
        <div>
          <div className="sidebar-details">
            <div className="document-details">
              <div className="well">
                <p>Change Request Summary</p>
                <FormControls.Static label="Requested By" value="Jane Doe"/>
                <FormControls.Static label="Reviewed Date" value="1/10/16"/>
                <FormControls.Static label="Reason for Change Request" value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                <FormControls.Static label="Source of Change" value="Document Revision"/>
                <FormControls.Static label="Requested Changes" value="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                <FormControls.Static label="Priority" value="Medium"/>
              </div>

              <Input type="textarea" label="Change Request Review Comments" labelClassName="required" maxLength="2000" />

              <Input type="select" label="Change Request Status" labelClassName="required">
                <option defaultValue>Pending Review</option>
                <option>Approved</option>
                <option>Rejected</option>
              </Input>

              <FormControls.Static label="Reviewed By" value="John Smith"/>

              <FormControls.Static label="Reviewed Date" value="1/12/16"/>

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
      break;
    case VIEWER:
      panelsArea = (
        <div className="sidebar-details">
          <div className="document-details">
            <Input type="select" multiple label="Requested By" labelClassName="required" wrapperClassName="">
              <option>John Smith</option>
              <option>Bob Roberts</option>
              <option>Janette Walls</option>
            </Input>
            <FormControls.Static label="Requested Date" labelClassName="" wrapperClassName="" value="1/10/16"/>
            <Input type="textarea" label="Reason for Change Request" labelClassName="required" wrapperClassName="" />
            <Input type="select" label="Source of Change" labelClassName="required" wrapperClassName="">
              <option>Corrective Action</option>
              <option>Preventative Action</option>
              <option>Periodic Review</option>
              <option>Document Revision</option>
              <option>Process Change</option>
              <option>Regulatory/Legal</option>
              <option>Audit Finding</option>
              <option>Incident</option>
            </Input>
            <Input type="textarea" label="Requested Changes" labelClassName="required" wrapperClassName="" />
            <Input type="select" label="Priority" labelClassName="" wrapperClassName="">
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </Input>
            <Input type="file" label="Add Attachment"/>
          </div>
        </div>
      );
      break;
    default:
      panelsArea = null;
    }

    return (
      <div>
        <div className="fixed-title clearfix">
          <DetailViewDropdown />
          <div className="pull-right sidebar-header-actions">
            <Button bsStyle="default" bsSize="xs" onClick={this.handleSaveButtonClick.bind(this)}>
            Cancel
            </Button>
            &nbsp;
            <Button bsStyle="success" bsSize="xs" onClick={this.handleSaveButtonClick.bind(this)}>
            Save
            </Button>
          </div>
        </div>
        {/*
          <div className="text-center">
          <Button bsStyle="success" bsSize="xs" onClick={this.toggleViewer.bind(this, APPROVER)}>
          As an Approver
          </Button>
          &nbsp;
          <Button bsStyle="default" bsSize="xs" onClick={this.toggleViewer.bind(this, VIEWER)}>
          As a Viewer
          </Button>
        </div>
        &nbsp;
        */}
        {panelsArea}
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
