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

        <h2>With header</h2>

        <p>Set the <code>header</code> prop to create a structured item, with a heading and a body area.</p>

        <div className="bs-example">
          <ListGroup>
            <ListGroupItem header="Heading 1">Some body text</ListGroupItem>
            <ListGroupItem header="Heading 2" href="#">Linked item</ListGroupItem>
            <ListGroupItem header="Heading 3" bsStyle="danger">Danger styling</ListGroupItem>
          </ListGroup>
        </div>

        <Highlight className="html">
          {' \
render() { \n \
  return ( \n \
<ListGroup> \n \
  <ListGroupItem header="Heading 1">Some body text</ListGroupItem> \n \
  <ListGroupItem header="Heading 2" href="#">Linked item</ListGroupItem> \n \
  <ListGroupItem header="Heading 3" bsStyle="danger">Danger styling</ListGroupItem> \n \
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
