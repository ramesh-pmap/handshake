// Dependencies.
import React from 'react';

// Core components.
// import {Grid, Row, Col, Input, Image} from 'react-bootstrap';

// Layouts.
import Main from '../../../layouts/main';

// Utility methods.
import utils from '../../../utils';

// Common components.
import Footer from '../../../components/Footer';

// Icon components.
import FilterableIconGrid from '../../../components/FilterableIconGrid';

// Json file with icons data.
const DataIcons = '../../../static/icons/data-icons2.json';

// Define class.
class Page extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);

    // Set page title.
    utils.title(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    // Fetch Json data.
    fetch(DataIcons).then(r => r.json())
      .then(data => {this.setState({data}); })
      .catch(error => {this.setState({error}); });
  }

  // Render method.
  render() {
    return (
      <Main>
        <div className="page-content-wrapper">
          <FilterableIconGrid icons={this.state.data} />
          <Footer />
        </div>
      </Main>
    );
  }
}


// Export.
export default Page;
