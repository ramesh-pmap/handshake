// Dependencies.
import React from 'react';
import { connect } from 'react-redux';

import { selectFile, setRightPanelAreaView, toggleRightSidebar, setContentAreaView } from '../../../../../redux/actions';
import { DETAIL, PREVIEW } from '../../../../../redux/constants';

// Core components.
import {Row, Col, Button, ListGroupItem, MenuItem, ButtonToolbar, DropdownButton} from 'react-bootstrap';
import Icon from 'react-fa';

// Define class.
class FileManagerRowFile extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);
  }

  clickListGroupItemHandler(fileId, e) {
    e.preventDefault();
    const { state, dispatch } = this.props;
    // Redux actions.
    dispatch(selectFile(fileId));
    dispatch(setRightPanelAreaView(DETAIL));
    if (!state.rightSidebarOpened) {
      dispatch(toggleRightSidebar(state.rightSidebarOpened));
    }
  }

  clickButtonHandler(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(setContentAreaView(PREVIEW));
  }

  // Render method.
  render() {
    const fileData = this.props.data;
    const typesMapping = {'doc': 'word', 'docx': 'word', 'xls': 'excel', 'jpg': 'image', 'tif': 'image', 'gif': 'image', 'png': 'image', 'ppt': 'powerpoint', 'pptx': 'powerpoint'};

    const fileId = fileData.doc_id;
    const fileName = fileData.file_name;
    const fileType = typesMapping[fileData.file_type] ? typesMapping[fileData.file_type] : fileData.file_type;
    const fileVersion = fileData.doc_version;
    const fileModifiedDate = fileData.doc_modified_date;
    const fileStatus = fileData.doc_status_id;

    return (
      <ListGroupItem>
        <Row onClick={this.clickListGroupItemHandler.bind(this, fileId)}>
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
        <ButtonToolbar className="row-options">
          <DropdownButton
            bsStyle="default"
            title={
              <Icon name="ellipsis-v"/>
            }
            pullRight
            noCaret
            id="dropdown-no-caret">
            <MenuItem eventKey="1" onClick={this.clickButtonHandler.bind(this)}>Preview</MenuItem>
            <MenuItem eventKey="2">Print</MenuItem>
            <MenuItem eventKey="3">Share</MenuItem>
            <MenuItem eventKey="4">Download</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="5">Upload New Version</MenuItem>
            <MenuItem eventKey="6">Check In</MenuItem>
            <MenuItem eventKey="7">Check Out</MenuItem>
          </DropdownButton>
        </ButtonToolbar>
      </ListGroupItem>
    );
  }
}

// Validation.
FileManagerRowFile.propTypes = {
  data: React.PropTypes.object,
  state: React.PropTypes.object,
  dispatch: React.PropTypes.func
};
const mapStateToProps = (state) => ({
  state
});

// Export.
export default connect(mapStateToProps)(FileManagerRowFile);
