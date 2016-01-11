// Dependencies.
import React from 'react';
import { connect } from 'react-redux';

import {changeFolder } from '../../../../../redux/actions';

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
    dispatch(changeFolder(data.path));
  }

  // Render method.
  render() {
    const folderData = this.props.data;
    const folderName = folderData.name;

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
            11/8/2015
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
