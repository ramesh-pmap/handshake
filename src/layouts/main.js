import React from 'react';
import { connect } from 'react-redux';

import { toggleLeftSidebar } from '../redux/actions/ui-actions';

// Layout components.
import Header from '../components/Header';
// import Footer from '../components/Footer';
import Sidebar from '../components/SidebarLeft';

// Define class.
class Layout extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);
  }

  handleUserToggle() {
    const { state, dispatch } = this.props;
    dispatch(toggleLeftSidebar(state.ui.leftSidebarOpened));
  }

  // Render method.
  render() {
    const { state } = this.props;
    // console.log('Layout:state:', state);
    const leftSidebarOpened = state.ui.leftSidebarOpened;
    const noHeader = this.props.noHeader;
    let toggle = (leftSidebarOpened === false) ? 'shell-wrapper doc-wrapper toggled' : 'shell-wrapper doc-wrapper';

    return (
      <div id="shellWrapper" className={`${toggle}`}>
          {(() => {
            if (!noHeader) {
              return (
                <div>
                  <Sidebar title="mars" />
                  <Header onUserToggle={this.handleUserToggle.bind(this)} />
                </div>
                );
            }
          })()}

          {this.props.children}

      </div>
    );
  }
}

// Validation.
Layout.propTypes = {
  children: React.PropTypes.node,
  noHeader: React.PropTypes.bool,
  dispatch: React.PropTypes.func,
  state: React.PropTypes.object
};

const mapStateToProps = (state) => ({
  state
});

// Export.
export default connect(mapStateToProps)(Layout);
