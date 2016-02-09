// Dependencies.
import React from 'react';
import { connect } from 'react-redux';

// Utility methods.
import utils from '../../../utils';

// Layout components.
import Main from '../../../layouts/main';

// Misc components.
import Iframe from '../../../components/Iframe';


// Define class.
class Page extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);

    // Set page title.
    utils.title(props);
  }

  // Render method.
  render() {
    const { state } = this.props;

    // const url = 'http://productfacelift.pmapconnect.com/';

    // Angular
    // const url = 'http://productfacelift.pmapconnect.com/OccHealth/occupational-health-base.html?&ModuleId=45&Module_Id=45&LocationId=8790&Location_Id=8790#/appointmentcentral';

    // ASPX
    // const url = 'http://productfacelift.pmapconnect.com/AIMS/WRAIMS/WorkRelatedIncidentList.aspx?callerNode=List&ModuleId=15&Module_Id=15&LocationId=8790&Location_Id=8790';

    return (
      <Main>
        <Iframe url={state.ui.frameUrl} />
      </Main>
    );
  }
}

// propTypes.
Page.propTypes = {
  state: React.PropTypes.object
};
const mapStateToProps = (state) => ({
  state
});

// Export.
export default connect(mapStateToProps)(Page);
