// Dependencies.
import React from 'react';

// Core components.
import {Panel, PanelGroup} from 'react-bootstrap';

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

        <h2>Uncontrolled PanelGroups</h2>

        <p><code>PanelGroup</code>s can also be uncontrolled where they manage their own state. The <code>defaultActiveKey</code> prop dictates which panel is open when initially.</p>

        <div className="bs-example">
          <PanelGroup defaultActiveKey="2" accordion>
            <Panel header="Panel 1" eventKey="1">Panel 1 content</Panel>
            <Panel header="Panel 2" eventKey="2">Panel 2 content</Panel>
          </PanelGroup>
        </div>

        <Highlight className="html">
          {' \
<PanelGroup defaultActiveKey="2" accordion> \n \
  <Panel header="Panel 1" eventKey="1">Panel 1 content</Panel> \n \
  <Panel header="Panel 2" eventKey="2">Panel 2 content</Panel> \n \
</PanelGroup> \
          '}
        </Highlight>

      </div>
    );
  }
}

// Export.
export default Partial;
