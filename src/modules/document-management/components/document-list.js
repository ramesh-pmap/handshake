// Dependencies.
import React from 'react';
// import {Link} from 'react-router';
// import {LinkContainer} from 'react-router-bootstrap';

// Core components.
import {Row, Col, Button, ListGroup, ListGroupItem} from 'react-bootstrap';
import Icon from 'react-fa';

// Stylesheets.
import '../../../modules/document-management/styles.scss';

// Define class.
class Layout extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);
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

  // Render method.
  render() {
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

        <ListGroup className="doc_mgt-list">

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
