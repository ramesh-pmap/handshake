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

        <h2>Contextual alternatives</h2>

        <p>Like other components, easily make a panel more meaningful to a particular context by adding a <code>bsStyle</code> prop.</p>

        <div className="bs-example">
          <Panel header={<div>Default Panel</div>}>
            Panel content
          </Panel>

          <Panel header={<div>Primary Panel</div>} bsStyle="primary">
            Panel content
          </Panel>

          <Panel header={<div>Info Panel</div>} bsStyle="info">
            Panel content
          </Panel>

          <Panel header={<div>Success Panel</div>} bsStyle="success">
            Panel content
          </Panel>

          <Panel header={<div>Warning Panel</div>} bsStyle="warning">
            Panel content
          </Panel>

          <Panel header={<div>Danger Panel</div>} bsStyle="danger">
            Panel content
          </Panel>
        </div>

        <Highlight className="html">
          {' \
<Panel header={<div>Default Panel</div>}> \n \
  Panel content \n \
</Panel> \n \
 \n \
<Panel header={<div>Primary Panel</div>} bsStyle="primary"> \n \
  Panel content \n \
</Panel> \n \
 \n \
<Panel header={<div>Default Panel</div>} bsStyle="info"> \n \
  Panel content \n Info</Panel> \n \
 \n \
<Panel header={<div>Success Panel</div>} bsStyle="success"> \n \
  Panel content \n \
</Panel> \n \
 \n \
<Panel header={<div>Warning Panel</div>} bsStyle="warning"> \n \
  Panel content \n \
</Panel> \n \
 \n \
<Panel header={<div>Danger Panel</div>} bsStyle="danger"> \n \
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
