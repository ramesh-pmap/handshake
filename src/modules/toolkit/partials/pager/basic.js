// Dependencies.
import React from 'react';

// Core components.
import {Pager, PageItem} from 'react-bootstrap';

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

        <h2>Centers by default</h2>

        <p>Quick previous and next links.</p>

        <div className="bs-example">
          <Pager>
            <PageItem href="#">Previous</PageItem>
            {' '}
            <PageItem href="#">Next</PageItem>
          </Pager>
        </div>

        <Highlight className="html">
          {' \
render() { \n \
  return ( \n \
    <Pager> \n \
      <PageItem href="#">Previous</PageItem> \n \
      \{\' \'\} \n \
      <PageItem href="#">Next</PageItem> \n \
    </Pager> \n \
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
