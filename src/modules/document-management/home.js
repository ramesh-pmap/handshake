// Dependencies.
import React from 'react';

// Core components.
import {Row, Col, ButtonGroup, DropdownButton, MenuItem, Button, Table} from 'react-bootstrap';
import Icon from 'react-fa';

// Utility methods.
import utils from '../../utils';

// Common components.
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Sidebar from '../../components/SidebarLeft';


// Stylesheets.
import './styles.scss';

// Json file with icons data.
const DataIcons = '../../static/icons/data-icons2.json';

// Define class.
class Page extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);

    // Set page title.
    utils.title(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    // Fetch Json data.
    fetch(DataIcons).then(r => r.json())
      .then(data => {this.setState({data}); })
      .catch(error => {this.setState({error}); });
  }

  // Render method.
  render() {
    return (
      <div id="shellWrapper" className="shell-wrapper doc-wrapper">

        <Sidebar title="mars" />

        <Header />

        <div className="page-content-wrapper">
          <Row>
            <Col sm={8}>

              <Row>
                <Col sm={6}>
                  <ButtonGroup className="title-dropdown">
                    <DropdownButton id="doc_mgt-docs_dropdown" title="All Documents" bsStyle="link" bsSize="lg">
                      <MenuItem eventKey="1">All Documents</MenuItem>
                      <MenuItem eventKey="2">My Documents</MenuItem>
                      <MenuItem eventKey="3">Recent Dcouments</MenuItem>
                    </DropdownButton>
                  </ButtonGroup>
                </Col>
                <Col sm={6} className="text-right">
                  <div className="action-bar-spacing">
                    <Button bsStyle="success" bsSize="md">
                      <Icon name="upload" /> Upload
                    </Button>
                  </div>
                </Col>
              </Row>

              <hr />

              <Table hover>
                <thead>
                  <tr>
                    <th width="70%">Name</th>
                    <th width="10%" className="text-center">Version</th>
                    <th width="20%" className="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <b>Mark</b>
                    </td>
                    <td className="text-center">1</td>
                    <td className="text-center">Actions</td>
                  </tr>
                </tbody>
              </Table>

            </Col>

            <Col sm={4}>
              <ButtonGroup className="title-dropdown">
                <DropdownButton id="doc_mgt-actions_dropdown" title="Actions" bsStyle="link" bsSize="lg">
                  <MenuItem eventKey="1">All Documents</MenuItem>
                  <MenuItem eventKey="2">My Documents</MenuItem>
                  <MenuItem eventKey="3">Recent Dcouments</MenuItem>
                </DropdownButton>
              </ButtonGroup>
            </Col>
          </Row>

          <Footer />
        </div>
      </div>
    );
  }
}


// Export.
export default Page;
