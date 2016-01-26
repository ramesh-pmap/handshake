// Dependencies.
import React from 'react';
import { connect } from 'react-redux';
import { toggleModal } from '../../../../redux/actions';

import { Button, Modal } from 'react-bootstrap';

// Define class.
class Download extends React.Component {
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
          <Modal.Title>Download</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Custom Client Download Message</p>
          <div className="form-group">
            <input type="checkbox" />
            &nbsp;
            <label className="control-label">Check Out File</label>
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
Download.propTypes = {
  dispatch: React.PropTypes.func,
  state: React.PropTypes.object
};
const mapStateToProps = (state) => ({
  state
});

// Export.
export default connect(mapStateToProps)(Download);
