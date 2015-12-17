import React from 'react';

// Layout components.
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/SidebarLeft';

// Define class.
class Layout extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);

    this.state = {
      sidebarOpened: false
    };
  }

  handleUserToggle() {
    this.setState({sidebarOpened: !this.state.sidebarOpened});
  }

  // Render method.
  render() {
    const sidebarOpened = this.state.sidebarOpened;
    let toggle = (sidebarOpened === false) ? 'shell-wrapper doc-wrapper toggled' : 'shell-wrapper doc-wrapper';

    return (
      <div id="shellWrapper" className={`${toggle}`}>
        <Sidebar title="mars" />
        <Header onUserToggle={this.handleUserToggle.bind(this)} />
        <div className="page-content-wrapper">

          {this.props.children}

          <Footer />
        </div>
      </div>
    );
  }
}

// Validation.
Layout.propTypes = {
  children: React.PropTypes.node
};

// Export.
export default Layout;
