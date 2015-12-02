// Dependencies.
import React from 'react';

// Core components.
import {ButtonToolbar, DropdownButton, SplitButton, MenuItem} from 'react-bootstrap';

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

        <h2>Dropup variation</h2>

        <p>Trigger dropdown menus that site above the button by adding the <code>dropup</code> prop.</p>

        <div className="bs-example">
          <ButtonToolbar>
            <SplitButton title="Dropup" dropup id="split-button-dropup">
              <MenuItem eventKey="1">Action</MenuItem>
              <MenuItem eventKey="2">Another action</MenuItem>
            </SplitButton>
          </ButtonToolbar>

          <ButtonToolbar>
            <DropdownButton bsStyle="primary" title="Right dropup" dropup pullRight id="split-button-dropup-pull-right">
              <MenuItem eventKey="1">Action</MenuItem>
              <MenuItem eventKey="2">Another action</MenuItem>
            </DropdownButton>
          </ButtonToolbar>
        </div>

        <Highlight className="html">
          {' \
<ButtonToolbar> \n \
  <SplitButton title="Dropup" dropup id="split-button-dropup"> \n \
    <MenuItem eventKey="1">Action</MenuItem> \n \
    <MenuItem eventKey="2">Another action</MenuItem> \n \
  </SplitButton> \n \
</ButtonToolbar> \n \
 \n \
<ButtonToolbar> \n \
  <DropdownButton bsStyle="primary" title="Right dropup" dropup pullRight id="split-button-dropup-pull-right"> \n \
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
