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

        <h2>Styling by state</h2>

        <p>Set the <code>active</code> or <code>disabled</code> prop to <code>true</code> to mark or disable the item.</p>

        <div className="bs-example">
          <ListGroup>
            <ListGroupItem href="#" active>Link 1</ListGroupItem>
            <ListGroupItem href="#">Link 2</ListGroupItem>
            <ListGroupItem href="#" disabled>Link 3</ListGroupItem>
          </ListGroup>
        </div>

        <Highlight className="html">
          {' \
render() { \n \
  return ( \n \
<ListGroup> \n \
  <ListGroupItem href="#" active>Link 1</ListGroupItem> \n \
  <ListGroupItem href="#">Link 2</ListGroupItem> \n \
  <ListGroupItem href="#" disabled>Link 3</ListGroupItem> \n \
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
