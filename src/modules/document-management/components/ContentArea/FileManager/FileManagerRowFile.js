// Dependencies.
import React from 'react';
import { connect } from 'react-redux';

import { selectFile } from '../../../../../redux/actions';

// Core components.
import {Row, Col, Button, ListGroupItem} from 'react-bootstrap';
import Icon from 'react-fa';

// Define class.
class FileManagerRowFile extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);
  }

  clickListGroupItemHandler(fileId, e) {
    const { dispatch } = this.props;
    e.preventDefault();
    // Redux action.
    dispatch(selectFile(fileId));
  }

  clickButtonHandler(e) {
    e.preventDefault();
    // alert('file link clicked');
  }

  // Render method.
  render() {
    const fileData = this.props.data;

    const fileId = fileData.id;
    const fileName = fileData.name;
    const fileType = fileData.type;
    const fileVersion = fileData.doc_version;
    const fileModifiedDate = fileData.doc_modified_date;
    const fileStatus = fileData.doc_status_name;

    return (
      <ListGroupItem onClick={this.clickListGroupItemHandler.bind(this, fileId)}>
        <Row>
          <Col sm={6}>
            <Button href="#/" bsStyle="link" bsSize="xs" onClick={this.clickButtonHandler.bind(this)}>
              <Icon name={`file-${fileType}-o`} className="fa-fw fa-lg text-muted" />
              &nbsp;
              {fileName}
            </Button>
          </Col>
          <Col sm={1} className="text-center text-left-xs">
            <span className="visible-xs-inline">Version: </span>
            <Button href="#" bsStyle="link" bsSize="xs">{fileVersion}</Button>
          </Col>
          <Col sm={2} className="text-center text-left-xs">
            <span className="visible-xs-inline">Date Modified: </span>
            {fileModifiedDate}
          </Col>
          <Col sm={3} className="text-center text-left-xs">
            {fileStatus}
          </Col>
        </Row>
      </ListGroupItem>
    );
  }
}

// Validation.
FileManagerRowFile.propTypes = {
  data: React.PropTypes.object,
  dispatch: React.PropTypes.func
};


// Export.
export default connect()(FileManagerRowFile);
