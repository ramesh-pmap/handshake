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
import PDF from '../../../components/PDF';

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

        <PDF file="./static/pdf-sample.pdf" name="Sample Document Preview" page={1} />

        <Avatar
          name="Marcelo Paiva"
          // icon="user"
          // src="/static/images/a3.jpg"
        />
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

        <Mars title="Home" message="Message goes here" />
      </Main>
    );
  }
}


// Export.
export default Page;
