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

        <h2>Positioned popover components in scrolling container</h2>

        <div className="bs-example bs-example-popover-scroll">
      <ButtonToolbar style={{padding: '100px 0'}}>
        <OverlayTrigger container={this} trigger="click" placement="left" overlay={<Popover id="p1" title="Popover left"><strong>Holy guacamole!</strong> Check this info.</Popover>}>
          <Button bsStyle="default">Holy guacamole!</Button>
        </OverlayTrigger>
        <OverlayTrigger container={this} trigger="click" placement="top" overlay={<Popover id="p2" title="Popover top"><strong>Holy guacamole!</strong> Check this info.</Popover>}>
          <Button bsStyle="default">Holy guacamole!</Button>
        </OverlayTrigger>
        <OverlayTrigger container={this} trigger="click" placement="bottom" overlay={<Popover id="p3" title="Popover bottom"><strong>Holy guacamole!</strong> Check this info.</Popover>}>
          <Button bsStyle="default">Holy guacamole!</Button>
        </OverlayTrigger>
        <OverlayTrigger container={this} trigger="click" placement="right" overlay={<Popover id="p4" title="Popover right"><strong>Holy guacamole!</strong> Check this info.</Popover>}>
          <Button bsStyle="default">Holy guacamole!</Button>
        </OverlayTrigger>
      </ButtonToolbar>
        </div>

        <Highlight className="html">
          {' \
render() { \n \
  return ( \n \
<ButtonToolbar style={{padding: "100px 0"}}> \n \
  <OverlayTrigger container={this} trigger="click" placement="left" overlay={<Popover title="Popover left"><strong>Holy guacamole!</strong> Check this info.</Popover>}> \n \
    <Button bsStyle="default">Holy guacamole!</Button> \n \
  </OverlayTrigger> \n \
  <OverlayTrigger container={this} trigger="click" placement="top" overlay={<Popover title="Popover top"><strong>Holy guacamole!</strong> Check this info.</Popover>}> \n \
    <Button bsStyle="default">Holy guacamole!</Button> \n \
  </OverlayTrigger> \n \
  <OverlayTrigger container={this} trigger="click" placement="bottom" overlay={<Popover title="Popover bottom"><strong>Holy guacamole!</strong> Check this info.</Popover>}> \n \
    <Button bsStyle="default">Holy guacamole!</Button> \n \
  </OverlayTrigger> \n \
  <OverlayTrigger container={this} trigger="click" placement="right" overlay={<Popover title="Popover right"><strong>Holy guacamole!</strong> Check this info.</Popover>}> \n \
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
