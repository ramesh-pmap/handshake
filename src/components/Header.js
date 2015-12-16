// Dependencies.
import React from 'react';
import {Link} from 'react-router';

// UI Components.
import {Navbar, NavBrand, CollapsibleNav, Button} from 'react-bootstrap';
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
    this.props.onUserToggle();
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
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/toolkit">Toolkit</Link></li>
              <li><Link to="/data">Data Sample</Link></li>
              <li><Link to="/icons">Icons</Link></li>
              <li><Link to="/document-management">Document Mgt</Link></li>
            </ul>
          </CollapsibleNav>

        </Navbar>
      </header>
    );
  }

}

// Validation.
Header.propTypes = {
  onUserToggle: React.PropTypes.func
};

// Export.
export default Header;
