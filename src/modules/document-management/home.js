// Dependencies.
import React from 'react';
// import {Link} from 'react-router';
import {LinkContainer} from 'react-router-bootstrap';
import Dropzone from 'react-dropzone';

// Core components.
import {Row, Col, ButtonGroup, DropdownButton, MenuItem, Button, Input, ListGroup, ListGroupItem, Modal, Breadcrumb, BreadcrumbItem, ProgressBar} from 'react-bootstrap';
import Icon from 'react-fa';

// Layouts.
import Main from '../../layouts/shell-demo/main';

// Stylesheets.
import '../../modules/document-management/styles.scss';

// Utility methods.
import utils from '../../utils';

// Json file with document list data.
const DocumentList = '../../../static/data/document-list.json';

// Define class.
class Page extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);

    // Set page title.
    utils.title(props);

    this.state = {
      data: [],
      showResults: '',
      showModal: false,
      files: [],
      width: 0,
      height: 0,
      showListHeader: 'titles'
    };
  }

  // Search & Results.
  onFocus() {
    this.setState({
      showResults: 'results_wrapper--open'
    });
  }
  onBlur() {
    this.setState({
      showResults: ''
    });
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
    // let nav = document.getElementById('sidebar-wrapper');
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
    fetch(DocumentList).then(r => r.json())
      .then(data => {this.setState({data}); })
      .catch(error => {this.setState({error}); });
  }

  // Render method.
  render() {
    return (
      <Main>
        <Row>
          <Col sm={9} id="doc_mgt-left_column">

            <Row>
              <Col md={6}>
                <ButtonGroup className="title-dropdown">
                  <DropdownButton id="doc_mgt-docs_dropdown" title="All Documents" bsStyle="link" bsSize="lg">
                    <MenuItem eventKey="1">All Documents</MenuItem>
                    <MenuItem eventKey="2">My Documents</MenuItem>
                    <MenuItem eventKey="3">Recent Dcouments</MenuItem>
                  </DropdownButton>

                  <Breadcrumb>
                    <LinkContainer to="/document-management/upload">
                      <BreadcrumbItem>
                        Smiths
                      </BreadcrumbItem>
                    </LinkContainer>
                    <LinkContainer to="/document-management/upload">
                      <BreadcrumbItem>
                        Library
                      </BreadcrumbItem>
                    </LinkContainer>
                    <BreadcrumbItem active>
                      Data
                    </BreadcrumbItem>
                  </Breadcrumb>

                </ButtonGroup>
              </Col>
              <Col md={6}>
                <div className="action-bar-spacing text-right">

                  <DropdownButton id="AddDocumentDropdown" title="Add" href="#" bsStyle="success" bsSize="sm" pullRight>
                    <MenuItem onClick={this.openModal.bind(this)}>
                      <Icon name="upload" />
                      &nbsp;
                      Upload New Document
                    </MenuItem>
                    <LinkContainer to="/document-management/upload">
                      <MenuItem>
                        <Icon name="link" />
                        &nbsp;
                        Web Link
                      </MenuItem>
                    </LinkContainer>
                    <LinkContainer to="/document-management/upload">
                      <MenuItem>
                        <Icon name="book" />
                        &nbsp;
                        Hardcopy
                      </MenuItem>
                    </LinkContainer>
                  </DropdownButton>

                  <div id="doc_mgt-search_wrapper">
                    <Input type="search" placeholder="Search" bsSize="small"
                      onFocus={this.onFocus.bind(this)}
                      onBlur={this.onBlur.bind(this)}
                    />
                    <ListGroup id="doc_mgt-results_wrapper" className={this.state.showResults}>
                      <ListGroupItem href="#">
                        <Icon name="file-word-o" className="fa-fw fa-lg text-muted" />
                        &nbsp;
                        <b>Sample Word Document</b>
                        <p className="small">/OSHA/</p>
                        <p className="small">/OSHA/Procedures/</p>
                      </ListGroupItem>
                      <ListGroupItem href="#">
                        <Icon name="folder-open" className="fa-fw fa-lg text-info" />
                        &nbsp;
                        <b>Policies</b>
                      </ListGroupItem>
                      <ListGroupItem href="#">
                        <Icon name="file-excel-o" className="fa-fw fa-lg text-success" />
                        &nbsp;
                        <b>Sample Excel Document</b>
                      </ListGroupItem>
                    </ListGroup>
                  </div>

                </div>
              </Col>
            </Row>

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
                  <Col sm={6}>
                    <b>Type &nbsp;Name</b>
                  </Col>
                  <Col sm={1} className="text-center">
                    <b>Version</b>
                  </Col>
                  <Col sm={2} className="text-center">
                    <b>Modified</b>
                  </Col>
                  <Col sm={3} className="text-center">
                    <b>Status</b>
                  </Col>
                </Row>

              </div>

              <ListGroup className="doc_mgt-list">

                  <ListGroupItem>
                    <Row>
                      <Col sm={6}>
                        <Button href="#/" bsStyle="link" bsSize="xs">
                          <Icon name="folder-open" className="fa-fw fa-lg text-muted" />
                          &nbsp;
                          Procedures
                        </Button>
                      </Col>
                      <Col sm={1} className="text-center hidden-xs" />
                      <Col sm={2} className="text-center text-left-xs">
                        <span className="visible-xs-inline">Date Modified: </span>
                        11/8/2015
                      </Col>
                    </Row>
                  </ListGroupItem>

                  <ListGroupItem>
                    <Row>
                      <Col sm={6}>
                        <Button href="#/" bsStyle="link" bsSize="xs">
                          <Icon name="folder-open" className="fa-fw fa-lg text-muted" />
                          &nbsp;
                          Policies
                        </Button>
                      </Col>
                      <Col sm={1} className="text-center hidden-xs" />
                      <Col sm={2} className="text-center text-left-xs">
                        <span className="visible-xs-inline">Date Modified: </span>
                        11/8/2015
                      </Col>
                    </Row>
                  </ListGroupItem>

                  <ListGroupItem>
                    <Row>
                      <Col sm={6}>
                        <Button href="#/" bsStyle="link" bsSize="xs">
                          <Icon name="file-word-o" className="fa-fw fa-lg text-muted" />
                          &nbsp;
                          Sample Word Document
                        </Button>
                      </Col>
                      <Col sm={1} className="text-center text-left-xs">
                        <span className="visible-xs-inline">Version: </span>
                        <Button href="#" bsStyle="link" bsSize="xs">2</Button>
                      </Col>
                      <Col sm={2} className="text-center text-left-xs">
                        <span className="visible-xs-inline">Date Modified: </span>
                        11/8/2015
                      </Col>
                      <Col sm={3} className="text-center text-left-xs">
                        (Status)
                      </Col>
                    </Row>
                  </ListGroupItem>

                  <ListGroupItem>
                    <Row>
                      <Col sm={6}>
                        <Button href="#/" bsStyle="link" bsSize="xs">
                          <Icon name="file-excel-o" className="fa-fw fa-lg text-muted" />
                          &nbsp;
                          Sample Excel Document
                        </Button>
                      </Col>
                      <Col sm={1} className="text-center text-left-xs">
                        <span className="visible-xs-inline">Version: </span>
                        <Button href="#" bsStyle="link" bsSize="xs">1</Button>
                      </Col>
                      <Col sm={2} className="text-center text-left-xs">
                        <span className="visible-xs-inline">Date Modified: </span>
                        11/8/2015
                      </Col>
                      <Col sm={3} className="text-center text-left-xs">
                        (Status)
                      </Col>
                    </Row>
                  </ListGroupItem>

                  <ListGroupItem>
                    <Row>
                      <Col sm={6}>
                        <Button href="#/" bsStyle="link" bsSize="xs">
                          <Icon name="file-pdf-o" className="fa-fw fa-lg text-muted" />
                          &nbsp;
                          Sample PDF Document
                        </Button>
                      </Col>
                      <Col sm={1} className="text-center text-left-xs">
                        <span className="visible-xs-inline">Version: </span>
                        <Button href="#" bsStyle="link" bsSize="xs">1</Button>
                      </Col>
                      <Col sm={2} className="text-center text-left-xs">
                        <span className="visible-xs-inline">Date Modified: </span>
                        11/8/2015
                      </Col>
                      <Col sm={3} className="text-center text-left-xs">
                        (Status)
                      </Col>
                    </Row>
                  </ListGroupItem>

                  <ListGroupItem>
                    <Row>
                      <Col sm={6}>
                        <Button href="#/" bsStyle="link" bsSize="xs">
                          <Icon name="file-image-o" className="fa-fw fa-lg text-muted" />
                          &nbsp;
                          Sample Image Document
                        </Button>
                      </Col>
                      <Col sm={1} className="text-center text-left-xs">
                        <span className="visible-xs-inline">Version: </span>
                        <Button href="#" bsStyle="link" bsSize="xs">1</Button>
                      </Col>
                      <Col sm={2} className="text-center text-left-xs">
                        <span className="visible-xs-inline">Date Modified: </span>
                        11/8/2015
                      </Col>
                      <Col sm={3} className="text-center text-left-xs">
                        (Status)
                      </Col>
                    </Row>
                  </ListGroupItem>

                </ListGroup>

            </div>
          </Col>

          <Col sm={3} id="doc_mgt-right_column" className="sidebar-wrapper">
            <div className="sidebar" style={{height: this.state.height + 'px'}}>

              <div className="fixed-title">
                <ButtonGroup className="title-dropdown">
                  <DropdownButton id="doc_mgt-actions_dropdown" title="All Tasks" bsStyle="link" bsSize="lg">
                    <MenuItem eventKey="1">Pending <small>(2)</small></MenuItem>
                    <MenuItem eventKey="2">Ready for Release <small>(1)</small></MenuItem>
                    <MenuItem eventKey="3">Change Requests <small>(7)</small></MenuItem>
                    <MenuItem eventKey="4">All Tasks</MenuItem>
                  </DropdownButton>
                </ButtonGroup>
              </div>

              <ListGroup bsStyle="info">
                <ListGroupItem href="#link1">
                  <Icon name="file-word-o" className="fa-fw fa-lg text-muted" />
                  &nbsp;
                  <b>Sample Word Document</b>
                  <p className="small">/OSHA/</p>
                  <p className="small">/OSHA/Procedures/</p>
                </ListGroupItem>
                <ListGroupItem href="#link1">
                  <Icon name="file-word-o" className="fa-fw fa-lg text-muted" />
                  &nbsp;
                  <b>Sample Word Document</b>
                  <p className="small">/OSHA/</p>
                  <p className="small">/OSHA/Procedures/</p>
                </ListGroupItem>
                <ListGroupItem href="#link1">
                  <Icon name="file-word-o" className="fa-fw fa-lg text-muted" />
                  &nbsp;
                  <b>Sample Word Document</b>
                  <p className="small">/OSHA/</p>
                  <p className="small">/OSHA/Procedures/</p>
                </ListGroupItem>
                <ListGroupItem href="#link1">
                  <Icon name="file-word-o" className="fa-fw fa-lg text-muted" />
                  &nbsp;
                  <b>Sample Word Document</b>
                  <p className="small">/OSHA/</p>
                  <p className="small">/OSHA/Procedures/</p>
                </ListGroupItem>
              </ListGroup>

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
