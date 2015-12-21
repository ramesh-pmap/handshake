// Dependencies.
import React from 'react';
// import {Link} from 'react-router';
// import {LinkContainer} from 'react-router-bootstrap';
import Dropzone from 'react-dropzone';

// Core components.
import {Row, Col, Button, Modal, ProgressBar} from 'react-bootstrap';
import Icon from 'react-fa';

// Layouts.
import Main from '../../layouts/shell-demo/main';
import DocumentListHeader from './components/document-list-header';
import RootList from './lists/root';
// import UploadList from './lists/upload';

import DocumentActivityList from './components/document-activity-list';
import DocumentDetail from './components/document-detail';
import DocumentDetailForm from './components/document-detail-form';

// Utility methods.
import utils from '../../utils';

// Define const.
// List Views
const ALLDOCS = 'All Documents';
// const MYDOCS = 'My Documents';
// const RECENTDOCS = 'Recent Documents';
// const UPLOADEDDOCS = 'Recent Documents';
// Right Panel
const ACTIVITY = 'activity';
const DETAIL = 'detail';
const DETAILFORM = 'detail-form';

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
      showListHeader: 'titles',
      rightPanel: ACTIVITY,
      currentListView: ALLDOCS
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
  }

  // List view functions
  showRootList() {
    this.setState({ rightPanel: DETAIL });
  }

  // Right panel functions
  showDetail() {
    this.setState({ rightPanel: DETAIL });
  }
  showDetailForm() {
    this.setState({ rightPanel: DETAILFORM });
  }
  showActivity() {
    this.setState({ rightPanel: ACTIVITY });
  }

  // Render method.
  render() {
    const rightPanel = this.state.rightPanel;
    let rightPanelArea;

    switch (rightPanel) {
    case ACTIVITY:
      rightPanelArea = <DocumentActivityList />;
      break;
    case DETAIL:
      rightPanelArea = <DocumentDetail showDetailForm={this.showDetailForm.bind(this)} />;
      break;
    case DETAILFORM:
      rightPanelArea = <DocumentDetailForm showDetail={this.showDetail.bind(this)} />;
      break;
    default:
      rightPanelArea = <DocumentActivityList />;
    }

    return (
      <Main>
        <Row>
          <Col sm={9} id="doc_mgt-left_column">

            <DocumentListHeader />

            <RootList
              showDetail={this.showDetail.bind(this)}
              showActivity={this.showActivity.bind(this)}
            />

          </Col>

          <Col sm={3} id="doc_mgt-right_column" className="sidebar-wrapper">
            <div className="sidebar" style={{height: this.state.height + 'px'}}>

              {rightPanelArea}

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
