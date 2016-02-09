// Dependencies.
import React from 'react';
import { connect } from 'react-redux';
import { ButtonGroup, Button, Image, Alert } from 'react-bootstrap';
import Icon from 'react-fa';

// Redux.
import {
  setContentAreaView,
  setRightPanelAreaView,
  toggleRightSidebar,
  setModalView,
  toggleModal
} from '../../../../redux/actions';

import { DEFAULT, DETAIL, DOWNLOAD, SHARE } from '../../../../redux/constants';

// Define class.
class Preview extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);

    this.state = {
      alertVisible: true
    };
  }

  closePreview() {
    const { dispatch } = this.props;
    dispatch(setContentAreaView(DEFAULT));
  }

  // !!!!!!!!!!!!!!!!!!!!
  // !!! DON'T DELETE !!!
  // !!!!!!!!!!!!!!!!!!!!
  print() {
  //   const printableContent = document.querySelector('#printableContent');
  //   const pri = printableContent.contentWindow;
  //   pri.document.open();
  //   pri.document.write(printableContent.innerHTML);
  //   pri.document.close();
  //   pri.focus();
  //   pri.print();
  }
  // !!!!!!!!!!!!!!!!!!!!

  showDetail() {
    const { state, dispatch } = this.props;
    const rightSidebarOpened = state.ui.rightSidebarOpened;

    dispatch(setRightPanelAreaView(DETAIL));
    if (!rightSidebarOpened) {
      dispatch(toggleRightSidebar(rightSidebarOpened));
    } else if (rightSidebarOpened) {
      dispatch(toggleRightSidebar(rightSidebarOpened));
    }
  }

  iAcknowledgeThisDocument() {
    this.setState({ alertVisible: false });
    alert('Thank you.');
  }

  handleModalToggle(view) {
    const { dispatch } = this.props;
    dispatch(setModalView(view));
    dispatch(toggleModal(true));
  }

  handleContentButtonClick(view) {
    const { dispatch } = this.props;
    dispatch(setContentAreaView(view));
  }

  // Render method.
  render() {
    const { state } = this.props;

    const currentFileId = state.ui.currentFileId;
    const docFiles = state.ui.docFiles;
    let fileData = [];

    // Find selected file in the array.
    if (docFiles) {
      for (let i = 0; i < docFiles.length; i++) {
        if (docFiles[i].doc_id === currentFileId) {
          fileData = docFiles[i];
        }
      }
    }

    const fileAcknowledgement = fileData.doc_acknowledgement;
    const docTitle = fileData.doc_title;

    let acknowledgementAlert = '';
    if (this.state.alertVisible) {
      acknowledgementAlert = (
        <div className="acknowledgement-wrapper">
          <Alert bsStyle="info" className="text-center">
            <p><small>By clicking here, I acknowledge that I have read and understand the content, requirements, and expectations set forth in the attached document.  I understand that if I have any questions, at any time, regarding the document content, requirements, or expectations, I will consult with my immediate supervisor.</small></p>
            <br/>
            <p>
              <Button bsStyle="primary" onClick={this.iAcknowledgeThisDocument.bind(this)}>
                Acknowledge
              </Button>
            </p>
          </Alert>
        </div>
      );
    }

    return (
      <div className="preview-panel" style={{height: state.ui.windowDimensions.height - 88}}>
        <div className="preview-panel-toolbar clearfix">
          <div className="pull-left lead">
          {docTitle}
          </div>
          <ButtonGroup className="pull-right">
            <Button bsStyle="link" bsSize="sm" className="text-muted"
              onClick={this.showDetail.bind(this)}>
              <Icon name="list-alt" className="fa-lg" />
              &nbsp;
              { state.ui.rightSidebarOpened ? 'Hide Details' : 'View Details'}
            </Button>
            <Button bsStyle="link" bsSize="sm" className="text-muted"
              onClick={this.print.bind(this)}>
              <Icon name="print" className="fa-lg" />
              &nbsp;
              Print
            </Button>
            <Button bsStyle="link" bsSize="sm" className="text-muted" onClick={this.handleModalToggle.bind(this, DOWNLOAD)}>
              <Icon name="download" className="fa-lg" />
              &nbsp;
              Download
            </Button>
            <Button bsStyle="link" bsSize="sm" className="text-muted" onClick={this.handleModalToggle.bind(this, SHARE)}>
              <Icon name="share-square-o" className="fa-lg" />
              &nbsp;
              Share
            </Button>
            <Button bsStyle="link" bsSize="sm" className="text-muted" onClick={this.closePreview.bind(this)}>
              <Icon name="times" className="fa-lg" />
              &nbsp;
              Close
            </Button>
          </ButtonGroup>
        </div>
        <Image src="/static/images/sample-doc-preview.png" />

        {fileAcknowledgement === 1 ? acknowledgementAlert : null}

      </div>
    );
  }
}

// propTypes.
Preview.propTypes = {
  dispatch: React.PropTypes.func,
  state: React.PropTypes.object
};
const mapStateToProps = (state) => ({
  state
});

// Export.
export default connect(mapStateToProps)(Preview);
