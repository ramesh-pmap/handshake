// Dependencies.
import React from 'react';

// Core components.
import {ProgressBar} from 'react-bootstrap';

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

        <h2>Basic example</h2>

        <p>Default progress bar.</p>

        <div className="bs-example">
          <ProgressBar now={60} />
        </div>

        <Highlight className="html">
          {' \
render() { \n \
  return ( \n \
    <ProgressBar now={60} /> \n \
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
