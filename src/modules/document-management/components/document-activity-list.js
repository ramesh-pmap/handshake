// Dependencies.
import React from 'react';
// import {Link} from 'react-router';
// import {LinkContainer} from 'react-router-bootstrap';

// Core components.
import {ButtonGroup, ListGroup, ListGroupItem, DropdownButton, MenuItem} from 'react-bootstrap';
import Icon from 'react-fa';

// Stylesheets.
import '../../../modules/document-management/styles.scss';

// Define class.
class Layout extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);

    this.state = {
    };
  }

  // Render method.
  render() {
    return (
      <div>

        <div className="fixed-title">
          <ButtonGroup className="title-dropdown">
            <DropdownButton id="doc_mgt-actions_dropdown" title="All Tasks" bsStyle="link" bsSize="lg">
              <MenuItem eventKey="1">Pending <small>(2)</small></MenuItem>
              <MenuItem eventKey="2">Ready for Release <small>(1)</small></MenuItem>
              <MenuItem eventKey="3">Change Requests <small>(7)</small></MenuItem>
              <MenuItem eventKey="4">All Tasks</MenuItem>
            </DropdownButton>
          </ButtonGroup>
        </div>

        <ListGroup bsStyle="info">
          <ListGroupItem href="#link1">
            <Icon name="file-word-o" className="fa-fw fa-lg text-muted" />
            &nbsp;
            <b>Sample Word Document</b>
            <p className="small">/OSHA/</p>
            <p className="small">/OSHA/Procedures/</p>
          </ListGroupItem>
          <ListGroupItem href="#link1">
            <Icon name="file-word-o" className="fa-fw fa-lg text-muted" />
            &nbsp;
            <b>Sample Word Document</b>
            <p className="small">/OSHA/</p>
            <p className="small">/OSHA/Procedures/</p>
          </ListGroupItem>
          <ListGroupItem href="#link1">
            <Icon name="file-word-o" className="fa-fw fa-lg text-muted" />
            &nbsp;
            <b>Sample Word Document</b>
            <p className="small">/OSHA/</p>
            <p className="small">/OSHA/Procedures/</p>
          </ListGroupItem>
          <ListGroupItem href="#link1">
            <Icon name="file-word-o" className="fa-fw fa-lg text-muted" />
            &nbsp;
            <b>Sample Word Document</b>
            <p className="small">/OSHA/</p>
            <p className="small">/OSHA/Procedures/</p>
          </ListGroupItem>
        </ListGroup>

      </div>
    );
  }
}


// Export.
export default Layout;
