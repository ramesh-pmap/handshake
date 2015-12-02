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

        <h2>Responsive</h2>

        <p>Add <code>responsive</code> prop to make them scroll horizontally up to small devices (under 768px). When viewing on anything larger than 768px wide, you will not see any difference in these tables.</p>

        <div className="bs-example">
          <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
            </tbody>
          </Table>
        </div>

        <Highlight className="html">
          {' \
render() { \n \
  return ( \n \
<Table responsive> \n \
  <thead> \n \
    <tr> \n \
      <th>#</th> \n \
      <th>Table heading</th> \n \
      <th>Table heading</th> \n \
      <th>Table heading</th> \n \
      <th>Table heading</th> \n \
      <th>Table heading</th> \n \
      <th>Table heading</th> \n \
    </tr> \n \
  </thead> \n \
  <tbody> \n \
    <tr> \n \
      <td>1</td> \n \
      <td>Table cell</td> \n \
      <td>Table cell</td> \n \
      <td>Table cell</td> \n \
      <td>Table cell</td> \n \
      <td>Table cell</td> \n \
      <td>Table cell</td> \n \
    </tr> \n \
    <tr> \n \
      <td>2</td> \n \
      <td>Table cell</td> \n \
      <td>Table cell</td> \n \
      <td>Table cell</td> \n \
      <td>Table cell</td> \n \
      <td>Table cell</td> \n \
      <td>Table cell</td> \n \
    </tr> \n \
    <tr> \n \
      <td>3</td> \n \
      <td>Table cell</td> \n \
      <td>Table cell</td> \n \
      <td>Table cell</td> \n \
      <td>Table cell</td> \n \
      <td>Table cell</td> \n \
      <td>Table cell</td> \n \
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
