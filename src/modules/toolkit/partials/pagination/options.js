// Dependencies.
import React from 'react';

// Core components.
import {Pagination} from 'react-bootstrap';

// Syntax Highlighter.
import Highlight from 'react-highlight';


// Define class.a
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

        <h2>More options</h2>

        <p>such as <code>first</code>, <code>last</code>, <code>previous</code>, <code>next</code> and <code>ellipsis</code>.</p>

        <div className="bs-example">
          <Pagination
            prev
            next
            first
            last
            ellipsis
            items={20}
            maxButtons={5}
            activePage={1}
            onSelect={this.handleSelect} />
        </div>

        <Highlight className="html">
          {' \
render() { \n \
  return ( \n \
    <Pagination \n \
      prev \n \
      next \n \
      first \n \
      last \n \
      ellipsis \n \
      items={20} \n \
      maxButtons={5} \n \
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
