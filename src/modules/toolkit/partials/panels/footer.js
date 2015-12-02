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

        <h2>Panel with footer</h2>

        <p>Pass buttons or secondary text in the <code>footer</code> prop. Note that panel footers do not inherit colors and borders when using contextual variations as they are not meant to be in the foreground.</p>

        <div className="bs-example">
          <Panel header={<div>Panel Title</div>} footer="Panel footer">
            Panel content
          </Panel>
        </div>

        <Highlight className="html">
          {' \
<Panel header={<div>Panel Title</div>} footer="Panel footer"> \n \
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
