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
  }

  // Render method.
  render() {
    return (
      <div id="shellWrapper" className="shell-wrapper doc-wrapper">
        <Sidebar title="mars" />
        <Header />
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
