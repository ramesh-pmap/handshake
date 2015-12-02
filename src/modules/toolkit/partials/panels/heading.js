// Dependencies.
import React from 'react';

// Core components.
import {Panel} from 'react-bootstrap';

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

        <h2>Panel with heading</h2>

        <p>Easily add a heading container to your panel with the <code>header</code> prop.</p>

        <div className="bs-example">
          <Panel header="Panel heading without title">
            Panel content
          </Panel>
          <Panel header={<div>Panel Title</div>}>
            Panel content
          </Panel>
        </div>

        <Highlight className="html">
          {' \
<Panel header="Panel heading without title"> \n \
  Panel content \n \
</Panel> \n \
 \n \
<Panel header={<div>Panel Title</div>}> \n \
  Panel content \n \
</Panel> \
          '}
        </Highlight>

      </div>
    );
  }
}

// Export.
export default Partial;
