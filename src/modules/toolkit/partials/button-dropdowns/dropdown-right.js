// Dependencies.
import React from 'react';

// Core components.
import {ButtonToolbar, SplitButton, MenuItem} from 'react-bootstrap';

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

        <h2>Dropdown right variation</h2>

        <p>Trigger dropdown menus that align to the right of the button using the <code>pullRight</code> prop.</p>

        <div className="bs-example">
          <ButtonToolbar>
            <SplitButton title="Small example of a right dropdown" pullRight id="split-button-pull-right">
              <MenuItem eventKey="1">Action</MenuItem>
              <MenuItem eventKey="2">Another action</MenuItem>
            </SplitButton>
          </ButtonToolbar>
        </div>

        <Highlight className="html">
          {' \
</ButtonToolbar> \n \
  <SplitButton title="Small example of a right dropdown" pullRight id="split-button-pull-right"> \n \
    <MenuItem eventKey="1">Action</MenuItem> \n \
    <MenuItem eventKey="2">Another action</MenuItem> \n \
  </SplitButton> \n \
</ButtonToolbar> \
          '}
        </Highlight>

      </div>
    );
  }
}

// Export.
export default Partial;
