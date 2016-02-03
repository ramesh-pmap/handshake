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
    // console.log(url);
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
        <LinkContainer to="/iframe">
          <NavItem onClick={this.handleFrameUrlChange.bind(this, 'angular')}>
            <Icon name="html5" className="fa-fw" />
            Occupational Health
          </NavItem>
        </LinkContainer>

        <LinkContainer to="/iframe">
          <NavItem onClick={this.handleFrameUrlChange.bind(this, 'aspx')}>
            <Icon name="windows" className="fa-fw" />
            Incident Management
          </NavItem>
        </LinkContainer>

        <LinkContainer to="/iframe">
        <NavItem onClick={this.handleFrameUrlChange.bind(this, 'home')}>
        <Icon name="home" className="fa-fw" />
        Home
        </NavItem>
        </LinkContainer>
        */}

        <LinkContainer to="/document-management">
          <NavItem onClick={this.handleFrameUrlChange.bind(this, 'doc-mgt')}>
            <Icon name="home" className="fa-fw" />
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
