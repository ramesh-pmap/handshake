import React from 'react';
import { connect } from 'react-redux';

// Define class.
class App extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);
  }

  // Render method.
  render() {
    // const { state } = this.props;
    // console.log('App:state:', state);
    return (
			<div>
				{this.props.children}
			</div>
    );
  }
}

// Validation.
App.propTypes = {
  children: React.PropTypes.node,
  state: React.PropTypes.object
};

const mapStateToProps = (state) => ({
  state
});

// Export.
export default connect(mapStateToProps)(App);
