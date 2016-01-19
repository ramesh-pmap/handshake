// Dependencies.
import React from 'react';
import { connect } from 'react-redux';


// Define class.
class SearchResults extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);
  }


  // Render method.
  render() {
    return (
      <div>
        <h1>Search results page</h1>
      </div>
    );
  }
}

// propTypes.
SearchResults.propTypes = {
  dispatch: React.PropTypes.func,
  state: React.PropTypes.object
};
const mapStateToProps = (state) => ({
  state
});

// Export.
export default connect(mapStateToProps)(SearchResults);
