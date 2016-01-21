// Dependencies.
import React from 'react';
import { connect } from 'react-redux';
import { toggleModal } from '../../../../redux/actions';

import { Button, Modal } from 'react-bootstrap';

// Define class.
class CheckIn extends React.Component {
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
          <Modal.Title>Check In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>You are about to check in <span className="text-primary">Document2.docx</span>.
          Others will now be able to edit.</p>
          <div className="form-group">
            <input type="checkbox" />
            &nbsp;
            <label className="control-label required">Upload New Version.</label>
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
CheckIn.propTypes = {
  dispatch: React.PropTypes.func,
  state: React.PropTypes.object
};
const mapStateToProps = (state) => ({
  state
});

// Export.
export default connect(mapStateToProps)(CheckIn);
