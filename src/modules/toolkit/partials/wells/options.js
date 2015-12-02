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

        <h2>Optional classes</h2>

        <p>Control padding and rounded corners with two optional modifier classes.</p>

        <div className="bs-example">
          <Well bsSize="large">Look I'm in a large well!</Well>
          <Well bsSize="small">Look I'm in a small well!</Well>
        </div>

        <Highlight className="html">
          {' \
render() { \n \
  return ( \n \
<Well bsSize="large">Look I\'m in a large well!</Well> \n \
<Well bsSize="small">Look I\'m in a small well!</Well> \n \
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
