// Dependencies.
import React from 'react';

// Core components.
import {Alert} from 'react-bootstrap';

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

        <p>Basic alert styles.</p>

        <div className="bs-example">
          <Alert bsStyle="warning">
            <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
          </Alert>
        </div>

        <Highlight className="html">
          {' \
render() { \n \
  return ( \n \
    <Alert bsStyle="warning"> \n \
      <strong>Holy guacamole!</strong> Best check yo self, you\'re not looking too good. \n \
    </Alert> \n \
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
