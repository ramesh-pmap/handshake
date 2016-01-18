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
          <h3 className="pull-left">Selected File</h3>
          <div className="pull-right">
            <Button bsStyle="info" bsSize="sm" onClick={this.handleSaveButtonClick.bind(this)}>
              Save
            </Button>
          </div>
        </div>

        <div className="sidebar-details">
          <div className="document-details">
            <Input type="select" multiple label="Reviewed By" labelClassName=" required" wrapperClassName="">
              <option>John Smith</option>
              <option>Bob Roberts</option>
              <option>Janette Walls</option>
            </Input>
            <FormControls.Static label="Reviewed Date" labelClassName="" wrapperClassName="" value="1/19/16"/>
            <Input type="textarea" label="Change Request Review Comments" maxLength="2000" labelClassName="" wrapperClassName="" />
            <Input type="select" label="Change Request Status" labelClassName=" required">
              <option defaultValue>Pending Review</option>
              <option>Approved</option>
              <option>Rejected</option>
            </Input>
            <form>
              <label className="control-label">Add Action Item?</label>
              <Input type="radio" name="ActionItem" label="Yes" wrapperClassName="radio-group-item" />
              <Input type="radio" name="ActionItem" label="No"_form />
            </form>
            <Button bsStyle="info" bsSize="sm">
              Submit
            </Button>
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
