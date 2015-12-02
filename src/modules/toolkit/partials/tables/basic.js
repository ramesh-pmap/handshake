// Dependencies.
import React from 'react';

// Core components.
import {Table} from 'react-bootstrap';

// Syntax Highlighter.
import Highlight from 'react-highlight';


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

        <h2>Tables</h2>

        <p>Use the <code>striped</code>, <code>bordered</code>, <code>condensed</code> and <code>hover</code> props to customise the table.</p>

        <div className="bs-example">
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </div>

        <Highlight className="html">
          {' \
render() { \n \
  return ( \n \
<Table striped bordered condensed hover> \n \
  <thead> \n \
    <tr> \n \
      <th>#</th> \n \
      <th>First Name</th> \n \
      <th>Last Name</th> \n \
      <th>Username</th> \n \
    </tr> \n \
  </thead> \n \
  <tbody> \n \
    <tr> \n \
      <td>1</td> \n \
      <td>Mark</td> \n \
      <td>Otto</td> \n \
      <td>@mdo</td> \n \
    </tr> \n \
    <tr> \n \
      <td>2</td> \n \
      <td>Jacob</td> \n \
      <td>Thornton</td> \n \
      <td>@fat</td> \n \
    </tr> \n \
    <tr> \n \
      <td>3</td> \n \
      <td colSpan="2">Larry the Bird</td> \n \
      <td>@twitter</td> \n \
    </tr> \n \
  </tbody> \n \
</Table> \n \
  )\n \
} \
          '}
        </Highlight>

      </div>
    );
  }
}

// Export.
export default Partial;
