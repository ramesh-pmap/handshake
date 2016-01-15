// Dependencies.
import React from 'react';

// Utility methods.
import utils from '../../../utils';

// Layout components.
import Main from '../../../layouts/main';

// Misc components.
import Mars from '../../../components/Mars';
import Avatar from '../../../components/Avatar';


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

        <Avatar/>
        <span>|</span>
        <Avatar status="approved" shape="circle" size="xs"/>
        <Avatar status="pending" shape="circle" size="sm"/>
        <Avatar status="pending" shape="circle" size="md"/>
        <Avatar status="pending" shape="circle" size="lg"/>
        <Avatar status="rejected" shape="circle" size="xl"/>
        <span>|</span>
        <Avatar/>

        <Mars title="Home" message="Message goes here" />
      </Main>
    );
  }
}


// Export.
export default Page;
