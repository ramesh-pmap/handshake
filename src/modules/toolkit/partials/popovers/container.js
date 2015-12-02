// Dependencies.
import React from 'react';
import ReactDOM from 'react-dom';

// Core components.
import {ButtonToolbar, Overlay, Button, Popover} from 'react-bootstrap';

// Syntax Highlighter.
import Highlight from 'react-highlight';


// Define class.
class Partial extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);
    this.state = { show: false };
  }

  // Render method.
  render() {
    return (
      <div className="doc-section">

        <h2>Popover component in container</h2>

        <div className="bs-example bs-example-popover-contained">
          <ButtonToolbar>
            <Button
              bsStyle="default"
              onClick={e => this.setState({ target: e.target, show: !this.state.show })}
            >
              Holy guacamole!
            </Button>

            <Overlay
              show={this.state.show}
              target={()=> ReactDOM.findDOMNode(this.state.target)}
              placement="bottom"
              container={this}
              containerPadding={20}
            >
              <Popover id="pop1" title="Popover bottom">
                <strong>Holy guacamole!</strong> Check this info.
              </Popover>
            </Overlay>
          </ButtonToolbar>
        </div>

        <Highlight className="html">
          {' \
  constructor(...args) { \n \
    super(...args); \n \
    this.state = { show: false }; \n \
  } \n \
  render() { \n \
    return ( \n \
      <ButtonToolbar> \n \
        <Button \n \
          bsStyle="default" \n \
          onClick={e => this.setState({ target: e.target, show: !this.state.show })} \n \
        > \n \
          Holy guacamole! \n \
        </Button> \n \
 \n \
        <Overlay \n \
          show={this.state.show} \n \
          target={()=> React.findDOMNode(this.state.target)} \n \
          placement="bottom" \n \
          container={this} \n \
          containerPadding={20} \n \
        > \n \
          <Popover title="Popover bottom"> \n \
            <strong>Holy guacamole!</strong> Check this info. \n \
          </Popover> \n \
        </Overlay> \n \
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
