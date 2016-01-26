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
            <Input type="select" multiple label="Requested By" labelClassName=" required" wrapperClassName="">
              <option>John Smith</option>
              <option>Bob Roberts</option>
              <option>Janette Walls</option>
            </Input>
            <FormControls.Static label="Requested Date" labelClassName="" wrapperClassName="" value="1/10/16"/>
            <Input type="textarea" label="Reason for Change Request" labelClassName="" wrapperClassName="" />
            <Input type="textarea" label="Requested Changes" labelClassName="" wrapperClassName="" />
            <Input type="select" label="Priority" labelClassName=" required" wrapperClassName="">
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </Input>
            <Input type="file" label="Add Attachment"/>
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
