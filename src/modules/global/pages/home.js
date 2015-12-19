// Dependencies.
import React from 'react';

// Utility methods.
import utils from '../../../utils';

// Layout components.
import Main from '../../../layouts/main';

// Misc components.
import Mars from '../../../components/Mars';


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
        <Mars title="Home" />
      </Main>
    );
  }
}


// Export.
export default Page;
