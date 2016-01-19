// Dependencies.
import React from 'react';
import { connect } from 'react-redux';
import { setRightPanelAreaView } from '../../../../redux/actions';
import { DETAIL } from '../../../../redux/constants';

// Core components.
import {Button, Input, FormControls} from 'react-bootstrap';
// import Icon from 'react-fa';

// Define class.
class DetailForm extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);

    this.state = {
      actionItemForm: 'none'
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

  // Render method.
  render() {
    const actionItemForm = this.state.actionItemForm;

    return (
      <div>
        <div className="fixed-title clearfix">
          <h3 className="pull-left">Selected File</h3>
          <div className="pull-right">
            <Button bsStyle="info" bsSize="sm" onClick={this.handleSaveButtonClick.bind(this)}>
              Save
            </Button>
            <Button bsStyle="default" bsSize="sm" onClick={this.handleSaveButtonClick.bind(this)}>
              Cancel
            </Button>
          </div>
        </div>

        <div className="sidebar-details">
          <div className="document-details">
            <div className="change-request-summary">
              <p>Change Request Summary</p>

              <FormControls.Static label="Requested By" value="Jane Doe"/>
              <FormControls.Static label="Reviewed Date" value="1/25/16"/>
              <FormControls.Static label="Reason for Change Request" value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
              <FormControls.Static label="Requested Changes" value="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
              <FormControls.Static label="Priority" value="Medium"/>
            </div>
            <Input type="select" multiple label="Reviewed By" labelClassName=" required">
              <option>John Smith</option>
              <option>Bob Roberts</option>
              <option>Janette Walls</option>
            </Input>
            <FormControls.Static label="Reviewed Date" value="1/25/16"/>
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
              <Input type="select" label="Action Item Priority" labelClassName=" required">
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </Input>
              <Input type="text" label="Action Item Due Date"/>
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
