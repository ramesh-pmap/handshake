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

        <h2>Button toolbar</h2>

        <p>Combine sets of <code>&lt;ButtonGroup /&gt;</code>s into a <code>&lt;ButtonToolbar /&gt;</code> for more complex components.</p>

        <div className="bs-example">
          <ButtonToolbar>
            <ButtonGroup>
              <Button>1</Button>
              <Button>2</Button>
              <Button>3</Button>
              <Button>4</Button>
            </ButtonGroup>

            <ButtonGroup>
              <Button>5</Button>
              <Button>6</Button>
              <Button>7</Button>
            </ButtonGroup>

            <ButtonGroup>
              <Button>8</Button>
            </ButtonGroup>
          </ButtonToolbar>
        </div>

        <Highlight className="html">
          {' \
<ButtonToolbar> \n \
  <ButtonGroup> \n \
    <Button>1</Button> \n \
    <Button>2</Button> \n \
    <Button>3</Button> \n \
    <Button>4</Button> \n \
  </ButtonGroup> \n \
 \n \
  <ButtonGroup> \n \
    <Button>5</Button> \n \
    <Button>6</Button> \n \
    <Button>7</Button> \n \
  </ButtonGroup> \n \
 \n \
  <ButtonGroup> \n \
    <Button>8</Button> \n \
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
