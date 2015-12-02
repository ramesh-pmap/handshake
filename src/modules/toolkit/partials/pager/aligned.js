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

        <h2>Aligned</h2>

        <p>Set the <code>previous</code> or <code>next</code> prop to <code>next</code>, to align left or right.</p>

        <div className="bs-example">
          <Pager>
            <PageItem previous href="#">&larr; Previous Page</PageItem>
            <PageItem next href="#">Next Page &rarr;</PageItem>
          </Pager>
        </div>

        <Highlight className="html">
          {' \
render() { \n \
  return ( \n \
    <Pager> \n \
      <PageItem previous href="#">&larr; Previous Page</PageItem> \n \
      <PageItem next href="#">Next Page &rarr;</PageItem> \n \
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
