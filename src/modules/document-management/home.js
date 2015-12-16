// Dependencies.
import React from 'react';

// Core components.
import {Row, Col, ButtonToolbar, ButtonGroup, DropdownButton, MenuItem, Button, Table, Input, ListGroup, ListGroupItem} from 'react-bootstrap';
import Icon from 'react-fa';

// Layouts.
import Main from '../../layouts/main';

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
      showResults: ''
    };
  }

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

  componentDidMount() {
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
          <Col sm={9}>

            <Row>
              <Col md={6}>
                <ButtonGroup className="title-dropdown">
                  <DropdownButton id="doc_mgt-docs_dropdown" href="#" title="All Documents" bsStyle="link" bsSize="lg">
                    <MenuItem eventKey="1">All Documents</MenuItem>
                    <MenuItem eventKey="2">My Documents</MenuItem>
                    <MenuItem eventKey="3">Recent Dcouments</MenuItem>
                  </DropdownButton>

                  <p>/ OSHA</p>

                </ButtonGroup>
              </Col>
              <Col md={6}>
                <div className="action-bar-spacing text-right">
                  <ButtonToolbar>
                    <Button href="/document-management-upload" bsStyle="success" bsSize="sm">
                      <Icon name="upload" />
                      &nbsp;
                      Upload
                    </Button>
                    <Button href="#" bsStyle="link" bsSize="sm">
                      <Icon name="folder-open" />
                      &nbsp;
                      New Folder
                    </Button>
                    &nbsp;
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
                  </ButtonToolbar>
                </div>
              </Col>
            </Row>

            <div id="doc_mgt-list_thead">
              <Table>
                <thead>
                  <tr>
                    <th width="50%">Name</th>
                    <th width="10%" className="text-center">Version</th>
                    <th width="20%" className="text-center">Modified</th>
                    <th width="20%" className="text-center">Actions</th>
                  </tr>
                </thead>
              </Table>
            </div>

            <Table hover>
              <tbody>
                <tr>
                  <td width="50%">
                    <Button href="#" bsStyle="link" bsSize="xs">
                      <Icon name="folder-open" className="fa-fw fa-lg text-info" />
                      &nbsp;
                      <b>Procedures</b>
                    </Button>
                  </td>
                  <td width="10%" className="text-center">
                    <Button href="#" bsStyle="link" bsSize="xs">1</Button>
                  </td>
                  <td width="20%" className="text-center">
                    11/8/2015
                  </td>
                  <td width="20%" className="text-center">Actions</td>
                </tr>
                <tr>
                  <td>
                    <Button href="#" bsStyle="link" bsSize="xs">
                      <Icon name="folder-open" className="fa-fw fa-lg text-info" />
                      &nbsp;
                      <b>Policies</b>
                    </Button>
                  </td>
                  <td className="text-center">
                    <Button href="#" bsStyle="link" bsSize="xs">1</Button>
                  </td>
                  <td className="text-center">
                    11/8/2015
                  </td>
                  <td className="text-center">Actions</td>
                </tr>
                <tr>
                  <td>
                    <Button href="#" bsStyle="link" bsSize="xs">
                      <Icon name="file-word-o" className="fa-fw fa-lg text-muted" />
                      &nbsp;
                      <b>Sample Word Document</b>
                    </Button>
                  </td>
                  <td className="text-center">
                    <Button href="#" bsStyle="link" bsSize="xs">1</Button>
                  </td>
                  <td className="text-center">
                    11/8/2015
                  </td>
                  <td className="text-center">Actions</td>
                </tr>
                <tr>
                  <td>
                    <Button href="#" bsStyle="link" bsSize="xs">
                      <Icon name="file-excel-o" className="fa-fw fa-lg text-success" />
                      &nbsp;
                      <b>Sample Excel Document</b>
                    </Button>
                  </td>
                  <td className="text-center">
                    <Button href="#" bsStyle="link" bsSize="xs">1</Button>
                  </td>
                  <td className="text-center">
                    11/8/2015
                  </td>
                  <td className="text-center">Actions</td>
                </tr>
                <tr>
                  <td>
                    <Button href="#" bsStyle="link" bsSize="xs">
                      <Icon name="file-pdf-o" className="fa-fw fa-lg text-danger" />
                      &nbsp;
                      <b>Sample PDF Document</b>
                    </Button>
                  </td>
                  <td className="text-center">
                    <Button href="#" bsStyle="link" bsSize="xs">1</Button>
                  </td>
                  <td className="text-center">
                    11/8/2015
                  </td>
                  <td className="text-center">Actions</td>
                </tr>
                <tr>
                  <td>
                    <Button href="#" bsStyle="link" bsSize="xs">
                      <Icon name="file-image-o" className="fa-fw fa-lg text-warning" />
                      &nbsp;
                      <b>Sample Image File</b>
                    </Button>
                  </td>
                  <td className="text-center">
                    <Button href="#" bsStyle="link" bsSize="xs">1</Button>
                  </td>
                  <td className="text-center">
                    11/8/2015
                  </td>
                  <td className="text-center">Actions</td>
                </tr>
              </tbody>
            </Table>

          </Col>

          <Col sm={3} className="doc-mgt-right-column">
            <ButtonGroup className="title-dropdown">
              <DropdownButton id="doc_mgt-actions_dropdown" title="Activity" bsStyle="link" bsSize="lg">
                <MenuItem eventKey="1">Pending <small>(2)</small></MenuItem>
                <MenuItem eventKey="2">Ready for Release <small>(1)</small></MenuItem>
                <MenuItem eventKey="3">Change Requests <small>(7)</small></MenuItem>
                <MenuItem eventKey="4">All</MenuItem>
              </DropdownButton>
            </ButtonGroup>

            <a href="" className="block">
              <p>
                Sample Action
                <Icon name="envelope" className="fa-lg pull-right" />
              </p>
            </a>
            <a href="" className="block">
              <p>
                Sample Action
                <Icon name="envelope" className="fa-lg pull-right" />
              </p>
            </a>
            <a href="" className="block">
              <p>
                Sample Action
                <Icon name="envelope" className="fa-lg pull-right" />
              </p>
            </a>
            <a href="" className="block">
              <p>
                Sample Action
                <Icon name="envelope" className="fa-lg pull-right" />
              </p>
            </a>

          </Col>
        </Row>
      </Main>
    );
  }
}


// Export.
export default Page;
