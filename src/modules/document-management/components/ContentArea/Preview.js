// Dependencies.
import React from 'react';
import { connect } from 'react-redux';
import { ButtonGroup, Button, Image } from 'react-bootstrap';
import Icon from 'react-fa';

// Redux.
import {
  setContentAreaView,
  setRightPanelAreaView,
  toggleRightSidebar
} from '../../../../redux/actions';

import { DEFAULT, DETAIL } from '../../../../redux/constants';

// Define class.
class Preview extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);
  }

  closePreview() {
    const { dispatch } = this.props;
    dispatch(setContentAreaView(DEFAULT));
  }

  print() {
    const printableContent = document.querySelector('#printableContent');
    const pri = printableContent.contentWindow;
    pri.document.open();
    pri.document.write(printableContent.innerHTML);
    pri.document.close();
    pri.focus();
    pri.print();
  }

  showDetail() {
    const { state, dispatch } = this.props;
    dispatch(setRightPanelAreaView(DETAIL));
    dispatch(toggleRightSidebar(false));
    console.log(state.rightSidebarOpened);
  }

  // Render method.
  render() {
    const { state } = this.props;

    return (
      <div className="preview-panel" style={{height: state.windowDimensions.height - 88}}>
        <div className="preview-panel-toolbar clearfix">
          <div className="pull-left lead">
            sample-word-document.docx
          </div>
          <ButtonGroup className="pull-right">
            <Button bsStyle="link" bsSize="sm" className="text-muted"
              onClick={this.showDetail.bind(this)}>
              <Icon name="list-alt" className="fa-lg" />
              &nbsp;
              View Details
            </Button>
            <Button bsStyle="link" bsSize="sm" className="text-muted"
              onClick={this.print.bind(this)}>
              <Icon name="print" className="fa-lg" />
              &nbsp;
              Print
            </Button>
            <Button bsStyle="link" bsSize="sm" className="text-muted">
              <Icon name="download" className="fa-lg" />
              &nbsp;
              Download
            </Button>
            <Button bsStyle="link" bsSize="sm" className="text-muted">
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
          <div className="pull-right">
          </div>
        </div>
        <Image src="/static/images/sample-doc-preview.png" />

        <iframe id="printableContent" style={{position: 'absolute', top: 0, left: 0, height: 0, width: 0}}>
          <Image src="/static/images/sample-doc-preview.png" />
        </iframe>

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
