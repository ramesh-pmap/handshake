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
      <div id="buttons_disabled" className="doc-section">

        <h2>Disabled state</h2>

        <p>Make buttons look unclickable by fading them back 50%. To do this add the <code>disabled</code> attribute to buttons.</p>

        <Panel bsStyle="warning" header="Event handler functionality not impacted">
          This prop will only change the <code>&lt;Button /&gt;</code> ’s appearance, not its functionality. Use custom logic to disable the effect of the <code>onClick</code> handlers.
        </Panel>

        <div className="bs-example">
          <ButtonToolbar>
            <Button bsStyle="primary" bsSize="large" disabled>Primary button</Button>
            <Button bsSize="large" disabled>Button</Button>
          </ButtonToolbar>
        </div>

        <Highlight className="html">
          {' \
<ButtonToolbar> \n \
  <Button bsStyle="primary" bsSize="large" disabled>Primary button</Button> \n \
  <Button bsSize="large" disabled>Button</Button> \n \
</ButtonToolbar> \
          '}
        </Highlight>

      </div>
    );
  }
}

// Export.
export default Partial;
