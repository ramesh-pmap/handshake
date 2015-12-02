// Dependencies.
import React from 'react';

// Core components.
import {ButtonGroup, DropdownButton, MenuItem} from 'react-bootstrap';

// Syntax Highlighter.
import Highlight from 'react-highlight';


// Define class.
class Partial extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);
  }

  // Render method.
  render() {
    return (
      <div className="doc-section">

        <h2>Single button dropdowns</h2>

        <p>Create a dropdown button with the <code>&lt;DropdownButton /&gt;</code> component.</p>

        <div className="bs-example">
          <ButtonGroup>
            <DropdownButton title="Default" bsStyle="default" id="button-dropdown-example-default">
              <MenuItem eventKey="1">Dropdown link</MenuItem>
              <MenuItem eventKey="2">Dropdown link</MenuItem>
            </DropdownButton>
            <DropdownButton title="Primary" bsStyle="primary" id="button-dropdown-example-primary">
              <MenuItem eventKey="1">Dropdown link</MenuItem>
              <MenuItem eventKey="2">Dropdown link</MenuItem>
            </DropdownButton>
            <DropdownButton title="Info" bsStyle="info" id="button-dropdown-example-info">
              <MenuItem eventKey="1">Dropdown link</MenuItem>
              <MenuItem eventKey="2">Dropdown link</MenuItem>
            </DropdownButton>
            <DropdownButton title="Success" bsStyle="success" id="button-dropdown-example-success">
              <MenuItem eventKey="1">Dropdown link</MenuItem>
              <MenuItem eventKey="2">Dropdown link</MenuItem>
            </DropdownButton>
            <DropdownButton title="Warning" bsStyle="warning" id="button-dropdown-example-warning">
              <MenuItem eventKey="1">Dropdown link</MenuItem>
              <MenuItem eventKey="2">Dropdown link</MenuItem>
            </DropdownButton>
            <DropdownButton title="Danger" bsStyle="danger" id="button-dropdown-example-danger">
              <MenuItem eventKey="1">Dropdown link</MenuItem>
              <MenuItem eventKey="2">Dropdown link</MenuItem>
            </DropdownButton>
            <DropdownButton title="Link" bsStyle="link" id="button-dropdown-example-link">
              <MenuItem eventKey="1">Dropdown link</MenuItem>
              <MenuItem eventKey="2">Dropdown link</MenuItem>
            </DropdownButton>
          </ButtonGroup>
        </div>

        <Highlight className="html">
          {' \
<ButtonGroup> \n \
  <DropdownButton title="Default" bsStyle="default" id="button-dropdown-example-default"> \n \
    <MenuItem eventKey="1">Dropdown link</MenuItem> \n \
    <MenuItem eventKey="2">Dropdown link</MenuItem> \n \
  </DropdownButton> \n \
</ButtonGroup> \
          '}
        </Highlight>

      </div>
    );
  }
}

// Export.
export default Partial;
