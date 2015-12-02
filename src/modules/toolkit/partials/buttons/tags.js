// Dependencies.
import React from 'react';

// Core components.
import {ButtonToolbar, Button} from 'react-bootstrap';

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
      <div id="buttons_tags" className="doc-section">

        <h2>Tags</h2>

        <p>The DOM element tag is choosen automatically for you based on the props you supply. Passing a <code>href</code> will result in the button using a <code>&lt;a/&gt;</code> element otherwise a <code>&lt;button/&gt;</code> element will be used.</p>

        <div className="bs-example">
          <ButtonToolbar>
            <Button href="#">Link</Button>
              <Button>Button</Button>
          </ButtonToolbar>
        </div>

        <Highlight className="html">
          {' \
<ButtonToolbar> \n \
  <Button href="#">Link</Button> \n \
  <Button>Button</Button> \n \
</ButtonToolbar> \
          '}
        </Highlight>

      </div>
    );
  }
}

// Export.
export default Partial;
