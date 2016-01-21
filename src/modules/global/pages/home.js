// Dependencies.
import React from 'react';

// Utility methods.
import utils from '../../../utils';

// Layout components.
import Main from '../../../layouts/main';

// Misc components.
import Mars from '../../../components/Mars';
import Avatar from '../../../components/Avatar';
import Card from '../../../components/Card';
// import ChangeRequest from '../../components/RightPanelArea/ChangeRequestFromViewer.js';

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
        <Avatar />
        <Card
          title="Hello World"
          subtitle="subtitle"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac vulputate quam, in faucibus nisl."
          date="Jan 20, 2016"
          status="Draft" />
        <Card
          title="Hello World"
          subtitle="subtitle"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac vulputate quam, in faucibus nisl."
          date="Jan 20, 2016"
          status="Approved" />
        <Card
          title="Hello World"
          subtitle="subtitle"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac vulputate quam, in faucibus nisl."
          date="Jan 20, 2016"
          status="Rejected" />
        <Card
          title="Hello World"
          subtitle="subtitle"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac vulputate quam, in faucibus nisl."
          date="Jan 20, 2016"
          status="Pending Approval" />
        <Card
          title="Hello World"
          subtitle="subtitle"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac vulputate quam, in faucibus nisl."
          date="Jan 20, 2016"
          status="Final" />
        <Card
          title="Hello World"
          subtitle="subtitle"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac vulputate quam, in faucibus nisl."
          date="Jan 20, 2016"
          status="Archived" />
        <Mars title="Home" message="Message goes here" />
      </Main>
    );
  }
}


// Export.
export default Page;
