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

        <h2>With label</h2>

        <p>Add a <code>label</code> prop to show a visible percentage. For low percentages, consider adding a min-width to ensure the label's text is fully visible.</p>

        <p>The following keys are interpolated with the current values: <code>%(min)s</code>, <code>%(max)s</code>, <code>%(now)s</code>, <code>%(percent)s</code>, <code>%(bsStyle)s</code>.</p>

        <div className="bs-example">
          <ProgressBar now={60} label="%(percent)s%" />
        </div>

        <Highlight className="html">
          {' \
render() { \n \
  return ( \n \
    <ProgressBar now={60} label="%(percent)s%" /> \n \
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
