// Dependencies.
import React from 'react';

// Core components.
import {Nav, NavItem} from 'react-bootstrap';

// Syntax Highlighter.
import Highlight from 'react-highlight';


// Define class.
class Partial extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);
  }

 // handleSelect(selectedKey) {
  //  alert('selected ' + selectedKey);
  // }

  // Render method.
  render() {
    return (
      <div className="doc-section">

        <h2>Stacked</h2>

        <p>They can also be <code>stacked</code> vertically.</p>

        <div className="bs-example">
          <Nav bsStyle="pills" stacked activeKey={1} onSelect={this.handleSelect}>
            <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
            <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
            <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
          </Nav>
        </div>

        <Highlight className="html">
          {' \
handleSelect(selectedKey) { \n \
  alert(\'selected \' + selectedKey); \n \
} \n \
\n \
render() { \n \
  return ( \n \
    <Nav bsStyle="pills" stacked activeKey={1} onSelect={this.handleSelect}> \n \
      <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem> \n \
      <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem> \n \
      <NavItem eventKey={3} disabled>NavItem 3 content</NavItem> \n \
    </Nav> \n \
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
