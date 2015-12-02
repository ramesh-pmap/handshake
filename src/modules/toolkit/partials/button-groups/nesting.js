// Dependencies.
import React from 'react';

// Core components.
import {ButtonGroup, Button, DropdownButton, MenuItem} from 'react-bootstrap';

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

        <h2>Nesting</h2>

        <p>You can place other button types within the <code>&lt;ButtonGroup  /&gt;</code> like <code>&lt;DropdownButton  /&gt;</code>s.</p>

        <div className="bs-example">
          <ButtonGroup>
            <Button>1</Button>
            <Button>2</Button>
            <DropdownButton title="Dropdown" id="bg-nested-dropdown">
              <MenuItem eventKey="1">Dropdown link</MenuItem>
              <MenuItem eventKey="2">Dropdown link</MenuItem>
            </DropdownButton>
          </ButtonGroup>
        </div>

        <Highlight className="html">
          {' \
<ButtonGroup> \n \
  <Button>1</Button> \n \
  <Button>2</Button> \n \
  <DropdownButton title="Dropdown" id="bg-nested-dropdown"> \n \
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
