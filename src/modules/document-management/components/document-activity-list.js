// Dependencies.
import React from 'react';
// import {Link} from 'react-router';
// import {LinkContainer} from 'react-router-bootstrap';

// Core components.
import {ButtonGroup, ListGroup, ListGroupItem, DropdownButton, MenuItem} from 'react-bootstrap';
import Icon from 'react-fa';

// Stylesheets.
import '../../../modules/document-management/styles.scss';

// Define const.


// Define class.
class Layout extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);

    this.state = {
      selectedKey: 'default',
      selectedValue: 'All Tasks'
    };
  }

  handleSelect(e, key) {
    this.setState({ selectedValue: e.currentTarget.outerText });
    this.setState({ selectedKey: key });
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
      <ListGroupItem href="#link1">
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

      </ListGroup>);
      break;
    // Drafts Pending Submittal
    case 2:
      docList = (<ListGroup bsStyle="info">

      {/* Card Item Drafts Pending Submittals */}
      <ListGroupItem href="#link1">
        <div className="list-card neutral">
          <h4>Submit a Request to Add, Remove, or Change Documents.docx</h4>
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
      <ListGroupItem href="#link1">
        <div className="list-card neutral">
          <h4>Submit a Request to Add, Remove, or Change Documents.docx</h4>
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
      <ListGroupItem href="#link1">
        <div className="list-card rejected">
          <h4>Submit a Request to Add, Remove, or Change Documents.docx</h4>
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
      <ListGroupItem href="#link1">
        <div className="list-card neutral">
          <h4>Submit a Request to Add, Remove, or Change Documents.docx</h4>
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
      <ListGroupItem href="#link1">
        <div className="list-card neutral">
          <h4>Submit a Request to Add, Remove, or Change Documents.docx</h4>
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
      <ListGroupItem href="#link1">
        <div className="list-card neutral">
          <h4>Submit a Request to Add, Remove, or Change Documents.docx</h4>
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

      {/* Card Item Uploaded Pending Details */}
      <ListGroupItem href="#link1">
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
          <div className="folder-wrapper clearfix">
            <p className="folder-name">/1.03 Document and Records Management/</p>
            <p className="folder-name">/../1.03.01 Document Management/</p>
            <p className="folder-name">/../../1.03.01.3 Work Instructions</p>
          </div>
        </div>
      </ListGroupItem>

      {/* Card Item Drafts Pending Submittals */}
      <ListGroupItem href="#link1">
        <div className="list-card neutral">
          <h4>Submit a Request to Add, Remove, or Change Documents.docx</h4>
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
      <ListGroupItem href="#link1">
        <div className="list-card rejected">
          <h4>Submit a Request to Add, Remove, or Change Documents.docx</h4>
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
      <ListGroupItem href="#link1">
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
      <ListGroupItem href="#link1">
        <div className="list-card neutral">
          <h4>Submit a Request to Add, Remove, or Change Documents.docx</h4>
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
      <ListGroupItem href="#link1">
        <div className="list-card neutral">
          <h4>Submit a Request to Add, Remove, or Change Documents.docx</h4>
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
      <ListGroupItem href="#link1">
        <div className="list-card neutral">
          <h4>Submit a Request to Add, Remove, or Change Documents.docx</h4>
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
      <ListGroupItem href="#link1">
        <div className="list-card neutral">
          <h4>Submit a Request to Add, Remove, or Change Documents.docx</h4>
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
            <DropdownButton id="doc_mgt-actions_dropdown" title={this.state.selectedValue} bsStyle="link" bsSize="lg" onSelect={this.handleSelect.bind(this)}>
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


// Export.
export default Layout;
