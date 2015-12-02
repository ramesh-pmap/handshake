// Dependencies.
import React from 'react';
import ReactDOM from 'react-dom';

// Core components.
import {Button, Overlay} from 'react-bootstrap';

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
    const style = {
      position: 'absolute',
      backgroundColor: '#EEE',
      boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
      border: '1px solid #CCC',
      borderRadius: 3,
      marginLeft: -5,
      marginTop: 5,
      padding: 10
    };
    return (
      <div className="doc-section">

        <h2>Use Overlay instead of Tooltip and Popover</h2>

        <p>
          You don"t need to use the provided <code>Tooltip</code> or <code>Popover</code> components. Creating custom overlays
          is as easy as wrapping some markup in an <code>Overlay</code> component
        </p>

        <div className="bs-example">
          <div style={{ height: 100, position: 'relative' }}>
            <Button ref="target" onClick={this.toggle.bind(this)}>
              I am an Overlay target
            </Button>

            <Overlay
              show={this.state.show}
              onHide={() => this.setState({ show: false })}
              placement="right"
              container={this}
              target={() => ReactDOM.findDOMNode(this.refs.target)}
            >
              <div style={style}>
                <strong>Holy guacamole!</strong> Check this info.
              </div>
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
    const style = { \n \
      position: "absolute", \n \
      backgroundColor: "#EEE", \n \
      boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)", \n \
      border: "1px solid #CCC", \n \
      borderRadius: 3, \n \
      marginLeft: -5, \n \
      marginTop: 5, \n \
      padding: 10 \n \
    }; \n \
 \n \
    return ( \n \
      <div style={{ height: 100, position: "relative" }}> \n \
        <Button ref="target" onClick={this.toggle}> \n \
          I am an Overlay target \n \
        </Button> \n \
 \n \
        <Overlay \n \
          show={this.state.show} \n \
          onHide={() => this.setState({ show: false })} \n \
          placement="right" \n \
          container={this} \n \
          target={() => ReactDOM.findDOMNode(this.refs.target)} \n \
        > \n \
          <div style={style}> \n \
            <strong>Holy guacamole!</strong> Check this info. \n \
          </div> \n \
        </Overlay> \n \
      </div> \n \
    ); \n \
  } \n \
} \
          '}
        </Highlight>

      </div>
    );
  }
}

// Export.
export default Partial;
