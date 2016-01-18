// Dependencies.
import React from 'react';
import { connect } from 'react-redux';
import {Row, Col, Button, ListGroup, ListGroupItem, ProgressBar} from 'react-bootstrap';
import Icon from 'react-fa';
import Dropzone from 'react-dropzone';

// Redux.
import { toggleRightSidebar, setRightPanelAreaView } from '../../../../redux/actions';
import { ACTIVITY, DETAILFORM } from '../../../../redux/constants';

// Define class.
class Upload extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);

    this.state = {
      files: []
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
    this.setState({ files: uploadedFiles });
    // console.log(uploadedFiles);
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
          or click to select files to upload.
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
              this.state.files.length > 0 ?
                <div>

                  <ListGroupItem onClick={this.handleUploadedFileClick.bind(this, ACTIVITY)}>
                    <Button componentClass="div" bsStyle="link" disabled>
                      <Icon name="file-image-o" className="fa-fw fa-lg" />
                      &nbsp;
                      original-sample-image-file-name.jpg
                    </Button>
                    <Row>
                      <Col xs={10}>
                        <ProgressBar bsStyle="primary" active now={45} label="%(percent)s%" />
                      </Col>
                      <Col xs={2} className="text-right">
                        <Button componentClass="div" bsStyle="default" bsSize="xs">
                          <Icon name="pause" />
                        </Button>
                      </Col>
                    </Row>
                  </ListGroupItem>

                  <ListGroupItem onClick={this.handleUploadedFileClick.bind(this, ACTIVITY)}>
                    <Button componentClass="div" bsStyle="link" disabled>
                      <Icon name="file-image-o" className="fa-fw fa-lg" />
                      &nbsp;
                      original-sample-image-file-name.jpg
                    </Button>
                    <Row>
                      <Col xs={10}>
                        <ProgressBar bsStyle="primary" active now={79} label="%(percent)s%" />
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

            <ListGroupItem onClick={this.handleUploadedFileClick.bind(this, DETAILFORM)}>
              <Row>
                <Col xs={10}>
                  <Button componentClass="div" bsStyle="link">
                    <Icon name="file-word-o" className="fa-lg" />
                    &nbsp;
                    sample-microsoft-word-documnet-file-name.docx
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
