import React from 'react';

// Define class.
class App extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);
  }

  // Render method.
  render() {
    return (
			<div>
				{this.props.children}
			</div>
    );
  }
}

// Validation.
App.propTypes = {
  children: React.PropTypes.node
};

// Export.
export default App;
