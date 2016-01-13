// Dependencies.
import React from 'react';
import { connect } from 'react-redux';

import { changeFolder } from '../../../../../redux/actions';

// Core components.
import {Row, Col, Button, ListGroupItem} from 'react-bootstrap';
import Icon from 'react-fa';

// Define class.
class FileManagerRowFolder extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);
  }

  handleClick() {
    const { dispatch, data } = this.props;
    // Redux action.
    dispatch(changeFolder(data.folder_id));
  }

  // Render method.
  render() {
    const folderData = this.props.data;
    const folderName = folderData.folder_name;
    const folderDate = folderData.folder_updated_date;

    return (
      <ListGroupItem onClick={this.handleClick.bind(this)}>
        <Row>
          <Col sm={6}>
            <Button href="#/" bsStyle="link" bsSize="xs">
              <Icon name="folder-open" className="fa-fw fa-lg text-muted" />
              &nbsp;
              {folderName}
            </Button>
          </Col>
          <Col sm={1} className="text-center hidden-xs" />
          <Col sm={2} className="text-center text-left-xs">
            <span className="visible-xs-inline">Date Modified: </span>
            {folderDate}
          </Col>
        </Row>
      </ListGroupItem>
    );
  }
}

// Validation.
FileManagerRowFolder.propTypes = {
  data: React.PropTypes.object,
  dispatch: React.PropTypes.func
};


// Export.
export default connect()(FileManagerRowFolder);
