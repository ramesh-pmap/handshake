// Dependencies.
import React from 'react';

// Core components.
// import {Nav, Navbar} from 'react-bootstrap';

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
        <h2>Responsive Navbars</h2>

        <p>To have a mobile friendly Navbar, Add a <code>Navbar.Toggle</code> to your header and wrap your Navs in a <code>Navbar.Collapse</code> component.The <code>Navbar</code> will automatically wire the toggle and collapse together! <br/><br/><br/> By setting the prop <code> defaultNavExpanded</code> the Navbar will start expanded by default. You can also finely control the collapsing behavior by using the <code> expanded</code> and <code>onToggle</code> props.</p>

        <div className="bs-example">
        </div>

        <Highlight className="html">
          {' \
render() { \n \
  return ( \n \
<Navbar inverse> \n \
    <Navbar.Header> \n \
      <Navbar.Brand> \n \
        <a href="#">React-Bootstrap</a> \n \
      </Navbar.Brand> \n \
      <Navbar.Toggle /> \n \
    </Navbar.Header> \n \
    <Navbar.Collapse> \n \
      <Nav> \n \
        <NavItem eventKey={1} href="#">Link</NavItem> \n \
        <NavItem eventKey={2} href="#">Link</NavItem> \n \
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown"> \n \
          <MenuItem eventKey={3.1}>Action</MenuItem> \n \
          <MenuItem eventKey={3.2}>Another action</MenuItem> \n \
          <MenuItem eventKey={3.3}>Something else here</MenuItem> \n \
          <MenuItem divider /> \n \
          <MenuItem eventKey={3.3}>Separated link</MenuItem> \n \
        </NavDropdown> \n \
      </Nav> \n \
      <Nav pullRight> \n \
        <NavItem eventKey={1} href="#">Link Right</NavItem> \n \
        <NavItem eventKey={2} href="#">Link Right</NavItem> \n \
      </Nav> \n \
    </Navbar.Collapse> \n \
  </Navbar> \n \
  }\n \
} \
          '}
        </Highlight>

        <h2>Forms</h2>

        <p>Use the<code>Navbar.Form</code> convenience componenet to apply proper margins and alignment to form components.</p>
        <div className="bs-example">
        </div>
        <Highlight className="html">
          {' \
render() { \n \
  return ( \n \
<Navbar>\n \
    <Navbar.Header>\n \
      <Navbar.Brand>\n \
        <a href="#">Brand</a>\n \
      </Navbar.Brand>\n \
      <Navbar.Toggle />\n \
    </Navbar.Header>\n \
    <Navbar.Collapse>\n \
      <Navbar.Form pullLeft>\n \
        <Input type="text" placeholder="Search"/>\n \
        <Button type="submit">Submit</Button>\n \
      </Navbar.Form>\n \
    </Navbar.Collapse>\n \
  </Navbar>\n \
  }\n \
} \
          '}
        </Highlight>
        <h2>Text and Non-nav Links</h2>
        <p>Loose text and links can be wraped in the convenience components <code>Navbar.Link</code> and <code>Navbar.Text</code></p>
        <div className="bs-example">
        </div>
        <Highlight className="html">
          {' \
render() { \n \
  return ( \n \
<Navbar>\n \
    <Navbar.Header>\n \
      <Navbar.Brand>\n \
        <a href="#">Brand</a>\n \
      </Navbar.Brand>\n \
      <Navbar.Toggle />\n \
    </Navbar.Header>\n \
    <Navbar.Collapse>\n \
      <Navbar.Text>\n \
        Signed in as: <Navbar.Link href="#">Mark Otto</Navbar.Link>\n \
      </Navbar.Text>\n \
      <Navbar.Text pullRight>\n \
        Have a great day!\n \
      </Navbar.Text>\n \
    </Navbar.Collapse>\n \
  </Navbar>\n \
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
