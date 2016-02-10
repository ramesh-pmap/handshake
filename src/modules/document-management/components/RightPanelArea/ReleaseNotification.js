// Dependencies.
import React from 'react';
import { connect } from 'react-redux';
import { setRightPanelAreaView } from '../../../../redux/actions/ui-actions';
import { DETAIL } from '../../../../redux/constants/ui-constants';

// Core components.
import {Button, Input, FormControls} from 'react-bootstrap';

// Misc. components.
import DetailViewDropdown from './DetailViewDropdown';
import Select from 'react-select';

// DatePicker.
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

// Define class.
class ReleaseNotification extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);

    this.state = {
      actionItemForm: 'none',
      startDate: moment(),
      showFutureDate: false
    };
  }

  handleSaveButtonClick() {
    const { dispatch } = this.props;
    // console.log('Save clicked');
    dispatch(setRightPanelAreaView(DETAIL));
  }

  handleActionItemOptionChange(e) {
    const val = e.target.selected;
    switch (val) {
    case true:
      this.setState({ actionItemForm: 'block' });
      break;
    default:
      this.setState({ actionItemForm: 'none' });
    }
  }

  handleDateChange(date) {
    // this.setState({ startDate: date });
    console.log(date);
  }

  handleAcknowledgementChange(e) {
    const val = e.target.checked;
    if (val === true) {
      this.setState({ showAcknowledgementDate: true });
    } else {
      this.setState({ showAcknowledgementDate: false });
    }
  }

  handleSchedulingOptionChange(val) {
    if (val === 'Future Date') {
      this.setState({ showFutureDate: true });
    } else {
      this.setState({ showFutureDate: false });
    }
  }

  // Render method.
  render() {
    return (
      <div>
        <div className="fixed-title clearfix">
          <div className="pull-left">
            <DetailViewDropdown />
          </div>
          <div className="pull-right sidebar-header-actions">
            <Button bsStyle="default" bsSize="xs" onClick={this.handleSaveButtonClick.bind(this)}>
            Cancel
            </Button>
            &nbsp;
            <Button bsStyle="success" bsSize="xs" onClick={this.handleSaveButtonClick.bind(this)}>
            Release
            </Button>
          </div>
        </div>

        <div className="sidebar-details">
          <div className="document-details">

            <Input type="textarea" label="Release Notes" maxLength="2000" />

            <Input type="textarea" label="Training and Communication Notes" maxLength="2000" />

            <div className="form-group">
              <input type="checkbox" onClick={this.handleAcknowledgementChange.bind(this)}/>
              &nbsp;
              <label className="control-label">Is Acknowledgement Required?</label>
            </div>

            {
              this.state.showAcknowledgementDate ?
                <div className="form-group">
                  <label className="control-label required">Acknowledgement Due Date</label>
                  <DatePicker
                    className="form-control"
                    selected={this.state.startDate}
                    onChange={this.handleDateChange.bind(this)}
                    dateFormat="MMMM DD, YYYY"
                    // isClearable
                    showYearDropdown
                  />
                </div>
              : null
            }

            <FormControls.Static label="Release Notifications">
              <option>John Smith</option>
              <option>Bob Roberts</option>
              <option>Janette Walls</option>
            </FormControls.Static>

            <Input type="select" multiple label="Additional Release Notifications" labelClassName="">
              <option>Jane Doe</option>
              <option>Alice Jackson</option>
              <option>Patrick Smith</option>
            </Input>

            <div className="form-group">
              <label className="control-label required">Release Scheduling Option</label>
              <Select
                name="form-control"
                value=""
                options={[
                { value: 'Release Immediately', label: 'Release Immediately' },
                { value: 'Future Date', label: 'Future Date' }
                ]}
                onChange={this.handleSchedulingOptionChange.bind(this)} />
            </div>

            {
              this.state.showFutureDate ?
                <div className="form-group">
                  <label className="control-label required">Future Document Release Date</label>
                  <DatePicker
                    className="form-control"
                    selected={this.state.startDate}
                    onChange={this.handleDateChange.bind(this)}
                    dateFormat="MMMM DD, YYYY"
                    // isClearable
                    showYearDropdown
                  />
                </div>
              : null
            }

          </div>
        </div>
      </div>
    );
  }
}

// propTypes.
ReleaseNotification.propTypes = {
  dispatch: React.PropTypes.func,
  state: React.PropTypes.object
};

const mapStateToProps = (state) => ({
  state
});

// Export.
export default connect(mapStateToProps)(ReleaseNotification);
