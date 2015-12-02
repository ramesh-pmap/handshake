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

        <h2>Styling by color</h2>

        <p>Set the <code>bsStyle</code> prop to style the item</p>

        <div className="bs-example">
          <ListGroup>
            <ListGroupItem bsStyle="success">Success</ListGroupItem>
            <ListGroupItem bsStyle="info">Info</ListGroupItem>
            <ListGroupItem bsStyle="warning">Warning</ListGroupItem>
            <ListGroupItem bsStyle="danger">Danger</ListGroupItem>
          </ListGroup>
        </div>

        <Highlight className="html">
          {' \
render() { \n \
  return ( \n \
<ListGroup> \n \
  <ListGroupItem bsStyle="success">Success</ListGroupItem> \n \
  <ListGroupItem bsStyle="info">Info</ListGroupItem> \n \
  <ListGroupItem bsStyle="warning">Warning</ListGroupItem> \n \
  <ListGroupItem bsStyle="danger">Danger</ListGroupItem> \n \
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
