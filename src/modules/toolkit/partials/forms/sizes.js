// Dependencies.
import React from 'react';

// Core components.
import {Input} from 'react-bootstrap';

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

        <h2>Sizes</h2>

        <p>Use <code>bsSize</code> to change the size of inputs. It also works with addons and most other options.</p>

        <div className="bs-example">
          <form>
            <Input type="text" bsSize="large" placeholder="Large text" />
            <Input type="text" bsSize="medium" placeholder="Normal text" />
            <Input type="text" bsSize="small" placeholder="Small text" />
          </form>
        </div>

        <Highlight className="html">
          {' \
render() { \n \
  return ( \n \
    <form> \n \
      <Input type="text" bsSize="large" placeholder="Large text" /> \n \
      <Input type="text" bsSize="medium" placeholder="Normal text" /> \n \
      <Input type="text" bsSize="small" placeholder="Small text" /> \n \
    </form> \n \
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
