// Dependencies.
import React from 'react';

// Core components.
import {Tabs, Tab} from 'react-bootstrap';

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

        <h2>Uncontrolled</h2>

        <p>Allow the component to control its own state.</p>

        <div className="bs-example">
        <Tabs defaultActiveKey={2}>
          <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
          <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
          <Tab eventKey={3} title="Tab 3" disabled>Tab 3 content</Tab>
        </Tabs>
        </div>

        <Highlight className="html">
          {' \
render() { \n \
  return ( \n \
<Tabs defaultActiveKey={2}> \n \
  <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab> \n \
  <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab> \n \
  <Tab eventKey={3} title="Tab 3" disabled>Tab 3 content</Tab> \n \
</Tabs> \n \
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
