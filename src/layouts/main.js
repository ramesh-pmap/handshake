import React from 'react';
import { connect } from 'react-redux';

// Layout components.
import Header from '../components/Header';
// import Footer from '../components/Footer';
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
    // const { state } = this.props;
    // console.log('Layout:state:', state);
    const sidebarOpened = this.state.sidebarOpened;
    let toggle = (sidebarOpened === false) ? 'shell-wrapper doc-wrapper toggled' : 'shell-wrapper doc-wrapper';

    return (
      <div id="shellWrapper" className={`${toggle}`}>
        <Sidebar title="mars" />
        <Header onUserToggle={this.handleUserToggle.bind(this)} />
        <div className="page-content-wrapper">
          {this.props.children}
        </div>
      </div>
    );
  }
}

// Validation.
Layout.propTypes = {
  children: React.PropTypes.node,
  state: React.PropTypes.object
};

const mapStateToProps = (state) => ({
  state
});

// Export.
export default connect(mapStateToProps)(Layout);
