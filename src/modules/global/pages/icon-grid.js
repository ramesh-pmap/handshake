// Dependencies.
import React from 'react';

// Core components.
// import {Grid, Row, Col, Input, Image} from 'react-bootstrap';

// Utility methods.
import utils from '../../../utils';

// Common components.
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Sidebar from '../../../components/SidebarLeft';

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
      <div id="shellWrapper" className="shell-wrapper doc-wrapper">

        <Sidebar title="mars" />

        <Header />

        <div className="page-content-wrapper">
          <FilterableIconGrid icons={this.state.data} />

          <Footer />

        </div>
      </div>
    );
  }
}


// Export.
export default Page;
