// Dependencies.
import React from 'react';

// Core components.
import {ButtonToolbar, OverlayTrigger, Button, Popover} from 'react-bootstrap';

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

        <h2>With OverlayTrigger</h2>

        <p>The Popover component, like the Tooltip can be used with an <code>OverlayTrigger</code> Component, and positioned around it.</p>

        <div className="bs-example">
          <ButtonToolbar>
            <OverlayTrigger trigger="click" placement="left" overlay={<Popover id="pp1" title="Popover left"><strong>Holy guacamole!</strong> Check this info.</Popover>}>
              <Button bsStyle="default">Holy guacamole!</Button>
            </OverlayTrigger>
            <OverlayTrigger trigger="click" placement="top" overlay={<Popover id="pp2" title="Popover top"><strong>Holy guacamole!</strong> Check this info.</Popover>}>
              <Button bsStyle="default">Holy guacamole!</Button>
            </OverlayTrigger>
            <OverlayTrigger trigger="click" placement="bottom" overlay={<Popover id="pp3" title="Popover bottom"><strong>Holy guacamole!</strong> Check this info.</Popover>}>
              <Button bsStyle="default">Holy guacamole!</Button>
            </OverlayTrigger>
            <OverlayTrigger trigger="click" placement="right" overlay={<Popover id="pp4" title="Popover right"><strong>Holy guacamole!</strong> Check this info.</Popover>}>
              <Button bsStyle="default">Holy guacamole!</Button>
            </OverlayTrigger>
          </ButtonToolbar>
        </div>

        <Highlight className="html">
          {' \
render() { \n \
  return ( \n \
<ButtonToolbar> \n \
  <OverlayTrigger trigger="click" placement="left" overlay={<Popover title="Popover left"><strong>Holy guacamole!</strong> Check this info.</Popover>}> \n \
    <Button bsStyle="default">Holy guacamole!</Button> \n \
  </OverlayTrigger> \n \
  <OverlayTrigger trigger="click" placement="top" overlay={<Popover title="Popover top"><strong>Holy guacamole!</strong> Check this info.</Popover>}> \n \
    <Button bsStyle="default">Holy guacamole!</Button> \n \
  </OverlayTrigger> \n \
  <OverlayTrigger trigger="click" placement="bottom" overlay={<Popover title="Popover bottom"><strong>Holy guacamole!</strong> Check this info.</Popover>}> \n \
    <Button bsStyle="default">Holy guacamole!</Button> \n \
  </OverlayTrigger> \n \
  <OverlayTrigger trigger="click" placement="right" overlay={<Popover title="Popover right"><strong>Holy guacamole!</strong> Check this info.</Popover>}> \n \
    <Button bsStyle="default">Holy guacamole!</Button> \n \
  </OverlayTrigger> \n \
</ButtonToolbar> \n \
  }\n \
} \
          '}
        </Highlight>

      </div>
    );
  }
}

// Export.
export default Partial;
