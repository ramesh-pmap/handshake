// Dependencies.
import React from 'react';

// Utility methods.
import utils from '../../../utils';

// Layout components.
import Main from '../../../layouts/main';

// Misc components.
import Login from '../../../components/Login';
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
        <Mars title="Mars title changed" message="Mars message" />
        <Login/>
      </Main>
    );
  }
}

// Export.
export default Page;
