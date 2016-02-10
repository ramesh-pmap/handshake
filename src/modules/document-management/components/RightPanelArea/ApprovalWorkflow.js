// Dependencies.
import React from 'react';
import { connect } from 'react-redux';
import { setRightPanelAreaView, setContentAreaView } from '../../../../redux/actions/ui-actions';
import { DETAIL, PREVIEW, DEFAULT } from '../../../../redux/constants/ui-constants';

// Core components.
import {Button, Input, FormControls, OverlayTrigger, Tooltip, ListGroup, ListGroupItem} from 'react-bootstrap';
import Icon from 'react-fa';

// Misc. components.
import Avatar from '../../../../components/Avatar';
import DetailViewDropdown from './DetailViewDropdown';

// Tooltip const.
const tooltipOwner = (
  <Tooltip id="tooltip1">This is the Owner of the Document.</Tooltip>
);
const tooltipApprover1 = (
  <Tooltip id="tooltip2">If the status is green, Approver #1 has approved the document on 12/19/2015.</Tooltip>
);
const tooltipApprover2 = (
  <Tooltip id="tooltip3">Approver #2 has approved the document on 12/20/2015.</Tooltip>
);
const tooltipApprover3 = (
  <Tooltip id="tooltip4">Approver #3 has approved the document on 12/20/2015.</Tooltip>
);
const tooltipApprover4 = (
  <Tooltip id="tooltip5">If the status is yellow, Final Approver #4 has yet to approve or reject the document.</Tooltip>
);
const tooltipStatus = (
  <Tooltip id="tooltip6">The document has been approved.</Tooltip>
);

// Define class.
class ApprovalWorkflow extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);
  }
  componentDidMount() {
    const { dispatch } = this.props;

    // Set initial state.
    dispatch(setContentAreaView(PREVIEW));
  }

  handleSaveButtonClick() {
    const { dispatch } = this.props;
    // console.log('Save clicked');
    dispatch(setContentAreaView(DEFAULT));
    dispatch(setRightPanelAreaView(DETAIL));
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
            <Button bsStyle="danger" bsSize="xs" onClick={this.handleSaveButtonClick.bind(this)}>
            Reject
            </Button>
            &nbsp;
            <Button bsStyle="success" bsSize="xs" onClick={this.handleSaveButtonClick.bind(this)}>
            Approve
            </Button>
          </div>
        </div>

        <div className="sidebar-details">
          <div className="workflow-avatars col-md-12">
            <div className="document-details">
              <FormControls.Static label="Workflow" />
            </div>
            <OverlayTrigger placement="bottom" overlay={tooltipOwner}>
              <Avatar src="/static/images/a1.jpg" status="approved" shape="circle" size=""/>
            </OverlayTrigger>
            <div className="divider-vertical"></div>
            <OverlayTrigger placement="bottom" overlay={tooltipApprover1}>
              <Avatar src="/static/images/a2.jpg" status="approved" shape="circle" size=""/>
            </OverlayTrigger>
            <OverlayTrigger placement="bottom" overlay={tooltipApprover2}>
              <Avatar src="/static/images/a3.jpg" status="pending" shape="circle" size=""/>
            </OverlayTrigger>
            <OverlayTrigger placement="bottom" overlay={tooltipApprover3}>
              <Avatar src="/static/images/a4.jpg" status="approved" shape="circle" size=""/>
            </OverlayTrigger>
            <div className="divider-vertical"></div>
            <OverlayTrigger placement="bottom" overlay={tooltipApprover4}>
              <Avatar src="/static/images/a5.jpg" shape="circle" size=""/>
            </OverlayTrigger>
            <div className="divider-vertical"></div>
            <OverlayTrigger placement="bottom" overlay={tooltipStatus}>
              <div className="avatar unchecked">
                <Icon name="check" className="fa-lg" />
              </div>
            </OverlayTrigger>
          </div>
          <div className="document-details">
            <Input type="textarea" label="Comments" labelClassName="required" wrapperClassName="" />
            <Input type="file" label="Add Attachment"/>
          </div>
          <hr></hr>
          <ListGroup bsStyle="info">
            <ListGroupItem href="#link1">
              <div className="list-card neutral">
                <h4>John Doe</h4>
                <br />
                <div className="avatar default corner-icon">
                  <img src="/static/images/a1.jpg" alt="image"/>
                </div>
                <div className="meta-wrapper">
                  <div className="clearfix">
                    <p className="pull-left">10/11/2015</p>
                    <p className="pull-right default">Owner</p>
                  </div>
                </div>
              </div>
            </ListGroupItem>

            <ListGroupItem href="#link1">
              <div className="list-card approved">
                <h4>Mark Smith</h4>
                <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="avatar default corner-icon">
                  <img src="/static/images/a2.jpg" alt="image"/>
                </div>
                <div className="meta-wrapper">
                  <div className="clearfix">
                    <p className="pull-left">10/11/2015</p>
                    <p className="pull-right approved">Aprroved</p>
                  </div>
                </div>
              </div>
            </ListGroupItem>

            <ListGroupItem href="#link1">
              <div className="list-card approved">
                <h4>Bob Roberts</h4>
                <br />
                <div className="avatar default corner-icon">
                  <img src="/static/images/a4.jpg" alt="image"/>
                </div>
                <div className="meta-wrapper">
                  <div className="clearfix">
                    <p className="pull-left">10/20/2015</p>
                    <p className="pull-right approved">Approved</p>
                  </div>
                </div>
              </div>
            </ListGroupItem>

          </ListGroup>
        </div>
      </div>
    );
  }
}

// propTypes.
ApprovalWorkflow.propTypes = {
  dispatch: React.PropTypes.func,
  state: React.PropTypes.object
};
const mapStateToProps = (state) => ({
  state
});

// Export.
export default connect(mapStateToProps)(ApprovalWorkflow);
