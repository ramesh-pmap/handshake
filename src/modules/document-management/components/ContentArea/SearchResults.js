// Dependencies.
import React from 'react';
import { connect } from 'react-redux';

// Core components.
import {Row, Col, Button, ListGroup, ListGroupItem, Input} from 'react-bootstrap';
import Icon from 'react-fa';
import Select from 'react-select';


// Define class.
class SearchResults extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);

    this.state = {
      isFiltered: true
    };
  }

  hangleIconCheckChange(e) {
    let isChecked = e.target.checked;
    console.log(isChecked);
    // e.target.dataset.checked = !isChecked;
  }

  handleFilterToggle() {
    this.setState({ isFiltered: !this.state.isFiltered });
  }

  // Render method.
  render() {
    return (
      <div style={{marginTop: '20px'}}>

        <div className="card">

          {
            this.state.isFiltered ?
              <div>
                <h4>Filter</h4>
                <hr/>
                <Row className="form-horizontal">

                  <Col sm={6}>
                    <Input type="text" label="Document Name" labelClassName="col-sm-4" wrapperClassName="col-sm-8" />
                  </Col>

                  <Col sm={6}>
                    <div className="form-group">
                      <label className="control-label col-sm-4">
                        Document Level:
                      </label>
                      <Col sm={8}>
                        <Select
                          name="form-control"
                          value=""
                          options={[
                            { value: '1', label: 'Level 1'},
                            { value: '2', label: 'Level 2'},
                            { value: '3', label: 'Level 3'},
                            { value: '4', label: 'Level 4'}
                          ]}
                          multi
                        />
                      </Col>
                    </div>
                  </Col>

                  <Col sm={6}>
                    <div className="form-group">
                      <label className="control-label col-sm-4">
                        Document Owner:
                      </label>
                      <Col sm={8}>
                        <Select
                          name="form-control"
                          value=""
                          options={[
                            { value: 'John Smith', label: 'John Smith' },
                            { value: 'Bob Roberts', label: 'Bob Roberts' },
                            { value: 'Janette Walls', label: 'Janette Walls' }
                          ]}
                          multi
                        />
                      </Col>
                    </div>
                  </Col>

                  <Col sm={6}>
                    <div className="form-group">
                      <label className="control-label col-sm-4">
                        Business Process:
                      </label>
                      <Col sm={8}>
                        <Select
                          name="form-control"
                          value=""
                          options={[
                            { value: 'Lorem', label: 'Lorem' },
                            { value: 'Ipsum', label: 'Ipsum' },
                            { value: 'Dolor', label: 'Dolor' }
                          ]}
                          multi
                        />
                      </Col>
                    </div>
                  </Col>

                  <Col sm={6}>
                    <Input type="text" label="Tags/Keywords" labelClassName="col-sm-4" wrapperClassName="col-sm-8" help="Separate tags with comma." />
                  </Col>

                </Row>

                <Row>
                  <Col sm={12} className="text-right">
                    <Button bsStyle="default" bsSize="sm">Cancel</Button>
                    &nbsp;
                    <Button bsStyle="primary" bsSize="sm" onClick={this.handleFilterToggle.bind(this)}>Apply</Button>
                  </Col>
                </Row>
              </div>

            :

            <div className="Select--multi clearfix">
              <div className="pull-left">
                <h4 className="Select-title">Filtering by:</h4>
                &nbsp;
                <div className="Select-item">
                    <span className="Select-item-icon">×</span>
                    <span className="Select-item-label">Document Level: 1, 2</span>
                </div>
                <div className="Select-item">
                    <span className="Select-item-icon">×</span>
                    <span className="Select-item-label">Document Owner: John Smith</span>
                </div>
              </div>
              <div className="pull-right">
                <Button bsStyle="primary" bsSize="sm" onClick={this.handleFilterToggle.bind(this)}>Open Filter</Button>
              </div>
            </div>

          }

        </div>

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

              {
                this.state.isFiltered ?

                  <div>
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
                  </div>

                : null
              }

            </ListGroup>

          </div>
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
