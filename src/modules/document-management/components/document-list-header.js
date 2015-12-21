// Dependencies.
import React from 'react';
// import {Link} from 'react-router';
import {LinkContainer} from 'react-router-bootstrap';

// Core components.
import {Row, Col, ListGroup, ListGroupItem, ButtonGroup, DropdownButton, MenuItem, Breadcrumb, BreadcrumbItem, Input} from 'react-bootstrap';
import Icon from 'react-fa';

// Define const.
const ALLDOCS = 'All Documents';
const MYDOCS = 'My Documents';
const UPLOADEDDOCS = 'My Pending Uploads';
const RECENTDOCS = 'Recent Documents';

// Define class.
class Layout extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);

    this.state = {
      showResults: '',
      sectionTitle: ALLDOCS
    };
  }

  // Search & results.
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

  // Change list view.
  showRootList(e) {
    e.preventDefault();
    this.props.showRootList();
    this.state.sectionTitle = ALLDOCS;
  }
  showUploadList(e) {
    e.preventDefault();
    this.props.showUploadList();
    this.state.sectionTitle = UPLOADEDDOCS;
  }

  // Render method.
  render() {
    return (
      <Row>
        <Col md={6}>
          <ButtonGroup className="title-dropdown">
            <DropdownButton id="doc_mgt-docs_dropdown" title={this.state.sectionTitle} bsStyle="link" bsSize="lg">
              <MenuItem eventKey="1" onClick={this.showRootList.bind(this)}>{ALLDOCS}</MenuItem>
              <MenuItem eventKey="2">{MYDOCS}</MenuItem>
              <MenuItem eventKey="3" onClick={this.showUploadList.bind(this)}>{UPLOADEDDOCS}</MenuItem>
              <MenuItem eventKey="4">{RECENTDOCS}</MenuItem>
            </DropdownButton>

            <Breadcrumb>
              <BreadcrumbItem>
                Smiths
              </BreadcrumbItem>
            </Breadcrumb>

          </ButtonGroup>
        </Col>
        <Col md={6}>
          <div className="action-bar-spacing text-right">

            <DropdownButton id="AddDocumentDropdown" title="Add" href="#" bsStyle="success" bsSize="sm" pullRight>
              <LinkContainer to="/document-management/upload">
                <MenuItem>
                  <Icon name="upload" />
                  &nbsp;
                  Upload New Document
                </MenuItem>
              </LinkContainer>
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
    );
  }
}

// Parent Functions.
Layout.propTypes = {
  showRootList: React.PropTypes.func,
  showUploadList: React.PropTypes.func
};

// Export.
export default Layout;
