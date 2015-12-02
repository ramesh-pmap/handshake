// Dependencies.
import React from 'react';

// Core components.
import {ListGroup, ListGroupItem} from 'react-bootstrap';

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

        <div className="bs-example">
          <ListGroup>
            <ListGroupItem>Item 1</ListGroupItem>
            <ListGroupItem>Item 2</ListGroupItem>
            <ListGroupItem>...</ListGroupItem>
          </ListGroup>
        </div>

        <Highlight className="html">
          {' \
render() { \n \
  return ( \n \
<ListGroup> \n \
  <ListGroupItem>Item 1</ListGroupItem> \n \
  <ListGroupItem>Item 2</ListGroupItem> \n \
  <ListGroupItem>...</ListGroupItem> \n \
</ListGroup> \n \
  )\n \
} \
          '}
        </Highlight>

      </div>
    );
  }
}

// Export.
export default Partial;
