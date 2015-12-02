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

        <h2>Stacked</h2>

        <p>Nest <code>&lt;ProgressBar /&gt;</code> s to stack them.</p>

        <div className="bs-example">
          <ProgressBar>
            <ProgressBar striped bsStyle="success" now={35} key={1} />
            <ProgressBar bsStyle="warning" now={20} key={2} />
            <ProgressBar active bsStyle="danger" now={10} key={3} />
          </ProgressBar>
        </div>

        <Highlight className="html">
          {' \
render() { \n \
  return ( \n \
    <ProgressBar> \n \
      <ProgressBar striped bsStyle="success" now={35} key={1} /> \n \
      <ProgressBar bsStyle="warning" now={20} key={2} /> \n \
      <ProgressBar active bsStyle="danger" now={10} key={3} /> \n \
    </ProgressBar> \n \
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
