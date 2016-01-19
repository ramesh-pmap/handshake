// Dependencies.
import React from 'react';
import { connect } from 'react-redux';
import { toggleModal } from '../../../../redux/actions';

import { Button, Modal, Input } from 'react-bootstrap';
import Icon from 'react-fa';


// Define class.
class Share extends React.Component {
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
    const innerIcon = <Icon name="file" />;

    return (
      <Modal show={state.modalOpened} onHide={this.handleModalButtonClick.bind(this)}>
        <Modal.Header closeButton>
          <Modal.Title>Share (Document Name)</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Input type="text" label="Document:" value="Document1.docx" addonAfter={innerIcon} />

          <p className="text-muted pull-right">Document Link: <span>https:&#47;&#47;bit.ly/abc123</span></p>
          <Input type="select" label="Send to:" labelClassName=" required">
            <option>John Smith</option>
            <option>Bob Roberts</option>
            <option>Janette Walls</option>
          </Input>
          <Input type="textarea" label="Comment:" maxLength="1000"/>
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle="default" onClick={this.handleModalButtonClick.bind(this)}>Close</Button>
          <Button bsStyle="primary">Send</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

// propTypes.
Share.propTypes = {
  dispatch: React.PropTypes.func,
  state: React.PropTypes.object
};
const mapStateToProps = (state) => ({
  state
});

// Export.
export default connect(mapStateToProps)(Share);
