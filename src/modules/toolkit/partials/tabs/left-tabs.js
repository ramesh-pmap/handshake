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

        <h2>Left tabs</h2>

        <p>Set <code>position</code> to <code>"left"</code>. Optionally, <code>tabWidth</code> can be passed the number of columns for the tabs.</p>

        <div className="bs-example">
          <Tabs defaultActiveKey={2} position="left" tabWidth={3}>
            <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
            <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
            <Tab eventKey={3} title="Tab 3" disabled>Tab 3 content</Tab>
          </Tabs>
        </div>

        <Highlight className="html">
          {' \
render() { \n \
  return ( \n \
<Tabs defaultActiveKey={2} position="left" tabWidth={3}> \n \
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
