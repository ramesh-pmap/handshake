// Dependencies.
import React from 'react';
import {Link} from 'react-router';

// UI components
import Icon from 'react-fa'; // Example: <Icon name="home" />
// import {Nav, NavItem} from 'react-bootstrap';


// Define class.
class Sidebar extends React.Component {
  // Render method.
  render() {
    // const title = this.props.title;

    return (
      <nav id="sidebar-wrapper">
        <ul className="nav sidebar-nav">

          <li>
            <Link to="/document-management">
              <Icon name="files-o" className="fa-fw" />
              Document Mgt
            </Link>
          </li>

          <li>
            <Link to="/document-management">
              <Icon name="calendar" className="fa-fw" />
              Calendar
            </Link>
          </li>

        </ul>
      </nav>
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
