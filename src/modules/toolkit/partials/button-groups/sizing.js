// Dependencies.
import React from 'react';

// Core components.
import {ButtonToolbar, ButtonGroup, Button} from 'react-bootstrap';

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

        <p>Instead of applying button sizing props to every button in a group, just add <code>bsSize</code> prop to the <code>&lt;ButtonGroup  /&gt;</code>.</p>

        <div className="bs-example">
          <ButtonToolbar>
            <ButtonGroup bsSize="large">
              <Button>Left</Button>
              <Button>Middle</Button>
              <Button>Right</Button>
            </ButtonGroup>
          </ButtonToolbar>

          <ButtonToolbar>
            <ButtonGroup>
              <Button>Left</Button>
              <Button>Middle</Button>
              <Button>Right</Button>
            </ButtonGroup>
          </ButtonToolbar>

          <ButtonToolbar>
            <ButtonGroup bsSize="small">
              <Button>Left</Button>
              <Button>Middle</Button>
              <Button>Right</Button>
            </ButtonGroup>
          </ButtonToolbar>

          <ButtonToolbar>
            <ButtonGroup bsSize="xsmall">
              <Button>Left</Button>
              <Button>Middle</Button>
              <Button>Right</Button>
            </ButtonGroup>
          </ButtonToolbar>
        </div>

        <Highlight className="html">
          {' \
<ButtonToolbar> \n \
  <ButtonGroup bsSize="large"> \n \
    <Button>Left</Button> \n \
    <Button>Middle</Button> \n \
    <Button>Right</Button> \n \
  </ButtonGroup> \n \
</ButtonToolbar> \n \
 \n \
<ButtonToolbar> \n \
  <ButtonGroup> \n \
    <Button>Left</Button> \n \
    <Button>Middle</Button> \n \
    <Button>Right</Button> \n \
  </ButtonGroup> \n \
</ButtonToolbar> \n \
 \n \
<ButtonToolbar> \n \
  <ButtonGroup bsSize="small"> \n \
    <Button>Left</Button> \n \
    <Button>Middle</Button> \n \
    <Button>Right</Button> \n \
  </ButtonGroup> \n \
</ButtonToolbar> \n \
 \n \
<ButtonToolbar> \n \
  <ButtonGroup bsSize="xsmall"> \n \
    <Button>Left</Button> \n \
    <Button>Middle</Button> \n \
    <Button>Right</Button> \n \
  </ButtonGroup> \n \
</ButtonToolbar> \
          '}
        </Highlight>

      </div>
    );
  }
}

// Export.
export default Partial;
