// Dependencies.
import React from 'react';

// Core components.
import {Row, Col} from 'react-bootstrap';

// Layouts.
import Main from '../../layouts/main';

// Stylesheets.
import '../../modules/document-management/styles.scss';

// Utility methods.
import utils from '../../utils';

// Define class.
class Page extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);

    // Set page title.
    utils.title(props);

    this.state = {
      data: []
    };
  }

  // Render method.
  render() {
    return (
      <Main>
        <Row>
          <Col sm={12}>
            <h1>Upload</h1>
          </Col>
        </Row>
      </Main>
    );
  }
}


// Export.
export default Page;
