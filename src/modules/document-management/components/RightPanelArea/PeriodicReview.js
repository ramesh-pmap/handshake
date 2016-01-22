// Dependencies.
import React from 'react';
import { connect } from 'react-redux';
import { setRightPanelAreaView } from '../../../../redux/actions';
import { DETAIL } from '../../../../redux/constants';

// Core components.
import {Button, Input, FormControls, ListGroup, ListGroupItem} from 'react-bootstrap';

// Define class.
class PeriodicReview extends React.Component {
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
            <Button bsStyle="default" bsSize="sm" onClick={this.handleSaveButtonClick.bind(this)}>
              Cancel
            </Button>
          </div>
        </div>

        <div className="sidebar-details">
          <div className="document-details">
            <FormControls.Static label="Reviewed By" value="Bob Roberts"/>
            <FormControls.Static label="Reviewed Date" value="1/15/16"/>
            <Input type="select" label="Document Review" labelClassName=" required" wrapperClassName="">
              <option>Approve Document As Is</option>
              <option>Revise Document</option>
              <option>Archive Document</option>
            </Input>
            <Input type="textarea" label="Document Review Comments" maxLength="2000" />
          </div>
        </div>
        <ListGroup bsStyle="info">
          <ListGroupItem href="#link1">
            <div className="list-card neutral">
              <h4>Bob Roberts</h4>
              <div className="meta-wrapper">
                <div className="clearfix">
                  <p className="pull-left">Sed egestas dolor mauris, ut molestie felis lacinia sed. </p>
                  <p className="pull-right">12/19/2015</p>
                </div>
                <div className="clearfix">
                  <p className="pull-right">Archived </p>
                </div>
              </div>
            </div>
          </ListGroupItem>

          <ListGroupItem href="#link1">
            <div className="list-card neutral">
              <h4>Bob Roberts</h4>
              <div className="meta-wrapper">
                <div className="clearfix">
                  <p className="pull-left">Duis tortor ipsum, posuere lobortis euismod vitae, efficitur iaculis tellus.
                  Etiam quis tempus neque, id sodales lacus.</p>
                  <p className="pull-right">11/14/2015</p>
                </div>
                <div className="clearfix">
                  <p className="pull-right">Approved</p>
                </div>
              </div>
            </div>
          </ListGroupItem>

          <ListGroupItem href="#link1">
          <div className="list-card neutral">
            <h4>Bob Roberts</h4>
            <div className="meta-wrapper">
              <div className="clearfix">
                <p className="pull-left">Suspendisse nec nunc non velit lacinia tristique sit amet id tellus.</p>
                <p className="pull-right">10/11/2015</p>
              </div>
              <div className="clearfix">
                <p className="pull-right">Revised </p>
              </div>
            </div>
          </div>
        </ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}

// propTypes.
PeriodicReview.propTypes = {
  dispatch: React.PropTypes.func,
  state: React.PropTypes.object
};
const mapStateToProps = (state) => ({
  state
});

// Export.
export default connect(mapStateToProps)(PeriodicReview);
