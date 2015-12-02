import React from 'react';

// Layout components.
import Header from '../components/Header';
import Footer from '../components/Footer';

// Define class.
class Main extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);
  }

  // Render method.
  render() {
    return (
        <div>
          <Header />
          {this.props.children}
          <Footer />
        </div>
    );
  }
}

// Validation.
Main.propTypes = {
  children: React.PropTypes.node
};

// Export.
export default Main;
