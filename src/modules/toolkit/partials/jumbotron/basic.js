// Dependencies.
import React from 'react';

// Core components.
import {Jumbotron, Button} from 'react-bootstrap';

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

        <p>A lightweight, flexible component that can optionally extend the entire viewport to showcase key content on your site.</p>

        <div className="bs-example">
          <Jumbotron>
            <h1>Hello, world!</h1>
            <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <p><Button bsStyle="primary">Learn more</Button></p>
          </Jumbotron>
        </div>

        <Highlight className="html">
          {' \
render() { \n \
  return ( \n \
    <Jumbotron> \n \
      <h1>Hello, world!</h1> \n \
      <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p> \n \
      <p><Button bsStyle="primary">Learn more</Button></p> \n \
    </Jumbotron> \n \
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
