// Dependencies.
import React from 'react';
import { connect } from 'react-redux';
import { ACTIVITY, DETAIL, DETAILFORM } from '../../redux/constants';

import Icon from 'react-fa';

// Components.
import DocumentActivityList from './components/RightPanelArea/ActivityList';
import DocumentDetail from './components/RightPanelArea/Detail';
import DocumentDetailForm from './components/RightPanelArea/DetailForm';

// Utility methods.
// import utils from '../../utils';

// Define class.
class RightPanelArea extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);
  }

  // Render method.
  render() {
    const { state } = this.props;

    // Right panel view.
    const currentView = state.rightPanelAreaView;
    let rightPanelArea;
    switch (currentView) {
    case ACTIVITY:
      rightPanelArea = <DocumentActivityList />;
      break;
    case DETAIL:
      rightPanelArea = <DocumentDetail />;
      break;
    case DETAILFORM:
      rightPanelArea = <DocumentDetailForm />;
      break;
    default:
      rightPanelArea = <DocumentActivityList />;
    }

    return (
      <div className="sidebar-wrapper">
        <div className="sidebar" style={{height: state.windowDimensions.height}}>
          {rightPanelArea}
        </div>

        <nav className="sidebar-tabs">
          <ul>
            <li>
              <a href="#">
                <Icon name="info-circle" className="fa-fw" />
              </a>
            </li>
            <li>
              <a href="#" className="active">
                <Icon name="info-circle" className="fa-fw" />
              </a>
            </li>
          </ul>
        </nav>

      </div>
    );
  }
}

// propTypes.
RightPanelArea.propTypes = {
  dispatch: React.PropTypes.func,
  state: React.PropTypes.object
};
const mapStateToProps = (state) => ({
  state
});

// Export.
export default connect(mapStateToProps)(RightPanelArea);
