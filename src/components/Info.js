// Dependencies.
import React from 'react';
import { connect } from 'react-redux';


// UI components
// import {Panel, Button} from 'react-bootstrap';
import { fetchFolder } from '../redux/actions/folder-actions';
import utils from '../utils';


// Define class.
class Info extends React.Component {

  handleClickGetFolders() {
    const { state, dispatch } = this.props;
    const token = state.global.authorizationToken;
    const consumerId = state.global.consumerId;
    // Async action sample.
    dispatch(fetchFolder('root', token, consumerId));
  }

  handleClickSaveFolders() {
    const { state } = this.props;
    utils.save(state.folder.items);
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
        {/*
        <div><button onClick={this.handleClickGetFolders.bind(this)}>Get Folders</button></div>
        <div><button onClick={this.handleClickSaveFolders.bind(this)}>Save Folders json</button></div>
        */}
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
