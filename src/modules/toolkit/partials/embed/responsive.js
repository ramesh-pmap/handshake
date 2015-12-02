// Dependencies.
import React from 'react';

// Core components.
// import {} from 'react-bootstrap';

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

        <h2>Title</h2>

        <p>Text <code>CODE</code> and <code>&lt;COMPONENT /&gt;</code> more text.</p>

        <div className="bs-example">
        </div>

        <Highlight className="html">
          {' \
render() { \n \
  return ( \n \
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
