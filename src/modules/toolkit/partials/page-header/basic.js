// Dependencies.
import React from 'react';

// Core components.
import {PageHeader} from 'react-bootstrap';

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

        <p>A simple shell for an <code>h1</code> to appropriately space out and segment sections of content on a page. It can utilize the <code>h1’s</code> default <code>small</code> element, as well as most other components (with additional styles)..</p>

        <div className="bs-example">
          <PageHeader>
            Example page header
            <small>Subtext for header</small>
          </PageHeader>
        </div>

        <Highlight className="html">
          {' \
render() { \n \
  return ( \n \
    <PageHeader> \n \
      Example page header \n \
      <small>Subtext for header</small> \n \
    </PageHeader> \n \
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
