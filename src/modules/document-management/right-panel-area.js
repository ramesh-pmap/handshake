// Dependencies.
import React from 'react';
import { connect } from 'react-redux';
import { ACTIVITY, DETAIL, DETAILFORM } from '../../redux/constants';

// Components.
import DocumentActivityList from './components/RightPanelArea/ActivityList';
import DocumentDetail from './components/RightPanelArea/Detail';
import DocumentDetailForm from './components/RightPanelArea/DetailForm';

// Define class.
class RightPanelArea extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);
  }

  // Render method.
  render() {
    const { state } = this.props;

    // Right Panel
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
      <div>
        {rightPanelArea}
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
