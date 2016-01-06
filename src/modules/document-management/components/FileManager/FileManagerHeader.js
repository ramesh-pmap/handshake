// Dependencies.
import React from 'react';

// Core components.
import {Row, Col, Button} from 'react-bootstrap';
import Icon from 'react-fa';

// Define class.
class FileManagerHeader extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);
  }

  // Render method.
  render() {
    // const data = this.props.data;

    return (
      <div className="doc_mgt-list_header">

        <Row className="doc_mgt-list_actions">
          <Col sm={12}>
            <Button href="#/" bsStyle="link" bsSize="xs">
              <Icon name="folder-open" className="text-info" /> Share
            </Button>
          </Col>
        </Row>

        <Row className="doc_mgt-list_titles hidden-xs">
          <Col sm={6}>
            <b>Type &nbsp;Name</b>
          </Col>
          <Col sm={1} className="text-center">
            <b>Version</b>
          </Col>
          <Col sm={2} className="text-center">
            <b>Modified</b>
          </Col>
          <Col sm={3} className="text-center">
            <b>Status</b>
          </Col>
        </Row>

      </div>
    );
  }
}

// // Validation.
// FileManagerHeader.propTypes = {
//   data: React.PropTypes.array
// };


// Export.
export default FileManagerHeader;
