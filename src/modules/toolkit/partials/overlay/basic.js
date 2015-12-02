// Dependencies.
import React from 'react';
import ReactDOM from 'react-dom';

// Core components.
import {Button, Overlay, Tooltip} from 'react-bootstrap';

// Syntax Highlighter.
import Highlight from 'react-highlight';


// Define class.
class Partial extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);
    this.state = { show: true };
  }

  toggle() {
    this.setState({ show: !this.state.show });
  }

  // Render method.
  render() {
    const tooltip = <Tooltip id="tp1">Tooltip overload!</Tooltip>;

    const sharedProps = {
      show: this.state.show,
      container: this,
      target: () => ReactDOM.findDOMNode(this.refs.target)
    };

    return (
      <div className="doc-section">

        <h2>Overlay</h2>

        <p>
          The <code>OverlayTrigger</code> component is great for most use cases, but as a higher level abstraction it can lack the flexibility needed
          to build more nuanced or custom behaviors into your Overlay components. For these cases it can be helpful to forgo the trigger and use
          the <code>Overlay</code> component directly.
        </p>

        <div className="bs-example">
          <div style={{ height: 100, paddingLeft: 150, position: 'relative' }}>
            <Button ref="target" onClick={this.toggle.bind(this)}>
              Click me!
            </Button>

            <Overlay {...sharedProps} placement="left">
              { tooltip }
            </Overlay>
            <Overlay {...sharedProps} placement="top">
              { tooltip }
            </Overlay>
            <Overlay {...sharedProps} placement="right">
              { tooltip }
            </Overlay>
            <Overlay {...sharedProps} placement="bottom">
              { tooltip }
            </Overlay>
          </div>
        </div>

        <Highlight className="html">
          {' \
constructor(props) { \n \
    // Pass `props` into scope. \n \
    super(props); \n \
    this.state = { show: true }; \n \
  } \n \
 \n \
  toggle() { \n \
    this.setState({ show: !this.state.show }); \n \
  } \n \
render() { \n \
    const tooltip = <Tooltip id="tp1">Tooltip overload!</Tooltip>; \n \
 \n \
    const sharedProps = { \n \
      show: this.state.show, \n \
      container: this, \n \
      target: () => ReactDOM.findDOMNode(this.refs.target) \n \
    }; \n \
 \n \
    return ( \n \
          <div style={{ height: 100, paddingLeft: 150, position: "relative" }}> \n \
            <Button ref="target" onClick={this.toggle.bind(this)}> \n \
              Click me! \n \
            </Button> \n \
 \n \
            <Overlay {...sharedProps} placement="left"> \n \
              { tooltip } \n \
            </Overlay> \n \
            <Overlay {...sharedProps} placement="top"> \n \
              { tooltip } \n \
            </Overlay> \n \
            <Overlay {...sharedProps} placement="right"> \n \
              { tooltip } \n \
            </Overlay> \n \
            <Overlay {...sharedProps} placement="bottom"> \n \
              { tooltip } \n \
            </Overlay> \n \
          </div> \n \
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
