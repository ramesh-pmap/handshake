// Dependencies.
import React from 'react';
import { connect } from 'react-redux';

// Components.

// Define class.
class Upload extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);
  }


  // Render method.
  render() {
    return (
      <div>
        Upload page
      </div>
    );
  }
}

// propTypes.
Upload.propTypes = {
  dispatch: React.PropTypes.func,
  state: React.PropTypes.object
};
const mapStateToProps = (state) => ({
  state
});

// Export.
export default connect(mapStateToProps)(Upload);
