// Dependencies.
import React from 'react';
import { connect } from 'react-redux';

// Core components.
import {ButtonGroup, ListGroup, ListGroupItem, DropdownButton, MenuItem} from 'react-bootstrap';
import Icon from 'react-fa';

// Constants.
import {
  UPLOAD,
  DETAILFORM,
  DETAIL,
  PREVIEW,
  APPROVAL_WORKFLOW,
  APPROVE_CHANGE_REQUEST,
  RELEASE_NOTIFICATION,
  PERIODIC_REVIEW
} from '../../../../redux/constants';

// Redux.
import {
  setContentAreaView,
  setRightPanelAreaView
} from '../../../../redux/actions';

// Define class.
class ActivityList extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);

    this.state = {
      selectedKey: 'default',
      selectedValue: 'All Tasks',
    };
  }

  handleSelect(e, key) {
    this.setState({ selectedValue: e.currentTarget.outerText });
    this.setState({ selectedKey: key });
  }

  handleContentButtonClick(view) {
    const { dispatch } = this.props;
    dispatch(setContentAreaView(view));
  }

  handleTaskClick(view) {
    const { dispatch } = this.props;
    dispatch(setRightPanelAreaView(view));
    switch (view) {
    case DETAILFORM:
      dispatch(setContentAreaView(UPLOAD));
      break;
    default:
      dispatch(setContentAreaView(PREVIEW));
    }
  }

  // Render method.
  render() {
    const selectedKey = parseInt(this.state.selectedKey, 0);
    let docList;

    switch (selectedKey) {
    // Uploaded Pending Details
    case 1:
      docList = (<ListGroup bsStyle="info">
      {/* Card Item Uploaded Pending Details */}
      <ListGroupItem onClick={this.handleTaskClick.bind(this, DETAILFORM)}>
        <div className="list-card neutral">
          <h4>Incident Management.docx</h4>
          <Icon name="file-word-o" className="fa-fw fa-lg text-muted corner-icon" />
          <div className="meta-wrapper">
            <div className="clearfix">
              <p className="pull-left">John Doe</p>
              <p className="pull-right">10/11/2015</p>
            </div>
            <div className="clearfix">
              <p className="neutral pull-right">Uploaded Pending Details </p>
            </div>
          </div>
        </div>
      </ListGroupItem>

      </ListGroup>);
      break;
    // Drafts Pending Submittal
    case 2:
      docList = (<ListGroup bsStyle="info">

      {/* Card Item Drafts Pending Submittals */}
      <ListGroupItem onClick={this.handleTaskClick.bind(this, DETAIL)}>
        <div className="list-card neutral">
          <h4>Incident Investigation.docx</h4>
          <Icon name="file-word-o" className="fa-fw fa-lg text-muted corner-icon" />
          <div className="meta-wrapper">
            <div className="clearfix">
              <p className="pull-left">John Doe</p>
              <p className="pull-right">10/11/2015</p>
            </div>
            <div className="clearfix">
              <p className="pending pull-right">Drafts Pending Submittals </p>
            </div>
          </div>
        </div>
      </ListGroupItem>

    </ListGroup>);
      break;
    // Pending Approvals
    case 3:
      docList = (<ListGroup bsStyle="info">

      {/* Card Item Pending Approvals */}
      <ListGroupItem onClick={this.handleTaskClick.bind(this, APPROVAL_WORKFLOW)}>
        <div className="list-card neutral">
          <h4>Incident Types and Priorities.docx</h4>
          <Icon name="file-word-o" className="fa-fw fa-lg text-muted corner-icon" />
          <div className="meta-wrapper">
            <div className="clearfix">
              <p className="pull-left">John Doe</p>
              <p className="pull-right">10/11/2015</p>
            </div>
            <div className="clearfix">
              <p className="pending pull-right">Pending Approvals</p>
            </div>
          </div>
        </div>
      </ListGroupItem>

    </ListGroup>);
      break;
    // Rejected Pending Revision
    case 4:
      docList = (<ListGroup bsStyle="info">

      {/* Card Item Rejected Pending Revision */}
      <ListGroupItem onClick={this.handleTaskClick.bind(this, APPROVAL_WORKFLOW)}>
        <div className="list-card rejected">
          <h4>Emergency Preparedness and Planning.docx</h4>
          <Icon name="file-word-o" className="fa-fw fa-lg text-muted corner-icon" />
          <div className="meta-wrapper">
            <div className="clearfix">
              <p className="pull-left">John Doe</p>
              <p className="pull-right">10/11/2015</p>
            </div>
            <div className="clearfix">
              <p className="rejected pull-right">Rejected Pending Revision</p>
            </div>
          </div>
        </div>
      </ListGroupItem>

    </ListGroup>);
      break;
    // Pending Release Notification
    case 5:
      docList = (<ListGroup bsStyle="info">

      {/* Card Item Pending Release Notification */}
      <ListGroupItem onClick={this.handleTaskClick.bind(this, RELEASE_NOTIFICATION)}>
        <div className="list-card neutral">
          <h4>Critical Information Summaries.docx</h4>
          <Icon name="file-word-o" className="fa-fw fa-lg text-muted corner-icon" />
          <div className="meta-wrapper">
            <div className="clearfix">
              <p className="pull-left">John Doe</p>
              <p className="pull-right">10/11/2015</p>
            </div>
            <div className="clearfix">
              <p className="pending pull-right">Pending Release Notification</p>
            </div>
          </div>
        </div>
      </ListGroupItem>

    </ListGroup>);
      break;
    // Pending Change Requests
    case 6:
      docList = (<ListGroup bsStyle="info">
      {/* Card Item Pending Change Requests */}
      <ListGroupItem onClick={this.handleTaskClick.bind(this, APPROVE_CHANGE_REQUEST)}>
        <div className="list-card neutral">
          <h4>Documents of External Origin Guidance for Sites.docx</h4>
          <Icon name="file-word-o" className="fa-fw fa-lg text-muted corner-icon" />
          <div className="meta-wrapper">
            <div className="clearfix">
              <p className="pull-left">John Doe</p>
              <p className="pull-right">10/11/2015</p>
            </div>
            <div className="clearfix">
              <p className="pending pull-right">Pending Change Requests</p>
            </div>
          </div>
        </div>
      </ListGroupItem>

    </ListGroup>);
      break;
    // Pending Periodic Reviews
    case 7:
      docList = (<ListGroup bsStyle="info">
      {/* Card Item Pending Periodic Reviews */}
      <ListGroupItem onClick={this.handleTaskClick.bind(this, PERIODIC_REVIEW)}>
        <div className="list-card neutral">
          <h4>Record Management.docx</h4>
          <Icon name="file-word-o" className="fa-fw fa-lg text-muted corner-icon" />
          <div className="meta-wrapper">
            <div className="clearfix">
              <p className="pull-left">John Doe</p>
              <p className="pull-right">10/11/2015</p>
            </div>
            <div className="clearfix">
              <p className="pending pull-right">Pending Periodic Reviews</p>
            </div>
          </div>
        </div>
      </ListGroupItem>

    </ListGroup>);
      break;
    default:
      docList = (<ListGroup bsStyle="info">

      {/* Card Item Drafts Pending Submittals */}
      <ListGroupItem onClick={this.handleTaskClick.bind(this, DETAIL)}>
        <div className="list-card neutral">
          <h4>Incident Investigation.docx</h4>
          <Icon name="file-word-o" className="fa-fw fa-lg text-muted corner-icon" />
          <div className="meta-wrapper">
            <div className="clearfix">
              <p className="pull-left">John Doe</p>
              <p className="pull-right">10/11/2015</p>
            </div>
            <div className="clearfix">
              <p className="pending pull-right">Drafts Pending Submittals </p>
            </div>
          </div>
        </div>
      </ListGroupItem>

      {/* Card Item Rejected Pending Revision */}
      <ListGroupItem onClick={this.handleTaskClick.bind(this, APPROVAL_WORKFLOW)}>
        <div className="list-card rejected">
          <h4>Emergency Preparedness and Planning.docx</h4>
          <Icon name="file-word-o" className="fa-fw fa-lg text-muted corner-icon" />
          <div className="meta-wrapper">
            <div className="clearfix">
              <p className="pull-left">John Doe</p>
              <p className="pull-right">10/11/2015</p>
            </div>
            <div className="clearfix">
              <p className="rejected pull-right">Rejected Pending Revision</p>
            </div>
          </div>
        </div>
      </ListGroupItem>

      {/* Card Item Uploaded Pending Details */}
      <ListGroupItem onClick={this.handleTaskClick.bind(this, DETAILFORM)}>
        <div className="list-card neutral">
          <h4>Submit a Request to Add, Remove, or Change Documents.docx</h4>
          <Icon name="file-word-o" className="fa-fw fa-lg text-muted corner-icon" />
          <div className="meta-wrapper">
            <div className="clearfix">
              <p className="pull-left">John Doe</p>
              <p className="pull-right">10/11/2015</p>
            </div>
            <div className="clearfix">
              <p className="neutral pull-right">Uploaded Pending Details </p>
            </div>
          </div>
        </div>
      </ListGroupItem>

      {/* Card Item Pending Release Notification */}
      <ListGroupItem onClick={this.handleTaskClick.bind(this, RELEASE_NOTIFICATION)}>
        <div className="list-card neutral">
          <h4>Critical Information Summaries.docx</h4>
          <Icon name="file-word-o" className="fa-fw fa-lg text-muted corner-icon" />
          <div className="meta-wrapper">
            <div className="clearfix">
              <p className="pull-left">John Doe</p>
              <p className="pull-right">10/11/2015</p>
            </div>
            <div className="clearfix">
              <p className="pending pull-right">Pending Release Notification</p>
            </div>
          </div>
        </div>
      </ListGroupItem>

      {/* Card Item Pending Change Requests */}
      <ListGroupItem onClick={this.handleTaskClick.bind(this, APPROVE_CHANGE_REQUEST)}>
        <div className="list-card neutral">
          <h4>Documents of External Origin Guidance for Sites.docx</h4>
          <Icon name="file-word-o" className="fa-fw fa-lg text-muted corner-icon" />
          <div className="meta-wrapper">
            <div className="clearfix">
              <p className="pull-left">John Doe</p>
              <p className="pull-right">10/11/2015</p>
            </div>
            <div className="clearfix">
              <p className="pending pull-right">Pending Change Requests</p>
            </div>
          </div>
        </div>
      </ListGroupItem>

      {/* Card Item Pending Periodic Reviews */}
      <ListGroupItem onClick={this.handleTaskClick.bind(this, PERIODIC_REVIEW)}>
        <div className="list-card neutral">
          <h4>Record Management.docx</h4>
          <Icon name="file-word-o" className="fa-fw fa-lg text-muted corner-icon" />
          <div className="meta-wrapper">
            <div className="clearfix">
              <p className="pull-left">John Doe</p>
              <p className="pull-right">10/11/2015</p>
            </div>
            <div className="clearfix">
              <p className="pending pull-right">Pending Periodic Reviews</p>
            </div>
          </div>
        </div>
      </ListGroupItem>

      {/* Card Item Pending Approvals */}
      <ListGroupItem onClick={this.handleTaskClick.bind(this, APPROVAL_WORKFLOW)}>
        <div className="list-card neutral">
          <h4>Incident Types and Priorities.docx</h4>
          <Icon name="file-word-o" className="fa-fw fa-lg text-muted corner-icon" />
          <div className="meta-wrapper">
            <div className="clearfix">
              <p className="pull-left">John Doe</p>
              <p className="pull-right">10/11/2015</p>
            </div>
            <div className="clearfix">
              <p className="pending pull-right">Pending Approvals</p>
            </div>
          </div>
        </div>
      </ListGroupItem>

    </ListGroup>);
    }
    return (
      <div>

        <div className="fixed-title">
          <ButtonGroup className="title-dropdown">
            <DropdownButton id="file_manager-actions_dropdown" title={this.state.selectedValue} bsStyle="link" bsSize="md" onSelect={this.handleSelect.bind(this)}>
              <MenuItem eventKey="default">All Tasks</MenuItem>
              <MenuItem eventKey="1">Uploaded Pending Details <small>(1)</small></MenuItem>
              <MenuItem eventKey="2">Drafts Pending Submittal <small>(1)</small></MenuItem>
              <MenuItem eventKey="3">Pending Approvals <small>(1)</small></MenuItem>
              <MenuItem eventKey="4">Rejected Pending Revision <small>(1)</small></MenuItem>
              <MenuItem eventKey="5">Pending Release Notification <small>(1)</small></MenuItem>
              <MenuItem eventKey="6">Pending Change Requests <small>(1)</small></MenuItem>
              <MenuItem eventKey="7">Pending Periodic Reviews <small>(1)</small></MenuItem>
            </DropdownButton>
          </ButtonGroup>
        </div>

        {docList}

      </div>
    );
  }
}

// propTypes.
ActivityList.propTypes = {
  dispatch: React.PropTypes.func,
  state: React.PropTypes.object
};
const mapStateToProps = (state) => ({
  state
});

// Export.
export default connect(mapStateToProps)(ActivityList);
