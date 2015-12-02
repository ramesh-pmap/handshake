// Dependencies.
import React from 'react';

// Core components.
// import {Nav, Navbar, NavItem, NavDropdown, MenuItem, Panel} from 'react-bootstrap';
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

        <h2>Navbars</h2>

        <p>Navbars are responsive meta components that serve as navigation headers for your application or site.<br/> They also support all the different  Bootstrap classes as properties. Just xamelCase the css class and remove navbar from it. <br/> For example <code>navbar-fixed-top</code> becomes the property <code>fixedTop</code> The different properties are <code> fixedTop</code> ,<code> fixedBottom</code>,<code> staticTop</code>,<code> inverse</code>, and <code> fluid</code>.<br/>You can also align elements to the right by specifying the <code>pullRight</code> prop on the <code>Nav</code> , and other sub-components.</p>

        <div className="bs-example">
        </div>

        <Highlight className="html">
          {' \
            render() { \n \
            return ( \n \
                <Navbar>\n \
    <Navbar.Header>\n \
      <Navbar.Brand>\n \
        <a href="#">React-Bootstrap</a>\n \
      </Navbar.Brand>\n \
    </Navbar.Header>\n \
    <Nav>\n \
      <NavItem eventKey={1} href="#">Link</NavItem>\n \
      <NavItem eventKey={2} href="#">Link</NavItem>\n \
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">\n \
        <MenuItem eventKey={3.1}>Action</MenuItem>\n \
        <MenuItem eventKey={3.2}>Another action</MenuItem>\n \
        <MenuItem eventKey={3.3}>Something else here</MenuItem>\n \
        <MenuItem divider />\n \
        <MenuItem eventKey={3.3}>Separated link</MenuItem>\n \
      </NavDropdown>\n \
    </Nav>\n \
  </Navbar>\n \
            }\n \
            } \
          '}
        </Highlight>

        <Panel bsStyle="info" header="Additional Import Options">
          The Navbar Header, Toggle, Brand, and Collapse componenets are available as static properties the <code>&lt; Navbar /&gt;</code>component but you can also import them directly from the <code> /lib</code> directory like : <code> require ("react-bootstrap/lib/NavbarHeader")</code>.
        </Panel>
        </div>
    );
  }
}

// Export.
export default Partial;
