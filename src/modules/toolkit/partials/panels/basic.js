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

        <h2>Basic example</h2>

        <p>By default, all the <code>&lt;Panel /&gt;</code> does is apply some basic border and padding to contain some content.</p>

        <p>You can pass on any additional properties you need, e.g. a custom <code>onClick</code> handler, as it is shown in the example code. They all will apply to the wrapper <code>div</code> element.</p>

        <div className="bs-example">
          <Panel>
            Basic panel example
          </Panel>
        </div>

        <Highlight className="html">
          {' \
<Panel> \n \
  Basic panel example \n \
</Panel> \
          '}
        </Highlight>

      </div>
    );
  }
}

// Export.
export default Partial;
