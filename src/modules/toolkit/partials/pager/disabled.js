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

        <h2>Disabled</h2>

        <p>Set the <code>disabled</code> prop to <code>true</code> to disable the link.</p>

        <div className="bs-example">
          <Pager>
            <PageItem previous href="#">&larr; Previous Page</PageItem>
            <PageItem disabled next href="#">Next Page &rarr;</PageItem>
          </Pager>
        </div>

        <Highlight className="html">
          {' \
render() { \n \
  return ( \n \
    <Pager> \n \
      <PageItem previous href="#">&larr; Previous Page</PageItem> \n \
      <PageItem disabled next href="#">Next Page &rarr;</PageItem> \n \
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
