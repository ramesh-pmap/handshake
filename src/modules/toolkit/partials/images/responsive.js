// Dependencies.
import React from 'react';

// Core components.
import {Image} from 'react-bootstrap';

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

        <h2>Responsive</h2>

        <p>Use the <code>responsive</code> to scale image nicely to the parent element.</p>

        <div className="bs-example">
          <Image src="http://placehold.it/800x200" responsive />
        </div>

        <Highlight className="html">
          {' \
render() { \n \
  return ( \n \
    <Image src="http://placehold.it/180x180" responsive /> \n \
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
