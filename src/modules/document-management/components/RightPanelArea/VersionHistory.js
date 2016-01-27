// Dependencies.
import React from 'react';
import { connect } from 'react-redux';

// Core components.
import {Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import Icon from 'react-fa';

// Misc components.
import DetailViewDropdown from './DetailViewDropdown';

// Define class.
class VersionHistory extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);

    this.state = {
      selectedKey: 'default',
      selectedValue: 'All Tasks',
    };
  }

  handleSelect(e, key) {
    this.setState({ selectedValue: e.currentTarget.outerText });
    this.setState({ selectedKey: key });
  }

  // Render method.
  render() {
    return (
      <div>

        <div className="fixed-title">
          <DetailViewDropdown />
        </div>

        <ListGroup bsStyle="success">

          <ListGroupItem>
            <div className="list-card neutral">
              <h4>Version 2 - FINAL (CURRENT)</h4>
              <Icon name="file-word-o" className="fa-fw fa-lg text-muted corner-icon" />
              <div className="meta-wrapper">
                <div className="clearfix">
                  <div className="pull-left">
                    <strong># of Drafts:</strong> 2
                  </div>
                  <div className="pull-right">10/11/2015</div>
                </div>
                <br/>
                <div className="clearfix">
                  <div className="pull-left">
                    <strong>Views:</strong>
                    <Button bsStyle="link" bsSize="xs">105</Button>
                  </div>
                  <div className="pull-right"></div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor...</p>
                <div className="clearfix">
                  <p className="pull-left hide">
                    <Button bsStyle="primary" bsSize="xs">
                      <Icon name="repeat" className="fa-fw fa-flip-horizontal" /> Restore
                    </Button>
                  </p>
                  <p className="pull-right">
                    <Button bsStyle="link" bsSize="xs">View Details</Button>
                  </p>
                </div>
              </div>
            </div>
          </ListGroupItem>

          <ListGroupItem>
            <div className="list-card neutral">
              <h4>Version 1</h4>
              <Icon name="file-word-o" className="fa-fw fa-lg text-muted corner-icon" />
              <div className="meta-wrapper">
                <div className="clearfix">
                  <div className="pull-left">
                    <strong># of Drafts:</strong> 2
                  </div>
                  <div className="pull-right">9/18/2015</div>
                </div>
                <br/>
                <div className="clearfix">
                  <div className="pull-left">
                    <strong>Views:</strong>
                    <Button bsStyle="link" bsSize="xs">105</Button>
                  </div>
                  <div className="pull-right"></div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor...</p>
                <div className="clearfix">
                  <p className="pull-left">
                    <Button bsStyle="primary" bsSize="xs">
                    <Icon name="repeat" className="fa-fw fa-flip-horizontal" /> Restore
                    </Button>
                  </p>
                  <p className="pull-right">
                    <Button bsStyle="link" bsSize="xs">View Details</Button>
                  </p>
                </div>
              </div>
            </div>
          </ListGroupItem>

        </ListGroup>

      </div>
    );
  }
}

// propTypes.
VersionHistory.propTypes = {
  dispatch: React.PropTypes.func,
  state: React.PropTypes.object
};
const mapStateToProps = (state) => ({
  state
});

// Export.
export default connect(mapStateToProps)(VersionHistory);
