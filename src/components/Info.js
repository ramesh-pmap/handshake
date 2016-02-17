// Dependencies.
import React from 'react';
import { connect } from 'react-redux';


// UI components
// import {Panel, Button} from 'react-bootstrap';
import { fetchFolders } from '../redux/actions/folders-actions';


// Define class.
class Info extends React.Component {
  handleClickGetFolders() {
    const { state, dispatch } = this.props;
    const token = state.global.authorizationToken;
    const consumerId = state.global.consumerId;
    // Async action sample.
    dispatch(fetchFolders('7059a989-f85b-4193-ac32-a485024e4ea4', token, consumerId));
  }
  // Render method.
  render() {
    const { state } = this.props;
    // Temporary info.
    const consumerId = state.global ? state.global.consumerId : 'No consumerId';
    const token = state.global ? state.global.authorizationToken : 'No Token';
    const error = state.auth.error ? state.auth.error.ErrorMessage : 'No errors';

    const message = `consumerId = ${consumerId} | authorizationToken=${token} | error=${error}`;

    return (
      <div>
        <div>{message}</div>
        <div><button onClick={this.handleClickGetFolders.bind(this)}>Get Folders</button></div>
      </div>
    );
  }
}

// Validation.
Info.propTypes = {
  dispatch: React.PropTypes.func,
  state: React.PropTypes.object
};

const mapStateToProps = (state) => ({
  state
});

// Export.
export default connect(mapStateToProps)(Info);
