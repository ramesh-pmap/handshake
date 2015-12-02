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

        <h2>No caret variation</h2>

        <p>Remove the caret using the <code>noCaret</code> prop.</p>

        <div className="bs-example">
          <ButtonToolbar>
            <DropdownButton bsStyle="default" title="No caret" noCaret id="dropdown-no-caret">
              <MenuItem eventKey="1">Action</MenuItem>
              <MenuItem eventKey="2">Another action</MenuItem>
            </DropdownButton>
          </ButtonToolbar>
        </div>

        <Highlight className="html">
          {' \
<ButtonToolbar> \n \
  <DropdownButton bsStyle="default" title="No caret" noCaret id="dropdown-no-caret"> \n \
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
