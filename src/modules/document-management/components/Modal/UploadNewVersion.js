// Dependencies.
import React from 'react';
import { connect } from 'react-redux';
import { toggleModal } from '../../../../redux/actions';

import { Button, Modal, Input, FormControls } from 'react-bootstrap';
import Icon from 'react-fa';
import Dropzone from 'react-dropzone';

// Define class.
class UploadNewVersion extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);
  }

  handleModalButtonClick() {
    const { dispatch } = this.props;
    dispatch(toggleModal(false));
  }

  // Dropzone.
  onDrop(uploadedFiles) {
    this.setState({ files: uploadedFiles });
    // console.log(uploadedFiles);
  }
  onOpenClick() {
    this.refs.dropzone.open();
  }

  // Render method.
  render() {
    const { state } = this.props;

    return (
      <Modal show={state.modalOpened} onHide={this.handleModalButtonClick.bind(this)}>
        <Modal.Header closeButton>
          <Modal.Title>New Version</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Dropzone id="Upload_Dropzone" ref="dropzone" onDrop={this.onDrop.bind(this)} className="dropzone">
            <p>
              <Icon name="upload" className="fa-2x text-success" />
            </p>
            Drag and drop files here
            <br className="hidden-xs"/>&nbsp;
            or click to <a>select files</a> from your computer.
          </Dropzone>

          <Input type="textarea" label="Reason:" maxLength="1000" labelClassName="required"/>

          <FormControls.Static label="Modified By" value="Joann Kim"/>

          <FormControls.Static label="Modified Date" value="1/22/2016"/>

          <FormControls.Static label="Version" value="2.A Draft"/>

          <div className="form-group">
            <input type="checkbox" />
            &nbsp;
            <label className="control-label">Keep this document checked out</label>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle="default" onClick={this.handleModalButtonClick.bind(this)}>Close</Button>
          <Button bsStyle="success">Continue</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

// propTypes.
UploadNewVersion.propTypes = {
  dispatch: React.PropTypes.func,
  state: React.PropTypes.object
};
const mapStateToProps = (state) => ({
  state
});

// Export.
export default connect(mapStateToProps)(UploadNewVersion);
