// Dependencies.
import React from 'react';
// import {Link} from 'react-router';
// import {LinkContainer} from 'react-router-bootstrap';
import Dropzone from 'react-dropzone';

// Core components.
import {Row, Col, Button, ListGroup, ListGroupItem, ProgressBar} from 'react-bootstrap';
import Icon from 'react-fa';

// Define class.
class Layout extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);

    this.state = {
      files: []
    };
  }

  showDetail(e) {
    e.preventDefault();
    this.props.showDetail();
  }
  showDetailForm(e) {
    e.preventDefault();
    this.props.showDetailForm();
  }
  showActivity(e) {
    e.preventDefault();
    this.props.showActivity();
    console.log('unselect');
  }

  // Dropzone.
  onDrop(uploadedFiles) {
    this.setState({ files: uploadedFiles });
    console.log(uploadedFiles);
  }
  onOpenClick() {
    this.refs.dropzone.open();
  }

  // Render method.
  render() {
    return (
      <div><br/>

        <Dropzone id="Upload_Dropzone" ref="dropzone" onDrop={this.onDrop.bind(this)} className="dropzone">
          <p>
            <Icon name="upload" className="fa-2x text-success" />
          </p>
          Drag and drop files here
          <br className="hidden-xs"/>&nbsp;
          or click to select files to upload.
        </Dropzone>

        <div className="card">
          <div className="doc_mgt-list_header">

            <Row className="doc_mgt-list_actions">
              <Col sm={12}>
                <Button componentClass="div" bsStyle="link" bsSize="xs">
                  <Icon name="folder-open" className="text-info" /> Share
                </Button>
              </Col>
            </Row>

            <Row className="doc_mgt-list_titles hidden-xs">
              <Col sm={9}>
                <strong>Type &nbsp;Name</strong>
              </Col>
              <Col sm={3} className="text-center">
                <strong>Actions</strong>
              </Col>
            </Row>

          </div>

          <ListGroup className="doc_mgt-list">

            {
              this.state.files.length > 0 ?
                <div>

                  <ListGroupItem onClick={this.showActivity.bind(this)}>
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

                  <ListGroupItem onClick={this.showActivity.bind(this)}>
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

            <ListGroupItem onClick={this.showDetailForm.bind(this)}>
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

// Parent Functions.
Layout.propTypes = {
  showDetail: React.PropTypes.func,
  showDetailForm: React.PropTypes.func,
  showActivity: React.PropTypes.func
};

// Export.
export default Layout;
