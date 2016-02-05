// Dependencies.
import React from 'react';
import { connect } from 'react-redux';

import UploadFile from './UploadFile';

// Redux.
import { toggleRightSidebar, setRightPanelAreaView, setContentAreaView } from '../../../../redux/actions';
import { DETAILFORM, PREVIEW } from '../../../../redux/constants';

// Components.
import {Row, Col, Button, ListGroup, ListGroupItem} from 'react-bootstrap';
import Icon from 'react-fa';
import Dropzone from 'react-dropzone';

// Define class.
class Upload extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);

    this.state = {
      droppedFiles: [],
      success: false
    };
  }

  handleUploadedFileClick(panelView) {
    const { state, dispatch } = this.props;
    if (!state.rightSidebarOpened) {
      dispatch(toggleRightSidebar(state.rightSidebarOpened));
    }
    dispatch(setRightPanelAreaView(panelView));
    dispatch(setContentAreaView(PREVIEW));
  }

  // Dropzone.
  onDrop(uploadedFiles) {
    this.setState({
      droppedFiles: uploadedFiles,
      upload: true});
  }
  onOpenClick() {
    this.refs.dropzone.open();
  }

  // Render method.
  render() {
    // Map droppedFiles to each UploadFile Component.
    let listOfFiles = this.state.droppedFiles.map((f) => {
      // Using preview value for unique key.
      return <UploadFile key={f.preview} file={f} />;
    });
    return (
      <div>
        <Dropzone id="Upload_Dropzone" ref="dropzone" onDrop={this.onDrop.bind(this)} className="dropzone">
          <p>
            <Icon name="upload" className="fa-2x text-success" />
          </p>
          Drag and drop files here
          <br className="hidden-xs"/>&nbsp;
          or click to <a>select files</a> from your computer.
        </Dropzone>

        <div className="card">
          <div className="file_manager-list_header">

            <Row className="file_manager-list_titles hidden-xs">
              <Col sm={9}>
                <strong>Type &nbsp;Name</strong>
              </Col>
              <Col sm={3} className="text-center">
                <strong>Actions</strong>
              </Col>
            </Row>

          </div>

          <ListGroup className="file_manager-list">

          {
            this.state.upload ?
              <div>
                {listOfFiles}
              </div>
            : null
          }

            <ListGroupItem onClick={this.handleUploadedFileClick.bind(this, DETAILFORM)}>
              <Row>
                <Col xs={10}>
                  <Button componentClass="div" bsStyle="link">
                    <Icon name="file-word-o" className="fa-lg" />
                    &nbsp;
                    sample_upload_file.doc
                  </Button>
                </Col>
                <Col xs={2} className="text-right">
                  <Button componentClass="div" bsStyle="link" bsSize="xs">
                    <Icon name="trash" className="fa-lg text-muted" />
                  </Button>
                  &nbsp;
                  <Button componentClass="div" bsStyle="link" bsSize="xs">
                    <Icon name="pencil" className="fa-lg text-muted" />
                    &nbsp; Add Details
                  </Button>
                </Col>
              </Row>
            </ListGroupItem>

          </ListGroup>
        </div>

      </div>
    );
  }
}

// propTypes.
Upload.propTypes = {
  dispatch: React.PropTypes.func,
  state: React.PropTypes.object
};
const mapStateToProps = (state) => ({
  state
});

// Export.
export default connect(mapStateToProps)(Upload);
