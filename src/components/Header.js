// Dependencies.
import React from 'react';

// Utility methods.
import utils from '../utils';

// UI Components.
import {Navbar, NavBrand, Nav, NavItem, CollapsibleNav, Button} from 'react-bootstrap';
import Icon from 'react-fa';

// Images.
import Logo from '../images/processmap-logo.png';


// Define class.
class Header extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);
  }

  // Toggle SidebarLeft.
  handleClick() {
    utils.toggleClass(document.getElementById('shellWrapper'), 'toggled');
  }

  // Render method.
  render() {
    return (
      <header>
        <Navbar fluid fixedTop toggleNavKey={0}>

          <NavBrand>
            <Button bsStyle="info" bsSize="xs" onClick={this.handleClick.bind(this)}>
              <Icon name="bars" />
            </Button>
            <img src={Logo} className="brand-logo" alt="ProcessMAP" />
          </NavBrand>

          <CollapsibleNav eventKey={0}>
            <Nav navbar right>
              <NavItem active={false} href="/">Home</NavItem>
              <NavItem active={false} href="/toolkit">Toolkit</NavItem>
              <NavItem active={false} href="/data">Data Sample</NavItem>
            </Nav>
          </CollapsibleNav>

        </Navbar>
      </header>
    );
  }

}

// Export.
export default Header;
