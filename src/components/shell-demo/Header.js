// Dependencies.
import React from 'react';
import {Link} from 'react-router';

// UI Components.
import {Navbar, NavBrand, CollapsibleNav, Button} from 'react-bootstrap';
import Icon from 'react-fa';

// Images.
import Logo from '../../images/smiths-group-logo.svg';


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
            <Button bsStyle="primary" bsSize="xs" onClick={this.handleClick.bind(this)}>
              <Icon name="bars" />
            </Button>
            <img src={Logo} className="brand-logo" alt="ProcessMAP" onClick={this.handleClick.bind(this)} />
          </NavBrand>

          <CollapsibleNav eventKey={0}>
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/document-management">Home</Link></li>
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
