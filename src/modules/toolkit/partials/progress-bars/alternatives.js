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

        <h2>Contextual alternatives</h2>

        <p>Progress bars use some of the same button and alert classes for consistent styles.</p>

        <div className="bs-example">
          <ProgressBar bsStyle="success" now={40} />
          <ProgressBar bsStyle="info" now={20} />
          <ProgressBar bsStyle="warning" now={60} />
          <ProgressBar bsStyle="danger" now={80} />
        </div>

        <Highlight className="html">
          {' \
render() { \n \
  return ( \n \
    <div> \n \
      <ProgressBar bsStyle="success" now={40} /> \n \
      <ProgressBar bsStyle="info" now={20} /> \n \
      <ProgressBar bsStyle="warning" now={60} /> \n \
      <ProgressBar bsStyle="danger" now={80} /> \n \
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
