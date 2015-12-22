// Dependencies.
import React from 'react';
// import {Link} from 'react-router';
// import {LinkContainer} from 'react-router-bootstrap';

// Core components.
import {Row, Col, Button, ListGroup, ListGroupItem} from 'react-bootstrap';
import Icon from 'react-fa';

// Folder components.
// import RootFolder from './folders/root';

// Define const.
const FOLDER_ROOT = 'root';
const SAMPLE_FOLDER = 'sample_folder';

// Define class.
class Layout extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);

    this.state = {
      currentFolder: FOLDER_ROOT
    };
  }

  showDetail(e) {
    e.preventDefault();
    this.props.showDetail();
  }

  showActivity(e) {
    e.preventDefault();
    this.props.showActivity();
  }

  showRootFolder(e) {
    e.preventDefault();
    this.props.showActivity();
    this.setState({ currentFolder: FOLDER_ROOT });
  }

  showSampleFolder(e) {
    e.preventDefault();
    this.props.showSampleFolder();
    this.setState({ currentFolder: SAMPLE_FOLDER });
  }

  showPreview(e) {
    e.preventDefault();
    this.props.showPreview();
  }

  // Render method.
  render() {
    // Left List View
    const currentFolder = this.state.currentFolder;
    let folderArea;

    switch (currentFolder) {
    case FOLDER_ROOT:
      folderArea = (
        <ListGroup className="doc_mgt-list">
          <ListGroupItem onClick={this.showSampleFolder.bind(this)}>
            <Row>
              <Col sm={6}>
                <Button href="#/" bsStyle="link" bsSize="xs">
                  <Icon name="folder-open" className="fa-fw fa-lg text-muted" />
                  &nbsp;
                  1.01 Incident and Emergency Management
                </Button>
              </Col>
              <Col sm={1} className="text-center hidden-xs" />
              <Col sm={2} className="text-center text-left-xs">
                <span className="visible-xs-inline">Date Modified: </span>
                11/8/2015
              </Col>
            </Row>
          </ListGroupItem>
          <ListGroupItem onClick={this.showSampleFolder.bind(this)}>
            <Row>
              <Col sm={6}>
                <Button href="#/" bsStyle="link" bsSize="xs">
                  <Icon name="folder-open" className="fa-fw fa-lg text-muted" />
                  &nbsp;
                  2.0 Quality Management System
                </Button>
              </Col>
              <Col sm={1} className="text-center hidden-xs" />
              <Col sm={2} className="text-center text-left-xs">
                <span className="visible-xs-inline">Date Modified: </span>
                11/8/2015
              </Col>
            </Row>
          </ListGroupItem>
        </ListGroup>
      );
      break;
    case SAMPLE_FOLDER:
      folderArea = (
        <ListGroup className="doc_mgt-list">
          <ListGroupItem onClick={this.showDetail.bind(this)}>
            <Row>
              <Col sm={6}>
                <Button href="#/" bsStyle="link" bsSize="xs" onClick={this.showPreview.bind(this)}>
                  <Icon name="file-word-o" className="fa-fw fa-lg text-muted" />
                  &nbsp;
                  Incident Management
                </Button>
              </Col>
              <Col sm={1} className="text-center text-left-xs">
                <span className="visible-xs-inline">Version: </span>
                <Button href="#" bsStyle="link" bsSize="xs">1</Button>
              </Col>
              <Col sm={2} className="text-center text-left-xs">
                <span className="visible-xs-inline">Date Modified: </span>
                9/22/2015
              </Col>
              <Col sm={3} className="text-center text-left-xs">
                (Status)
              </Col>
            </Row>
          </ListGroupItem>
          <ListGroupItem onClick={this.showDetail.bind(this)}>
            <Row>
              <Col sm={6}>
                <Button href="#/" bsStyle="link" bsSize="xs" onClick={this.showPreview.bind(this)}>
                  <Icon name="file-word-o" className="fa-fw fa-lg text-muted" />
                  &nbsp;
                  Incident Investigation
                </Button>
              </Col>
              <Col sm={1} className="text-center text-left-xs">
                <span className="visible-xs-inline">Version: </span>
                <Button href="#" bsStyle="link" bsSize="xs">3</Button>
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
      );
      break;
    default:
      folderArea = null;
    }

    return (
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

        {folderArea}

        {/*
          <ListGroup className="doc_mgt-list">

            <ListGroupItem onClick={this.showActivity.bind(this)}>
              <Row>
                <Col sm={6}>
                  <Button href="#/" bsStyle="link" bsSize="xs">
                    <Icon name="folder-open" className="fa-fw fa-lg text-muted" />
                    &nbsp;
                    1.0 EH&S Management System
                  </Button>
                </Col>
                <Col sm={1} className="text-center hidden-xs" />
                <Col sm={2} className="text-center text-left-xs">
                  <span className="visible-xs-inline">Date Modified: </span>
                  11/8/2015
                </Col>
              </Row>
            </ListGroupItem>

            <ListGroupItem onClick={this.showActivity.bind(this)}>
              <Row>
                <Col sm={6}>
                  <Button href="#/" bsStyle="link" bsSize="xs">
                    <Icon name="folder-open" className="fa-fw fa-lg text-muted" />
                    &nbsp;
                    2.0 Quality Management System
                  </Button>
                </Col>
                <Col sm={1} className="text-center hidden-xs" />
                <Col sm={2} className="text-center text-left-xs">
                  <span className="visible-xs-inline">Date Modified: </span>
                  11/8/2015
                </Col>
              </Row>
            </ListGroupItem>

            <ListGroupItem onClick={this.showActivity.bind(this)}>
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

            <ListGroupItem onClick={this.showActivity.bind(this)}>
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

            <ListGroupItem onClick={this.showDetail.bind(this)} eventKey={3}>
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
        */}

      </div>
    );
  }
}

// Parent Functions.
Layout.propTypes = {
  showDetail: React.PropTypes.func,
  showActivity: React.PropTypes.func,
  showRootList: React.PropTypes.func,
  showUploadList: React.PropTypes.func,
  showSampleFolder: React.PropTypes.func,
  showPreview: React.PropTypes.func,
};

// Export.
export default Layout;
