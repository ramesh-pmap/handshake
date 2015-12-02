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

        <h2>Justified button groups</h2>

        <p>Make a group of buttons stretch at equal sizes to span the entire width of its parent. Also works with button dropdowns within the button group.</p>

        <p>Just add <code>justified</code> to the <code>&lt;ButtonGroup /&gt;</code>.</p>

        <div className="bs-example">
          <ButtonGroup justified>
            <Button href="#">Left</Button>
            <Button href="#">Middle</Button>
            <DropdownButton title="Dropdown" id="bg-justified-dropdown">
              <MenuItem eventKey="1">Dropdown link</MenuItem>
              <MenuItem eventKey="2">Dropdown link</MenuItem>
            </DropdownButton>
          </ButtonGroup>
        </div>

        <Highlight className="html">
          {' \
<ButtonGroup justified> \n \
  <Button href="#">Left</Button> \n \
  <Button href="#">Middle</Button> \n \
  <DropdownButton title="Dropdown" id="bg-justified-dropdown"> \n \
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
