// Dependencies.
import React from 'react';

// Core components.
import {Table} from 'react-bootstrap';


// Define class.
class Partial extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);
  }

  // Render method.
  render() {
    return (
      <div className="doc-section">

        <h2>Props</h2>

        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Defaul</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>active</td>
              <td>boolean</td>
              <td>false</td>
              <td></td>
            </tr>
            <tr>
              <td>blocl</td>
              <td>boolean</td>
              <td>false</td>
              <td></td>
            </tr>
            <tr>
              <td>bsSize</td>
              <td>
                one of:
                <code>"xsmall"</code>,
                <code>"small"</code>,
                <code>"medium"</code>,
                <code>"large"</code>,
                <code>"xs"</code>,
                <code>"sm"</code>,
                <code>"md"</code>,
                <code>"lg</code>"
              </td>
              <td></td>
              <td>Size variants</td>
            </tr>
          </tbody>
        </Table>

      </div>
    );
  }
}

// Export.
export default Partial;
