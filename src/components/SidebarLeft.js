// Dependencies.
import React from 'react';

// UI components
import Icon from 'react-fa'; // Example: <Icon name="home" />
import {Nav, NavItem} from 'react-bootstrap';

// Images.
// import Logo from '../images/mars-logo.png';


// Define class.
class Sidebar extends React.Component {

  // Render method.
  render() {
    // const title = this.props.title;

    return (

      <Nav id="sidebar-wrapper" ulClassName="sidebar-nav">

        {/*
        <NavItem href="#/toolkit" className="sidebar-brand text-center">
          <img src={Logo} className="logo" />
          {title}
        </NavItem>
        */}

        <NavItem href="http://moon.pmapconnect.com">
          <Icon name="moon-o" className="fa-fw" />
          moon
        </NavItem>

        <NavItem href="">
          <Icon name="code" className="fa-fw" />
          React-Bootstrap
        </NavItem>

        <NavItem href="">
          <Icon name="css3" className="fa-fw" />
          Custom Components
        </NavItem>

        <NavItem href="">
          <Icon name="hand-spock-o" className="fa-fw" />
          Restful API
        </NavItem>

      </Nav>

    );
  }
}

// Prop types.
Sidebar.propTypes = {
  title: React.PropTypes.string,
  toggle: React.PropTypes.string
};

// Export.
export default Sidebar;
