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

        {
          this.state.files.length < 1 ?
            <Dropzone id="Upload_Dropzone" ref="dropzone" onDrop={this.onDrop.bind(this)} className="dropzone">
              <p>
                <Icon name="upload" className="fa-2x text-success" />
              </p>
              Drag and drop files here
              <br className="hidden-xs"/>&nbsp;
              or click to select files to upload.
            </Dropzone>
          : null
        }

        <div className="card">
          <div className="doc_mgt-list_header">

            <Row className="doc_mgt-list_actions">
              <Col sm={12}>
                <Button href="#/" bsStyle="link" bsSize="xs">
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

            <ListGroupItem>
              <Button bsStyle="link" disabled>
                <Icon name="file-image-o" className="fa-fw fa-lg" />
                &nbsp;
                original-sample-image-file-name.jpg
              </Button>
              <Row>
                <Col xs={9}>
                  <ProgressBar bsStyle="primary" active now={45} label="%(percent)s%" />
                </Col>
                <Col xs={3} className="text-right">
                  <Button href="#/" bsStyle="default" bsSize="xs">
                    <Icon name="pause" />
                  </Button>
                </Col>
              </Row>
            </ListGroupItem>

            <ListGroupItem>
              <Row>
                <Col xs={9}>
                  <Button href="#/" bsStyle="link">
                    <Icon name="file-word-o" className="fa-fw fa-lg" />
                    &nbsp;
                    sample-microsoft-word-documnet-file-name.docx
                  </Button>
                  <ProgressBar bsStyle="success" now={100} label="%(percent)s%" />
                </Col>
                <Col xs={3} className="text-right">
                  <Button href="#/" bsStyle="default" bsSize="xs">
                    <Icon name="pause" />
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
  showActivity: React.PropTypes.func
};

// Export.
export default Layout;
