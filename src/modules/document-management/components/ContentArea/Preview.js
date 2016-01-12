// Dependencies.
import React from 'react';
import { connect } from 'react-redux';
import { ButtonGroup, Button, Image } from 'react-bootstrap';
import Icon from 'react-fa';

// Const.
import { DEFAULT /* , UPLOAD, SEARCH_RESULTS} */ } from '../../../../redux/constants';

// Define class.
class Preview extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);
  }

  closePreview() {
    this.props.loadContentAreaView(DEFAULT);
  }

  // Render method.
  render() {
    return (
      <div className="preview-panel">
        <div className="preview-panel-toolbar clearfix">
          <div className="pull-left lead">
            sample-word-document.docx
          </div>
          <ButtonGroup className="pull-right">
            <Button bsStyle="link" bsSize="sm" className="text-muted">
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
      </div>
    );
  }
}

// propTypes.
Preview.propTypes = {
  loadContentAreaView: React.PropTypes.func,
  dispatch: React.PropTypes.func,
  state: React.PropTypes.object
};
const mapStateToProps = (state) => ({
  state
});

// Export.
export default connect(mapStateToProps)(Preview);
