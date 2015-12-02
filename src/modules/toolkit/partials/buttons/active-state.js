// Dependencies.
import React from 'react';

// Core components.
import {ButtonToolbar, Button} from 'react-bootstrap';

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
      <div id="buttons_active" className="doc-section">

        <h2>Active state</h2>

        <p>To set a buttons active state simply set the components <code>active</code> prop.</p>

        <div className="bs-example">
          <ButtonToolbar>
            <Button bsStyle="primary" bsSize="large" active>Primary button</Button>
            <Button bsSize="large" active>Button</Button>
          </ButtonToolbar>
        </div>

        <Highlight className="html">
          {' \
<ButtonToolbar> \n \
  <Button bsStyle="primary" bsSize="large" active>Primary button</Button> \n \
  <Button bsSize="large" active>Button</Button> \n \
</ButtonToolbar> \
          '}
        </Highlight>

      </div>
    );
  }
}

// Export.
export default Partial;
