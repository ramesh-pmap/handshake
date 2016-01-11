// Dependencies.
import React from 'react';
import { connect } from 'react-redux';

// Core components.
import {Row, Col, Button, ListGroupItem} from 'react-bootstrap';
import Icon from 'react-fa';

// Define class.
class FileManagerRowFile extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);
  }

  // Render method.
  render() {
    const fileData = this.props.data;
    const fileName = fileData.name;
    const fileType = fileData.type;

    return (
      <ListGroupItem>
        <Row>
          <Col sm={6}>
            <Button href="#/" bsStyle="link" bsSize="xs">
              <Icon name={`file-${fileType}-o`} className="fa-fw fa-lg text-muted" />
              &nbsp;
              {fileName}
            </Button>
          </Col>
          <Col sm={1} className="text-center text-left-xs">
            <span className="visible-xs-inline">Version: </span>
            <Button href="#" bsStyle="link" bsSize="xs">2</Button>
          </Col>
          <Col sm={2} className="text-center text-left-xs">
            <span className="visible-xs-inline">Date Modified: </span>
            11/8/2015
          </Col>
          <Col sm={3} className="text-center text-left-xs">
            (Status)
          </Col>
        </Row>
      </ListGroupItem>
    );
  }
}

// Validation.
FileManagerRowFile.propTypes = {
  data: React.PropTypes.object
};


// Export.
export default connect()(FileManagerRowFile);
