// Dependencies.
import React from 'react';
import { connect } from 'react-redux';
// import {Link} from 'react-router';
import {LinkContainer} from 'react-router-bootstrap';

// UI components
import Icon from 'react-fa'; // Example: <Icon name="home" />
import {Nav, NavItem} from 'react-bootstrap';

// Images.
// import Logo from '../images/mars-logo.png';

import { changeFrameSource } from '../redux/actions';


// Define class.
class Sidebar extends React.Component {

  handleFrameUrlChange(url) {
    const { state, dispatch } = this.props;
    console.log(url);
    switch (url) {
    case 'home':
      dispatch(changeFrameSource('http://productfacelift.pmapconnect.com/LandingPage/MainLandingPage.aspx?LocationId=8790&Location_Id=8790'));
      break;
    case 'angular':
      dispatch(changeFrameSource('http://productfacelift.pmapconnect.com/OccHealth/occupational-health-base.html?screen=employeemedicalprofile&ModuleId=45&Module_Id=45&LocationId=8790&Location_Id=8790'));
      break;
    case 'aspx':
      dispatch(changeFrameSource('http://productfacelift.pmapconnect.com/AIMS/WRAIMS/CaseHistory/Case_History_listing.asp?ModuleId=15&Module_Id=15&LocationId=8790&Location_Id=8790'));
      break;
    default:
      dispatch(changeFrameSource(state.frameUrl));
      break;
    }
  }

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

        */}

        <LinkContainer to="/">
          <NavItem onClick={this.handleFrameUrlChange.bind(this, 'angular')}>
            <Icon name="html5" className="fa-fw" />
            Angular
          </NavItem>
        </LinkContainer>

        <LinkContainer to="/">
          <NavItem onClick={this.handleFrameUrlChange.bind(this, 'aspx')}>
            <Icon name="windows" className="fa-fw" />
            ASPX
          </NavItem>
        </LinkContainer>

        <LinkContainer to="/document-management2">
          <NavItem onClick={this.handleFrameUrlChange.bind(this, 'aspx')}>
            <Icon name="windows" className="fa-fw" />
            Documnent Management
          </NavItem>
        </LinkContainer>

      </Nav>

    );
  }
}

// Validation.
Sidebar.propTypes = {
  dispatch: React.PropTypes.func,
  state: React.PropTypes.object,
  title: React.PropTypes.string,
  toggle: React.PropTypes.string
};

const mapStateToProps = (state) => ({
  state
});

// Export.
export default connect(mapStateToProps)(Sidebar);
