// Dependencies.
import React from 'react';

// Core components.
import {Badge} from 'react-bootstrap';

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

        <h2>Title</h2>

        <p>Easily highlight new or unread items by adding a <code>&lt;Badge /&gt;</code> to links, Bootstrap navs, and more.</p>

        <div className="bs-example">
          <p>Badges <Badge className="badge-danger">42</Badge></p>
        </div>

        <Highlight className="html">
          {' \
render() { \n \
  return ( \n \
    <p>Badges <Badge>42</Badge></p> \n \
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
