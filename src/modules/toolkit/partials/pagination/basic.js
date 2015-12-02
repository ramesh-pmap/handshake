// Dependencies.
import React from 'react';

// Core components.
import {Pagination} from 'react-bootstrap';

// Syntax Highlighter.
import Highlight from 'react-highlight';


// Define class.
class Partial extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);

    this.state = {
      activePage: 1
    };
  }

  handleSelect(event, selectedEvent) {
    event.preventDefault();
    this.setState({
      activePage: selectedEvent.eventKey
    });
  }

  // Render method.
  render() {
    return (
      <div className="doc-section">

        <p>Provide pagination links for your site or app with the multi-page pagination component. Set <code>items</code> to the number of pages. <code>activePage</code> prop dictates which page is active.</p>

        <div className="bs-example">
          <Pagination
            bsSize="large"
            items={10}
            activePage={this.state.activePage}
            onSelect={this.handleSelect} />
          <br />

          <Pagination
            bsSize="medium"
            items={10}
            activePage={this.state.activePage}
            onSelect={this.handleSelect} />
          <br />

          <Pagination
            bsSize="small"
            items={10}
            activePage={this.state.activePage}
            onSelect={this.handleSelect} />
        </div>

        <Highlight className="">
          {' \
constructor(props) { \n \
  // Pass `props` into scope. \n \
  super(props); \n \
 \n \
  this.state = { \n \
    activePage: 1 \n \
  } \n \
} \n \
 \n \
handleSelect(event, selectedEvent) { \n \
  event.preventDefault(); \n \
  this.setState({ \n \
    activePage: selectedEvent.eventKey \n \
  }); \n \
} \n \
 \n \
render() { \n \
  return ( \n \
    <Pagination \n \
      bsSize="large" \n \
      items={10} \n \
      activePage={this.state.activePage} \n \
      onSelect={this.handleSelect} /> \n \
    <br /> \n \
 \n \
    <Pagination \n \
      bsSize="medium" \n \
      items={10} \n \
      activePage={this.state.activePage} \n \
      onSelect={this.handleSelect} /> \n \
    <br /> \n \
 \n \
    <Pagination \n \
      bsSize="small" \n \
      items={10} \n \
      activePage={this.state.activePage} \n \
      onSelect={this.handleSelect} /> \n \
  }\n \
} \
          '}
        </Highlight>

      </div>
    );
  }
}

// Export.
export default Partial;
