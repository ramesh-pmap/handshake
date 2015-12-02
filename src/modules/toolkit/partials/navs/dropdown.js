// Dependencies.
import React from 'react';

// Core components.
import {Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

// Syntax Highlighter.
import Highlight from 'react-highlight';


// Define class.
class Partial extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);
  }

  // handleSelect(e, selectedKey) {
  //   e.preventDefault();
 //   alert('selected ' + selectedKey);
  // }

  // Render method.
  render() {
    return (
      <div className="doc-section">

        <h2>Dropdown</h2>

        <p>Add dropdowns using the <code>NavDropdown</code> component.</p>

        <div className="bs-example">
          <Nav bsStyle="tabs" activeKey={1} onSelect={this.handleSelect}>
            <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
            <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
            <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
            <NavDropdown eventKey={4} title="Dropdown" id="nav-dropdown">
              <MenuItem eventKey="4.1">Action</MenuItem>
              <MenuItem eventKey="4.2">Another action</MenuItem>
              <MenuItem eventKey="4.3">Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="4.4">Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </div>

        <Highlight className="html">
          {' \
handleSelect(e, selectedKey) { \n \
  e.preventDefault(); \n \
  alert(\'selected \' + selectedKey); \n \
} \n \
\n \
\n \
render() { \n \
  return ( \n \
    <Nav bsStyle="tabs" activeKey={1} onSelect={this.handleSelect}> \n \
      <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem> \n \
      <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem> \n \
      <NavItem eventKey={3} disabled>NavItem 3 content</NavItem> \n \
      <NavDropdown eventKey={4} title="Dropdown" id="nav-dropdown"> \n \
        <MenuItem eventKey="4.1">Action</MenuItem> \n \
        <MenuItem eventKey="4.2">Another action</MenuItem> \n \
        <MenuItem eventKey="4.3">Something else here</MenuItem> \n \
        <MenuItem divider /> \n \
        <MenuItem eventKey="4.4">Separated link</MenuItem> \n \
      </NavDropdown> \n \
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
