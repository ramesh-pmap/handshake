// Dependencies.
import React from 'react';

// Core components.
import {Tooltip, ButtonToolbar, OverlayTrigger, Button} from 'react-bootstrap';

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
    const tooltip = (
      <Tooltip id="tp01"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
    );
    return (
      <div className="doc-section">

        <h2>With OverlayTrigger</h2>

        <p>Attach and position tooltips with <code>OverlayTrigger</code>.</p>

        <div className="bs-example tooltip-static">
          <ButtonToolbar>
            <OverlayTrigger placement="left" overlay={tooltip}>
              <Button bsStyle="default">Holy guacamole!</Button>
            </OverlayTrigger>

            <OverlayTrigger placement="top" overlay={tooltip}>
              <Button bsStyle="default">Holy guacamole!</Button>
            </OverlayTrigger>

            <OverlayTrigger placement="bottom" overlay={tooltip}>
              <Button bsStyle="default">Holy guacamole!</Button>
            </OverlayTrigger>

            <OverlayTrigger placement="right" overlay={tooltip}>
              <Button bsStyle="default">Holy guacamole!</Button>
            </OverlayTrigger>
          </ButtonToolbar>
        </div>

        <Highlight className="html">
          {' \
  render() { \n \
    const tooltip = ( \n \
      <Tooltip><strong>Holy guacamole!</strong> Check this info.</Tooltip> \n \
    ); \n \
    return ( \n \
      <div className="doc-section"> \n \
 \n \
        <h2>With OverlayTrigger</h2> \n \
 \n \
        <p>Attach and position tooltips with <code>OverlayTrigger</code>.</p> \n \
 \n \
        <div className="bs-example tooltip-static"> \n \
          <ButtonToolbar> \n \
            <OverlayTrigger placement="left" overlay={tooltip}> \n \
              <Button bsStyle="default">Holy guacamole!</Button> \n \
            </OverlayTrigger> \n \
 \n \
            <OverlayTrigger placement="top" overlay={tooltip}> \n \
              <Button bsStyle="default">Holy guacamole!</Button> \n \
            </OverlayTrigger> \n \
 \n \
            <OverlayTrigger placement="bottom" overlay={tooltip}> \n \
              <Button bsStyle="default">Holy guacamole!</Button> \n \
            </OverlayTrigger> \n \
 \n \
            <OverlayTrigger placement="right" overlay={tooltip}> \n \
              <Button bsStyle="default">Holy guacamole!</Button> \n \
            </OverlayTrigger> \n \
          </ButtonToolbar> \n \
        </div> \n \
    } '}
        </Highlight>

      </div>
    );
  }
}

// Export.
export default Partial;
