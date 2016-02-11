// Dependencies.
import React from 'react';
import { connect } from 'react-redux';

import {
  toggleRightSidebar,
  setRightPanelAreaView,
  setContentAreaView
} from '../../../../redux/actions/ui-actions';
import { ACTIVITY, DETAILFORM, PREVIEW } from '../../../../redux/constants/ui-constants';

// Components.
import {Row, Col, Button, ListGroupItem, ProgressBar} from 'react-bootstrap';
import Icon from 'react-fa';

// import Filestack from 'filepicker-js';

// Define class.
class UploadFile extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);

    this.state = {
      progress: 90,
    };

    // Set API Key for Filestack
    // Filestack.setKey('ApllgXw6MTHiBIIas6R9Dz');
    // Filestack.store(
    //   this.props.file,
    //   (blob) => {
    //     this.setState({
    //       upload: false,
    //       fileInfo: blob
    //     });
    //   },
    //   (error) => {
    //     console.log(error.toString());
    //   },
    //   (p) => {
    //     this.setState({ progress: p });
    //   }
    // );
    const { state } = this.props;

    let url = 'https://devsvc.pmapconnect.com/papi/v1/dm/document/upload';
    let sHeaders = new Headers();
    sHeaders.append('Accept-Language', 'en');
    sHeaders.append('ApplicationType', '4');
    sHeaders.append('Authorization', state.global.authorizationToken);
    sHeaders.append('ConsumerId', state.global.consumerId);
    sHeaders.append('UserId', '12878');
    sHeaders.append('LocationId', '8840');

    let sBody = new FormData();
    sBody.append('file', this.props.file);

    let uploadInit = {
      method: 'POST',
      headers: sHeaders,
      body: sBody
    };

    fetch(url, uploadInit)
      .then(response => {
        return response.json();
      })
      .then(json => {
        console.log(json);
        this.setState({progress: 100});
      });
  }

  handleUploadedFileClick(panelView) {
    const { state, dispatch } = this.props;
    if (!state.ui.rightSidebarOpened) {
      dispatch(toggleRightSidebar(state.ui.rightSidebarOpened));
    }
    dispatch(setRightPanelAreaView(panelView));
    dispatch(setContentAreaView(PREVIEW));
  }

  render() {
    let fileItem;
    if (this.state.progress < 100) {
      fileItem = (
        <ListGroupItem onClick={this.handleUploadedFileClick.bind(this, ACTIVITY)}>
          <Button componentClass="div" bsStyle="link" disabled>
            <Icon name="file-image-o" className="fa-fw fa-lg" />
            &nbsp;
            {this.props.file.name}
          </Button>
          <Row>
            <Col xs={10}>
              <ProgressBar bsStyle="primary" active now={this.state.progress} label="%(percent)s%" />
            </Col>
            <Col xs={2} className="text-right">
              <Button componentClass="div" bsStyle="default" bsSize="xs">
                <Icon name="pause" />
              </Button>
            </Col>
          </Row>
        </ListGroupItem>
      );
    } else {
      fileItem = (
        <ListGroupItem onClick={this.handleUploadedFileClick.bind(this, DETAILFORM)}>
          <Row>
            <Col xs={10}>
              <Button componentClass="div" bsStyle="link">
                <Icon name="file-word-o" className="fa-lg" />
                &nbsp;
                {this.props.file.name}
              </Button>
            </Col>
            <Col xs={2} className="text-right">
              <Button componentClass="div" bsStyle="link" bsSize="xs">
                <Icon name="trash" className="fa-lg text-muted" />
              </Button>
              &nbsp;
              <Button componentClass="div" bsStyle="link" bsSize="xs">
                <Icon name="pencil" className="fa-lg text-muted" />
                &nbsp; Add Details
              </Button>
            </Col>
          </Row>
        </ListGroupItem>
      );
    }
    return (
      <div>
        {fileItem}
      </div>
    );
  }
}


// propTypes.
UploadFile.propTypes = {
  file: React.PropTypes.object,
  dispatch: React.PropTypes.func,
  state: React.PropTypes.object
};

const mapStateToProps = (state) => ({
  state
});

// Export.
export default connect(mapStateToProps)(UploadFile);
