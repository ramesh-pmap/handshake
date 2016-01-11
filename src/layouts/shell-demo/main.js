import React from 'react';
import { connect } from 'react-redux';

import { updateSidePanelWidth } from '../../utils';

import { toggleLeftSidebar } from '../../redux/actions';
// Layout components.
import Header from '../../components/shell-demo/Header';
import Sidebar from '../../components/SidebarLeft';

// Define class.
class Layout extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);
  }

  handleUserToggle() {
    const { state, dispatch } = this.props;
    dispatch(toggleLeftSidebar(state.leftSidebarOpened));
    updateSidePanelWidth(!state.leftSidebarOpened);
  }

  // Render method.
  render() {
    const { state } = this.props;
    const leftSidebarOpened = state.leftSidebarOpened;
    let toggle = (leftSidebarOpened === false) ? 'shell-wrapper doc-wrapper toggled' : 'shell-wrapper doc-wrapper';

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

// propTypes.
Layout.propTypes = {
  children: React.PropTypes.node,
  dispatch: React.PropTypes.func,
  state: React.PropTypes.object
};

const mapStateToProps = (state) => ({
  state
});

// Export.
export default connect(mapStateToProps)(Layout);
