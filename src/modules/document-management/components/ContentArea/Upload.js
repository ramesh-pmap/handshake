// Dependencies.
import React from 'react';
import { connect } from 'react-redux';

// Redux.
import { toggleRightSidebar, setRightPanelAreaView } from '../../../../redux/actions';
import { ACTIVITY, DETAILFORM } from '../../../../redux/constants';

// Components.
import {Row, Col, Button, ListGroup, ListGroupItem, ProgressBar} from 'react-bootstrap';
import Icon from 'react-fa';
import Dropzone from 'react-dropzone';

import Filestack from 'filepicker-js';

// Define class.
class Upload extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);

    this.state = {
      files: [],
      fileName: '',
      progress: 0,
      success: false,
      startUpload: false,
    };
  }

  handleUploadedFileClick(panelView) {
    const { state, dispatch } = this.props;
    if (!state.rightSidebarOpened) {
      dispatch(toggleRightSidebar(state.rightSidebarOpened));
    }
    dispatch(setRightPanelAreaView(panelView));
  }

  // Dropzone.
  onDrop(uploadedFiles) {
    this.setState({
      files: uploadedFiles,
      fileName: uploadedFiles[0].name,
      upload: true});
    Filestack.setKey('ApllgXw6MTHiBIIas6R9Dz');
    Filestack.store(
      uploadedFiles[0],
      (blob) => {
        console.log('Store successful: ', JSON.stringify(blob));
        this.setState({
          success: true,
          upload: false
        });
      },
      (error) => {
        console.log(error.toString());
      },
      (p) => {
        this.setState({ progress: p });
      }
    );
  }
  onOpenClick() {
    this.refs.dropzone.open();
  }

  // Render method.
  render() {
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
        {
        this.state.files.length > 0 ?
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

                  <ListGroupItem onClick={this.handleUploadedFileClick.bind(this, ACTIVITY)}>
                    <Button componentClass="div" bsStyle="link" disabled>
                      <Icon name="file-image-o" className="fa-fw fa-lg" />
                      &nbsp;
                      {this.state.fileName}
                    </Button>
                    <Row>
                      <Col xs={10}>
                        <ProgressBar bsStyle="primary" active now={this.state.progress} label="%(percent)s%" />
                      </Col>
                      <Col xs={2} className="text-right">
                        <Button componentClass="div" bsStyle="default" bsSize="xs">
                          <Icon name="pause" />
                        </Button>
                      </Col>
                    </Row>
                  </ListGroupItem>

                </div>
              : null
            }
            {
              this.state.success ?
              <ListGroupItem onClick={this.handleUploadedFileClick.bind(this, DETAILFORM)}>
                  <Row>
                    <Col xs={10}>
                      <Button componentClass="div" bsStyle="link">
                        <Icon name="file-word-o" className="fa-lg" />
                        &nbsp;
                        {this.state.fileName}
                      </Button>
                    </Col>
                    <Col xs={2} className="text-right">
                      <Button componentClass="div" bsStyle="link" bsSize="xs">
                        <Icon name="trash" className="fa-lg text-muted" />
                      </Button>
                      &nbsp;
                      <Button componentClass="div" bsStyle="link" bsSize="xs">
                        <Icon name="pencil" className="fa-lg text-muted" />
                        &nbsp; Edit Details
                      </Button>
                    </Col>
                  </Row>
                </ListGroupItem>
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
                    &nbsp; Edit Details
                  </Button>
                </Col>
              </Row>
            </ListGroupItem>

          </ListGroup>
        </div>
        : null
      }
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
