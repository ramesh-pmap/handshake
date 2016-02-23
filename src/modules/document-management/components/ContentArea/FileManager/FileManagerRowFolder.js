// Dependencies.
import React from 'react';
import { connect } from 'react-redux';

import { changeFolder, setRightPanelAreaView } from '../../../../../redux/actions/ui-actions';
import { fetchFolder } from '../../../../../redux/actions/folder-actions';
import { ACTIVITY } from '../../../../../redux/constants/ui-constants';

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
    const { state, dispatch, data } = this.props;

    let token = state.global.authorizationToken;
    let consumerId = state.global.consumerId;
    // Redux action.
    dispatch(fetchFolder(data.Uid, token, consumerId));
    dispatch(changeFolder(data.Uid));
    dispatch(setRightPanelAreaView(ACTIVITY));
  }

  // Render method.
  render() {
    const folderData = this.props.data;
    const folderName = folderData.Description;
    const folderDate = folderData.UpdatedDate;

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
  dispatch: React.PropTypes.func,
  state: React.PropTypes.object
};

const mapStateToProps = (state) => ({
  state
});

// Export.
export default connect(mapStateToProps)(FileManagerRowFolder);
