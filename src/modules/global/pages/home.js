// Dependencies.
import React from 'react';

// Utility methods.
import utils from '../../../utils';

// Layout components.
import Main from '../../../layouts/main';

// Misc components.
import Mars from '../../../components/Mars';
import ChangeRequest from '../../components/RightPanelArea/ChangeRequestFromViewer.js';

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
    return (
      <Main>
      <ChangeRequest/>
        <Mars title="Home" message="Message goes here" />
      </Main>
    );
  }
}


// Export.
export default Page;
