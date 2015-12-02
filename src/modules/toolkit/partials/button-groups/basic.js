// Dependencies.
import React from 'react';

// Core components.
import {ButtonGroup, Button} from 'react-bootstrap';

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

        <h2>Basic Example</h2>

        <p>Wrap a series of <code>&lt;ButtonGroup /&gt;</code>s into a <code>&lt;ButtonToolbar /&gt;</code> for more complex components.</p>

        <div className="bs-example">
          <ButtonGroup>
            <Button>Left</Button>
            <Button>Middle</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </div>

        <Highlight className="html">
          {' \
<ButtonGroup> \n \
  <Button>Left</Button> \n \
  <Button>Middle</Button> \n \
  <Button>Right</Button> \n \
</ButtonGroup> \
          '}
        </Highlight>

      </div>
    );
  }
}

// Export.
export default Partial;
