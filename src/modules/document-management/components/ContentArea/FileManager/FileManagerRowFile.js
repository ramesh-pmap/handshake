// Dependencies.
import React from 'react';
import { connect } from 'react-redux';

// Actions
import {
  selectFile,
  setRightPanelAreaView,
  toggleRightSidebar,
  setContentAreaView,
  setModalView,
  toggleModal
} from '../../../../../redux/actions';

// Constants
import {
  DETAIL,
  PREVIEW,
  SHARE,
  // CHECKIN,
  // CHECKOUT,
  DOWNLOAD,
  UPLOAD_NEW_VERSION
} from '../../../../../redux/constants';

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

  handleModalToggle(view) {
    const { dispatch } = this.props;
    dispatch(setModalView(view));
    dispatch(toggleModal(true));
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
            id="dropdown-no-caret"
            className="btn-override">
            <MenuItem eventKey="1" onClick={this.clickButtonHandler.bind(this)}>Preview</MenuItem>
            <MenuItem eventKey="2">Print</MenuItem>
            <MenuItem eventKey="3" onClick={this.handleModalToggle.bind(this, SHARE)}>Share</MenuItem>
            <MenuItem eventKey="4" onClick={this.handleModalToggle.bind(this, DOWNLOAD)}>Download</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="5" onClick={this.handleModalToggle.bind(this, UPLOAD_NEW_VERSION)}>New Version</MenuItem>
            {/*
              <MenuItem eventKey="6" onClick={this.handleModalToggle.bind(this, CHECKIN)}>Check In</MenuItem>
              <MenuItem eventKey="7" onClick={this.handleModalToggle.bind(this, CHECKOUT)}>Check Out</MenuItem>
            */}
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
