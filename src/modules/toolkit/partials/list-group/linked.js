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

  handleClick() {
    alert('You clicked the third ListGroupItem');
  }

  // Render method.
  render() {
    return (
      <div className="doc-section">

        <h2>Linked</h2>

        <p>Set the <code>href</code> or <code>onClick</code> prop on <code>ListGroupItem</code>, to create a linked or clickable element.</p>

        <div className="bs-example">
          <ListGroup>
            <ListGroupItem href="#link1">Link 1</ListGroupItem>
            <ListGroupItem href="#link2">Link 2</ListGroupItem>
            <ListGroupItem onClick={this.handleClick}>
              Trigger an alert
            </ListGroupItem>
          </ListGroup>
        </div>

        <Highlight className="html">
          {' \
handleClick() { \n \
  alert("You clicked the third ListGroupItem"); \n \
} \n \
render() { \n \
  return ( \n \
<ListGroup> \n \
  <ListGroupItem href="#link1">Link 1</ListGroupItem> \n \
  <ListGroupItem href="#link2">Link 2</ListGroupItem> \n \
  <ListGroupItem onClick={this.handleClick}> \n \
    Trigger an alert \n \
  </ListGroupItem> \n \
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
