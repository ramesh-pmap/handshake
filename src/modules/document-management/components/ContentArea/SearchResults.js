// Dependencies.
import React from 'react';
import { connect } from 'react-redux';

// Core components.
import {Row, Col, Button, ListGroup, ListGroupItem} from 'react-bootstrap';
import Icon from 'react-fa';


// Define class.
class SearchResults extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);
  }

  hangleIconCheckChange(e) {
    let isChecked = e.target.checked;
    console.log(isChecked);
    // e.target.dataset.checked = !isChecked;
  }

  // Render method.
  render() {
    return (
      <div className="card">
        <div className="file_manager-list_header">

          <Row className="file_manager-list_titles hidden-xs">
            <Col sm={6}>
              <input type="checkbox" onClick={this.hangleIconCheckChange.bind(this)} />
              &nbsp; &nbsp;
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

          <ListGroup className="file_manager-list">

            <ListGroupItem>
              <Row>
                <Col sm={6}>
                  <input type="checkbox" onClick={this.hangleIconCheckChange.bind(this)} />
                  &nbsp;&nbsp;
                  <Button href="#/" bsStyle="link" bsSize="xs">
                    <Icon name="folder-open" className="fa-fw fa-lg text-muted" />
                    &nbsp;
                    Folder Name
                  </Button>
                </Col>
                <Col sm={1} className="text-center hidden-xs" />
                <Col sm={2} className="text-center text-left-xs">
                  <span className="visible-xs-inline">Date Modified: </span>
                  12/3/2015
                </Col>
              </Row>
            </ListGroupItem>

            <ListGroupItem>
              <Row>
                <Col sm={6}>
                  <input type="checkbox" onClick={this.hangleIconCheckChange.bind(this)} />
                  &nbsp;&nbsp;
                  <Button href="#/" bsStyle="link" bsSize="xs">
                    <Icon name="file-word-o" className="fa-fw fa-lg text-muted" />
                    &nbsp;
                    File Name
                  </Button>
                </Col>
                <Col sm={1} className="text-center text-left-xs">
                  <span className="visible-xs-inline">Version: </span>
                  <Button href="#" bsStyle="link" bsSize="xs">1</Button>
                </Col>
                <Col sm={2} className="text-center text-left-xs">
                  <span className="visible-xs-inline">Date Modified: </span>
                  12/3/2015
                </Col>
                <Col sm={3} className="text-center text-left-xs">
                  Status
                </Col>
              </Row>
            </ListGroupItem>

          </ListGroup>

        </div>
      </div>
    );
  }
}

// propTypes.
SearchResults.propTypes = {
  dispatch: React.PropTypes.func,
  state: React.PropTypes.object
};
const mapStateToProps = (state) => ({
  state
});

// Export.
export default connect(mapStateToProps)(SearchResults);
