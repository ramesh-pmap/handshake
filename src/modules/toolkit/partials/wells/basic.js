// Dependencies.
import React from 'react';

// Core components.
import {Well} from 'react-bootstrap';

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

        <h2>Wells</h2>

        <p>Use the well as a simple effect on an element to give it an inset effect.</p>

        <div className="bs-example">
          <Well>Look I'm in a well!</Well>
        </div>

        <Highlight className="html">
          {' \
render() { \n \
  return ( \n \
<Well>Look I\'m in a well!</Well> \n \
  )\n \
} \
          '}
        </Highlight>

      </div>
    );
  }
}

// Export.
export default Partial;
