// Dependencies.
import React from 'react';

// Utility methods.
import utils from '../../../utils';

// Layout components.
import Main from '../../../layouts/main';

// Misc components.
import Login from '../../../components/Login';


// Define class.
class Page extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);

    // Set page title.
    utils.title(props);
  }

  handleLogin(loginName) {
    if (loginName === 'pmap') {
      this.props.history.pushState(null, '/document-management2');
    }
    if (loginName === 'pmap2') {
      this.props.history.pushState(null, '/home');
    }
  }

  // Render method.
  render() {
    return (
      <Main noHeader>
        <Login onLogin={this.handleLogin.bind(this)}/>
      </Main>
    );
  }
}

// Validation.
Page.propTypes = {
  history: React.PropTypes.object
};

// Export.
export default Page;
