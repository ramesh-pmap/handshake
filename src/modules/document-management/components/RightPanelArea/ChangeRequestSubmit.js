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
  }

  handleSaveButtonClick() {
    const { dispatch } = this.props;
    // console.log('Save clicked');
    dispatch(setRightPanelAreaView(DETAIL));
  }

  // Render method.
  render() {
    return (
      <div>
        <div className="fixed-title clearfix">
          <h3 className="pull-left">Annual Insurance Risk ...</h3>
          <div className="pull-right sidebar-header-actions">
            <Button bsStyle="default" bsSize="xs" onClick={this.handleSaveButtonClick.bind(this)}>
            Cancel
            </Button>
            &nbsp;
            <Button bsStyle="success" bsSize="xs" onClick={this.handleSaveButtonClick.bind(this)}>
            Submit
            </Button>
          </div>
        </div>

        <div className="sidebar-details">
          <div className="document-details">
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
            <FormControls.Static label="Requested By" value="Janette Walls" labelClassName="" wrapperClassName=""/>
            <FormControls.Static label="Requested Date" value="1/10/16" labelClassName="" wrapperClassName=""/>
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
