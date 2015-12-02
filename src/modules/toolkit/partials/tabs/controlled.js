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
    this.state = { key: 1 };
  }

  handleSelect(key) {
    alert('selected ' + key);
    this.setState({key});
  }

  // Render method.
  render() {
    return (
      <div className="doc-section">

        <h2>Controlled</h2>

        <p>Pass down the active state on render via props.</p>

        <div className="bs-example">
          <Tabs activeKey={this.state.key} onSelect={this.handleSelect.bind(this)}>
            <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
            <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
            <Tab eventKey={3} title="Tab 3" disabled>Tab 3 content</Tab>
          </Tabs>
        </div>

        <Highlight className="html">
          {' \
constructor(props) { \n \
    // Pass `props` into scope. \n \
    super(props); \n \
    this.state = { key: 1 }; \n \
  } \n \
 \n \
  handleSelect(key) { \n \
    alert("selected  + key); \n \
    this.setState({key}); \n \
  } \n \
render() { \n \
  return ( \n \
<Tabs activeKey={this.state.key} onSelect={this.handleSelect.bind(this)}> \n \
  <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab> \n \
  <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab> \n \
  <Tab eventKey={3} title="Tab 3" disabled>Tab 3 content</Tab> \n \
</Tabs>\n \
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
