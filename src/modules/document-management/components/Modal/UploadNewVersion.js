// Dependencies.
import React from 'react';
import { connect } from 'react-redux';
import { toggleModal } from '../../../../redux/actions';

import { Button, Modal, Input, FormControls } from 'react-bootstrap';

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

  // Render method.
  render() {
    const { state } = this.props;

    return (
      <Modal show={state.modalOpened} onHide={this.handleModalButtonClick.bind(this)}>
        <Modal.Header closeButton>
          <Modal.Title>Upload New Version</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Input type="textarea" label="Reason:" maxLength="1000"/>

          <FormControls.Static label="Modified By" value="Joann Kim"/>

          <FormControls.Static label="Modified Date" value="1/22/2016"/>

          <FormControls.Static label="Version" value="2.0"/>

          <div className="form-group">
            <input type="checkbox" />
            &nbsp;
            <label className="control-label required">Check In File</label>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle="default" onClick={this.handleModalButtonClick.bind(this)}>Close</Button>
          <Button bsStyle="primary">Continue</Button>
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
