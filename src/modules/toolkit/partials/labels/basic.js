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

        <p>Create a <code>&lt;Label&gt; label &lt;/Label&gt;</code> to highlight information.</p>

        <div className="bs-example">
          <h1>Label <Label>New</Label></h1>
          <h2>Label <Label>New</Label></h2>
          <h3>Label <Label>New</Label></h3>
          <h4>Label <Label>New</Label></h4>
          <h5>Label <Label>New</Label></h5>
          <p>Label <Label>New</Label></p>
        </div>

        <Highlight className="html">
          {' \
render() { \n \
  return ( \n \
    <div> \n \
      <h1>Label <Label>New</Label></h1> \n \
      <h2>Label <Label>New</Label></h2> \n \
      <h3>Label <Label>New</Label></h3> \n \
      <h4>Label <Label>New</Label></h4> \n \
      <h5>Label <Label>New</Label></h5> \n \
      <p>Label <Label>New</Label></p> \n \
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
