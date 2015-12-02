// Dependencies.
import React from 'react';

// Core components.
import {Label} from 'react-bootstrap';

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

        <h2>Available variations</h2>

        <p>Add any of the below mentioned modifier classes to change the appearance of a label.</p>

        <div className="bs-example">
          <Label bsStyle="default">Default</Label>&nbsp;
          <Label bsStyle="primary">Primary</Label>&nbsp;
          <Label bsStyle="success">Success</Label>&nbsp;
          <Label bsStyle="info">Info</Label>&nbsp;
          <Label bsStyle="warning">Warning</Label>&nbsp;
          <Label bsStyle="danger">Danger</Label>
        </div>

        <Highlight className="html">
          {' \
render() { \n \
  return ( \n \
    <div> \n \
      <Label bsStyle="default">Default</Label>&nbsp; \n \
      <Label bsStyle="primary">Primary</Label>&nbsp; \n \
      <Label bsStyle="success">Success</Label>&nbsp; \n \
      <Label bsStyle="info">Info</Label>&nbsp; \n \
      <Label bsStyle="warning">Warning</Label>&nbsp; \n \
      <Label bsStyle="danger">Danger</Label> \n \
    </div> \n \
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
