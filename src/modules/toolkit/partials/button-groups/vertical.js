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

        <h2>Vertical variation</h2>

        <p>Make a set of buttons appear vertically stacked rather than horizontally. Split button dropdowns are not supported here.</p>

        <p>Just add vertical to the <code>&lt;ButtonGroup /&gt;</code>s.</p>

        <div className="bs-example">
          <ButtonGroup vertical>
            <Button>Button</Button>
            <Button>Button</Button>
            <DropdownButton title="Dropdown" id="bg-vertical-dropdown-1">
              <MenuItem eventKey="1">Dropdown link</MenuItem>
              <MenuItem eventKey="2">Dropdown link</MenuItem>
            </DropdownButton>
            <Button>Button</Button>
            <Button>Button</Button>
            <DropdownButton title="Dropdown" id="bg-vertical-dropdown-2">
              <MenuItem eventKey="1">Dropdown link</MenuItem>
              <MenuItem eventKey="2">Dropdown link</MenuItem>
            </DropdownButton>
            <DropdownButton title="Dropdown" id="bg-vertical-dropdown-3">
              <MenuItem eventKey="1">Dropdown link</MenuItem>
              <MenuItem eventKey="2">Dropdown link</MenuItem>
            </DropdownButton>
          </ButtonGroup>
        </div>

        <Highlight className="html">
          {' \
<ButtonGroup vertical> \n \
  <Button>Button</Button> \n \
  <Button>Button</Button> \n \
  <DropdownButton title="Dropdown" id="bg-vertical-dropdown-1"> \n \
    <MenuItem eventKey="1">Dropdown link</MenuItem> \n \
    <MenuItem eventKey="2">Dropdown link</MenuItem> \n \
  </DropdownButton> \n \
  <Button>Button</Button> \n \
  <Button>Button</Button> \n \
  <DropdownButton title="Dropdown" id="bg-vertical-dropdown-2"> \n \
    <MenuItem eventKey="1">Dropdown link</MenuItem> \n \
    <MenuItem eventKey="2">Dropdown link</MenuItem> \n \
  </DropdownButton> \n \
  <DropdownButton title="Dropdown" id="bg-vertical-dropdown-3"> \n \
    <MenuItem eventKey="1">Dropdown link</MenuItem> \n \
    <MenuItem eventKey="2">Dropdown link</MenuItem> \n \
  </DropdownButton> \n \
</ButtonGroup> \
          '}
        </Highlight>


        <p>Moreover, you can have buttons be block level elements so they take the full width of their container, just add <code>block</code> to the <code>&lt;ButtonGroup /&gt;</code>, in addition to the <code>vertical</code> you just added.</p>

        <div className="bs-example">
          <ButtonGroup vertical block>
            <Button>Full width button</Button>
            <Button>Full width button</Button>
          </ButtonGroup>
        </div>

        <Highlight className="html">
          {' \
<ButtonGroup vertical block> \n \
  <Button>Full width button</Button> \n \
  <Button>Full width button</Button> \n \
</ButtonGroup> \
          '}
        </Highlight>

      </div>
    );
  }
}

// Export.
export default Partial;
