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

        <h2>Animated</h2>

        <p>Add <code>active</code> prop to animate the stripes right to left. Not available in IE9 and below.</p>

        <div className="bs-example">
          <ProgressBar active now={45} />
        </div>

        <Highlight className="html">
          {' \
render() { \n \
  return ( \n \
    <ProgressBar active now={45} /> \n \
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
