// Dependencies.
import React from 'react';

// Core components.
import {Tooltip} from 'react-bootstrap';

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

        <h2>Tooltip</h2>

        <p>Tooltip component for a more stylish alternative to that anchor tag <code>title</code> attribute.</p>

        <div className="bs-example tooltip-static">
          <Tooltip placement="right" className="in" id="t1">
            Tooltip right
          </Tooltip>

          <Tooltip placement="top" className="in" id="t2">
            Tooltip top
          </Tooltip>

          <Tooltip placement="left" className="in" id="t3">
            Tooltip left
          </Tooltip>

          <Tooltip placement="bottom" className="in" id="t4">
            Tooltip bottom
          </Tooltip>
        </div>

        <Highlight className="html">
          {' \
<Tooltip placement="right" className="in"> \n \
  Tooltip right \n \
</Tooltip> \n \
 \n \
<Tooltip placement="top" className="in"> \n \
  Tooltip top \n \
</Tooltip> \n \
 \n \
<Tooltip placement="left" className="in"> \n \
  Tooltip left \n \
</Tooltip> \n \
 \n \
<Tooltip placement="bottom" className="in"> \n \
  Tooltip bottom \n \
</Tooltip> \
          '}
        </Highlight>

      </div>
    );
  }
}

// Export.
export default Partial;
