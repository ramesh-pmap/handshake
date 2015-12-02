// Dependencies.
import React from 'react';

// Core components.
import {Popover} from 'react-bootstrap';

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

        <h2>Popovers</h2>

        <p>The Popover, offers a more robust alternative to the Tooltip for displaying overlays of content.</p>

        <div className="bs-example">
          <div style={{ height: 120 }}>
            <Popover id="pp1" placement="right" positionLeft={200} positionTop={50} title="Popover right">
              And here's some <strong>amazing</strong> content. It's very engaging. right?
            </Popover>
          </div>
        </div>

        <Highlight className="html">
          {' \
render() { \n \
  return ( \n \
<div style={{ height: 120 }}> \n \
  <Popover placement="right" positionLeft={200} positionTop={50} title="Popover right"> \n \
    And here\'s some <strong>amazing</strong> content. It\'s very engaging. right? \n \
  </Popover> \n \
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
