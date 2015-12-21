// Dependencies.
import React from 'react';
// import {Link} from 'react-router';
// import {LinkContainer} from 'react-router-bootstrap';
import Dropzone from 'react-dropzone';

// Core components.
import {Row, Col, Button, Modal, ProgressBar} from 'react-bootstrap';
import Icon from 'react-fa';

// Layouts.
import Main from '../../../layouts/shell-demo/main';
import DocumentListHeader from '../components/document-list-header';
import DocumentList from '../components/document-list';
// import DocumentActivityList from '../components/document-activity-list';
import DocumentActivityList from '../components/document-detail-form';


// Stylesheets.
import '../../../modules/document-management/styles.scss';

// Utility methods.
import utils from '../../../utils';

// Json file with document list data.
const DocumentListData = '../../../../static/data/document-list.json';

// Define class.
class Page extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);

    // Set page title.
    utils.title(props);

    this.state = {
      data: [],
      showModal: false,
      files: [],
      width: 0,
      height: 0,
      showListHeader: 'titles'
    };
  }

  // Upload Modal.
  closeModal() {
    this.setState({ showModal: false });
  }
  openModal() {
    this.setState({ showModal: true });
  }

  // Dropzone.
  onDrop(uploadedFiles) {
    this.setState({ files: uploadedFiles });
    console.log(uploadedFiles);
  }
  onOpenClick() {
    this.refs.dropzone.open();
  }
  uploadFilesToServer() {
    this.setState({ files: [] });
    this.closeModal();
  }

  // Window Resizing.
  updateDimensions() {
    let w = window;
    let d = document;
    let e = d.documentElement;
    let g = d.getElementsByTagName('body')[0];
    let x = w.innerWidth || e.clientWidth || g.clientWidth;
    let y = w.innerHeight || e.clientHeight || g.clientHeight;
    // let nav = d.getElementsByClassName('sidebar-wrapper');
    // let navWidth = nav.innerWidth || nav.clientWidth;
    // x = ( Math.floor((navWidth / 25) * 100) - navWidth );
    this.setState({width: x, height: y});
  }
  componentWillMount() {
    this.updateDimensions();
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  }
  componentDidMount() {
    // Window Resizing.
    window.addEventListener('resize', this.updateDimensions.bind(this));

    // Fetch Json data.
    fetch(DocumentListData).then(r => r.json())
      .then(data => {this.setState({data}); })
      .catch(error => {this.setState({error}); });
  }

  // Render method.
  render() {
    return (
      <Main>
        <Row>
          <Col sm={9} id="doc_mgt-left_column">

            <DocumentListHeader />

            <DocumentList />

          </Col>

          <Col sm={3} id="doc_mgt-right_column" className="sidebar-wrapper">
            <div className="sidebar" style={{height: this.state.height + 'px'}}>

              <DocumentActivityList />

            </div>
          </Col>
        </Row>

        <Modal bsSize="large" show={this.state.showModal} onHide={this.closeModal.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Upload New Document</Modal.Title>
          </Modal.Header>
          <Modal.Body>

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
              :
                <div className="uploading-files">
                  <h4>Uploading {this.state.files.length} files...</h4>
                  <hr />

                  <Row>
                    <Col xs={11}>
                      <Button bsStyle="link" disabled>
                        <Icon name="file-image-o" className="fa-fw fa-lg" />
                        &nbsp;
                        original-sample-image-file-name.jpg
                      </Button>
                      <ProgressBar bsStyle="primary" active now={45} label="%(percent)s%" />
                    </Col>
                    <Col xs={1} className="text-right">
                      <Button href="#/" bsStyle="danger" bsSize="xs">
                        <Icon name="times" />
                      </Button>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs={11}>
                      <Button href="#/" bsStyle="link">
                        <Icon name="file-word-o" className="fa-fw fa-lg" />
                        &nbsp;
                        sample-microsoft-word-documnet-file-name.docx
                      </Button>
                      <ProgressBar bsStyle="success" now={100} label="%(percent)s%" />
                    </Col>
                    <Col xs={1} className="text-right">
                      <Button href="#/" bsStyle="danger" bsSize="xs">
                        <Icon name="times" />
                      </Button>
                    </Col>
                  </Row>

                </div>
            }

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closeModal.bind(this)}>Cancel</Button>
            {this.state.files.length >= 1 ?
              <Button bsStyle="success" onClick={this.uploadFilesToServer.bind(this)}>
                Upload
              </Button>
            : null }
          </Modal.Footer>
        </Modal>

      </Main>
    );
  }
}


// Export.
export default Page;
