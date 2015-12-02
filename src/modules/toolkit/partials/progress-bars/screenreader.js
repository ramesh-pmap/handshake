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

        <h2>Screenreader only label</h2>

        <p>Add a <code>srOnly</code> prop to hide the label visually.</p>

        <div className="bs-example">
          <ProgressBar now={60} label="%(percent)s%" srOnly />
        </div>

        <Highlight className="html">
          {' \
render() { \n \
  return ( \n \
    <ProgressBar now={60} label="%(percent)s%" srOnly /> \n \
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
