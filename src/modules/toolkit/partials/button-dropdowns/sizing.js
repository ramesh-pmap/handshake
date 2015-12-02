// Dependencies.
import React from 'react';

// Core components.
import {ButtonToolbar, DropdownButton, MenuItem} from 'react-bootstrap';

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

        <h2>Sizing</h2>

        <p>Button dropdowns work with buttons of all sizes.</p>

        <div className="bs-example">
          <ButtonToolbar>
            <DropdownButton bsSize="large" title="Large button" id="dropdown-size-large">
              <MenuItem eventKey="1">Action</MenuItem>
              <MenuItem eventKey="2">Another action</MenuItem>
            </DropdownButton>
          </ButtonToolbar>

          <ButtonToolbar>
            <DropdownButton title="Default button" id="dropdown-size-medium">
              <MenuItem eventKey="1">Action</MenuItem>
              <MenuItem eventKey="2">Another action</MenuItem>
            </DropdownButton>
          </ButtonToolbar>

          <ButtonToolbar>
            <DropdownButton bsSize="small" title="Small button" id="dropdown-size-small">
              <MenuItem eventKey="1">Action</MenuItem>
              <MenuItem eventKey="2">Another action</MenuItem>
            </DropdownButton>
          </ButtonToolbar>

          <ButtonToolbar>
            <DropdownButton bsSize="xsmall" title="Extra small button" id="dropdown-size-extra-small">
              <MenuItem eventKey="1">Action</MenuItem>
              <MenuItem eventKey="2">Another action</MenuItem>
            </DropdownButton>
          </ButtonToolbar>
        </div>

        <Highlight className="html">
          {' \
<ButtonToolbar> \n \
  <DropdownButton bsSize="large" title="Large button" id="dropdown-size-large"> \n \
    <MenuItem eventKey="1">Action</MenuItem> \n \
    <MenuItem eventKey="2">Another action</MenuItem> \n \
  </DropdownButton> \n \
</ButtonToolbar> \n \
 \n \
<ButtonToolbar> \n \
  <DropdownButton title="Default button" id="dropdown-size-medium"> \n \
    <MenuItem eventKey="1">Action</MenuItem> \n \
    <MenuItem eventKey="2">Another action</MenuItem> \n \
  </DropdownButton> \n \
</ButtonToolbar> \n \
 \n \
<ButtonToolbar> \n \
  <DropdownButton bsSize="small" title="Small button" id="dropdown-size-small"> \n \
    <MenuItem eventKey="1">Action</MenuItem> \n \
    <MenuItem eventKey="2">Another action</MenuItem> \n \
  </DropdownButton> \n \
</ButtonToolbar> \n \
 \n \
<ButtonToolbar> \n \
  <DropdownButton bsSize="xsmall" title="Extra small button" id="dropdown-size-extra-small"> \n \
    <MenuItem eventKey="1">Action</MenuItem> \n \
    <MenuItem eventKey="2">Another action</MenuItem> \n \
  </DropdownButton> \n \
</ButtonToolbar> \
          '}
        </Highlight>

      </div>
    );
  }
}

// Export.
export default Partial;
