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

    this.state = {
      activeKey: 1
    };
  }

  handleSelect(activeKey) {
    this.setState({ activeKey });
  }

  // Render method.
  render() {
    return (
      <div className="doc-section">

        <h2>Controlled PanelGroups</h2>

        <p><code>PanelGroup</code>s can be controlled by a parent component. The <code>activeKey</code> prop dictates which panel is open.</p>

        <div className="bs-example">
          <PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect.bind(this)} accordion>
            <Panel header="Panel 1" eventKey="1">Panel 1 content</Panel>
            <Panel header="Panel 2" eventKey="2">Panel 2 content</Panel>
          </PanelGroup>
        </div>

        <Highlight className="html">
          {' \
<PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect.bind(this)} accordion> \n \
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
