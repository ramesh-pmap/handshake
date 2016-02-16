// Dependencies.
import React from 'react';

// UI components
// import {Panel, Button} from 'react-bootstrap';


// Define class.
class Info extends React.Component {

  // Render method.
  render() {
    const message = this.props.message;

    return (
      <div>
        {message}
      </div>
    );
  }
}

// Validation.
Info.propTypes = {
  message: React.PropTypes.string
};

// Export.
export default Info;
