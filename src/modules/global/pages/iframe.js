// Dependencies.
import React from 'react';

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
    // const url = 'http://productfacelift.pmapconnect.com/Home.aspx';
    const url = 'http://productfacelift.pmapconnect.com/LandingPage/MainLandingPage.aspx';

    return (
      <Main>
        <Iframe url={url} />
      </Main>
    );
  }
}


// Export.
export default Page;
