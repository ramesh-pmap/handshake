// Dependencies.
import React from 'react';

// Core components.
import {Input} from 'react-bootstrap';

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

        <h2>Validation</h2>

        <p>Set <code>bsStyle</code> to one of <code>success</code>, <code>warning</code> or <code>error</code>. Add <code>hasFeedback</code> to show glyphicon. Glyphicon may need additional styling if there is an add-on or no label.</p>

        <div className="bs-example">
          <form>
            <Input type="text" bsStyle="success" label="Success" hasFeedback />
            <Input type="text" bsStyle="warning" label="Warning" hasFeedback />
            <Input type="text" bsStyle="error" label="Error" hasFeedback />
          </form>
        </div>

        <Highlight className="html">
          {' \
render() { \n \
  return ( \n \
    <form> \n \
      <Input type="text" bsStyle="success" label="Success" hasFeedback /> \n \
      <Input type="text" bsStyle="warning" label="Warning" hasFeedback /> \n \
      <Input type="text" bsStyle="error" label="Error" hasFeedback /> \n \
    </form> \n \
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
