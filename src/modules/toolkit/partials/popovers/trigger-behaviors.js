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

        <h2>Trigger behaviors</h2>

        <p>It"s inadvisable to use <code>"hover"</code> or <code>"focus"</code> triggers for popovers, because they have poor accessibility from keyboard and on mobile devices.</p>

        <div className="bs-example">
          <ButtonToolbar>
            <OverlayTrigger trigger="click" placement="bottom" overlay={<Popover id="pp1" title="Popover bottom"><strong>Holy guacamole!</strong> Check this info.</Popover>}>
              <Button bsStyle="default">Click</Button>
            </OverlayTrigger>
            <OverlayTrigger trigger="hover" placement="bottom" overlay={<Popover id="pp2" title="Popover bottom"><strong>Holy guacamole!</strong> Check this info.</Popover>}>
              <Button bsStyle="default">Hover</Button>
            </OverlayTrigger>
            <OverlayTrigger trigger="focus" placement="bottom" overlay={<Popover id="pp3" title="Popover bottom"><strong>Holy guacamole!</strong> Check this info.</Popover>}>
              <Button bsStyle="default">Focus</Button>
            </OverlayTrigger>
            <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={<Popover id="pp4" title="Popover bottom"><strong>Holy guacamole!</strong> Check this info.</Popover>}>
              <Button bsStyle="default">Click + rootClose</Button>
            </OverlayTrigger>
          </ButtonToolbar>
        </div>

        <Highlight className="html">
          {' \
render() { \n \
  return ( \n \
  <ButtonToolbar> \n \
    <OverlayTrigger trigger="click" placement="bottom" overlay={<Popover title="Popover bottom"><strong>Holy guacamole!</strong> Check this info.</Popover>}> \n \
      <Button bsStyle="default">Click</Button> \n \
    </OverlayTrigger> \n \
    <OverlayTrigger trigger="hover" placement="bottom" overlay={<Popover title="Popover bottom"><strong>Holy guacamole!</strong> Check this info.</Popover>}> \n \
      <Button bsStyle="default">Hover</Button> \n \
    </OverlayTrigger> \n \
    <OverlayTrigger trigger="focus" placement="bottom" overlay={<Popover title="Popover bottom"><strong>Holy guacamole!</strong> Check this info.</Popover>}> \n \
      <Button bsStyle="default">Focus</Button> \n \
    </OverlayTrigger> \n \
    <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={<Popover title="Popover bottom"><strong>Holy guacamole!</strong> Check this info.</Popover>}> \n \
      <Button bsStyle="default">Click + rootClose</Button> \n \
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
