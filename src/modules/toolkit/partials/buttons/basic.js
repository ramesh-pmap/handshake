// Dependencies.
import React from 'react';

// Core components.
import {Panel, ButtonToolbar, Button} from 'react-bootstrap';

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

        <h2>Basic Options</h2>

        <p>Use any of the available button style types to quickly create a styled button. Just modify the <code>bsStyle</code> prop.</p>

        <Panel bsStyle="warning" header="Button Spacing">
          Because React doesn"t output newlines between elements, buttons on the same line are displayed flush against each other. To preserve the spacing between multiple inline buttons, wrap your button group in <code>&lt;ButtonToolbar /&gt;</code>.
        </Panel>

        <div className="bs-example">
          <ButtonToolbar>
            <Button>Default</Button>
            <Button bsStyle="primary">Primary</Button>
            <Button bsStyle="success">Success</Button>
            <Button bsStyle="info">Info</Button>
            <Button bsStyle="warning">Warning</Button>
            <Button bsStyle="danger">Danger</Button>
            <Button bsStyle="link">Link</Button>
          </ButtonToolbar>
        </div>

        <Highlight className="html">
          {' \
render() { \n \
  return ( \n \
    <!-- Optional Wrapper --> \n \
    <ButtonToolbar> \n \
    \n \
      <!-- Standard button --> \n \
      <Button>Default</Button> \n \
      \n \
      <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> \n \
      <Button bsStyle="primary">Primary</Button> \n \
      \n \
      <!-- Indicates a successful or positive action --> \n \
      <Button bsStyle="success">Success</Button> \n \
      \n \
      <!-- Contextual button for informational alert messages --> \n \
      <Button bsStyle="info">Info</Button> \n \
      \n \
      <!-- Indicates caution should be taken with this action --> \n \
      <Button bsStyle="warning">Warning</Button> \n \
      \n \
      <!-- Indicates a dangerous or potentially negative action --> \n \
      <Button bsStyle="danger">Danger</Button> \n \
      \n \
      <!-- Deemphasize a button by making it look like a link while maintaining button behavior --> \n \
      <Button bsStyle="link">Link</Button> \n \
    \n \
    </ButtonToolbar> \n \
  ); \n \
} \n \
          '}
        </Highlight>

      </div>
    );
  }
}

// Export.
export default Partial;
