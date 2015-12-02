// Dependencies.
import React from 'react';

// Core components.
import {Panel, ListGroup, ListGroupItem} from 'react-bootstrap';

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

        <h2>With tables and list groups</h2>

        <p>Add the <code>fill</code> prop to <code>&lt;Table /&gt;</code> or <code>&lt;ListGroup /&gt;</code> elements to make them fill the panel.</p>

        <div className="bs-example">
          <Panel header={<div>Panel Title</div>}>
            Some default panel content here.
            <ListGroup fill>
              <ListGroupItem>Item 1</ListGroupItem>
              <ListGroupItem>Item 2</ListGroupItem>
              <ListGroupItem>&hellip;</ListGroupItem>
            </ListGroup>
            Some more panel content here.
          </Panel>
        </div>

        <Highlight className="html">
          {' \
<Panel header={<div>Panel Title</div>}> \n \
  Some default panel content here. \n \
  <ListGroup fill> \n \
    <ListGroupItem>Item 1</ListGroupItem> \n \
    <ListGroupItem>Item 2</ListGroupItem> \n \
    <ListGroupItem>&hellip;</ListGroupItem> \n \
  </ListGroup> \n \
  Some more panel content here. \n \
</Panel> \
          '}
        </Highlight>

      </div>
    );
  }
}

// Export.
export default Partial;
