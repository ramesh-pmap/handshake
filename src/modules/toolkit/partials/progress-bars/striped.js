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

        <h2>Striped</h2>

        <p>Uses a gradient to create a striped effect. Not available in IE8.</p>

        <div className="bs-example">
          <ProgressBar striped bsStyle="success" now={40} />
          <ProgressBar striped bsStyle="info" now={20} />
          <ProgressBar striped bsStyle="warning" now={60} />
          <ProgressBar striped bsStyle="danger" now={80} />
        </div>

        <Highlight className="html">
          {' \
render() { \n \
  return ( \n \
    <div> \n \
      <ProgressBar striped bsStyle="success" now={40} /> \n \
      <ProgressBar striped bsStyle="info" now={20} /> \n \
      <ProgressBar striped bsStyle="warning" now={60} /> \n \
      <ProgressBar striped bsStyle="danger" now={80} /> \n \
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
