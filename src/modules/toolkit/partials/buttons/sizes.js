// Dependencies.
import React from 'react';

// Core components.
import {Row, Col, Well, ButtonToolbar, Button} from 'react-bootstrap';

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
      <div id="buttons_sizes" className="doc-section">

        <h2>Sizes</h2>

        <p>Fancy larger or smaller buttons? Add <code>bsSize="large"</code>, <code>bsSize="small"</code>, or <code>bsSize="xsmall"</code> for additional sizes.</p>

        <div className="bs-example">
          <ButtonToolbar>
            <Button bsStyle="primary" bsSize="large">Large button</Button>
            <Button bsSize="large">Large button</Button>
          </ButtonToolbar>
          <ButtonToolbar>
            <Button bsStyle="primary">Default button</Button>
            <Button>Default button</Button>
          </ButtonToolbar>
          <ButtonToolbar>
            <Button bsStyle="primary" bsSize="small">Small button</Button>
            <Button bsSize="small">Small button</Button>
          </ButtonToolbar>
          <ButtonToolbar>
            <Button bsStyle="primary" bsSize="xsmall">Extra small button</Button>
            <Button bsSize="xsmall">Extra small button</Button>
          </ButtonToolbar>
        </div>

        <Highlight className="html">
          {' \
<ButtonToolbar> \n \
  <Button bsStyle="primary" bsSize="large">Large button</Button> \n \
  <Button bsSize="large">Large button</Button> \n \
</ButtonToolbar> \n \
\n \
<ButtonToolbar> \n \
  <Button bsStyle="primary">Default button</Button> \n \
  <Button>Default button</Button> \n \
</ButtonToolbar> \n \
\n \
<ButtonToolbar> \n \
  <Button bsStyle="primary" bsSize="small">Small button</Button> \n \
  <Button bsSize="small">Small button</Button> \n \
</ButtonToolbar> \n \
\n \
<ButtonToolbar> \n \
  <Button bsStyle="primary" bsSize="xsmall">Extra small button</Button> \n \
  <Button bsSize="xsmall">Extra small button</Button> \n \
</ButtonToolbar> \
          '}
        </Highlight>


        <p>Create block level buttons—those that span the full width of a parent— by adding the <code>block</code> prop.</p>

        <div className="bs-example">
          <Row>
            <Col sm={6} smOffset={3}>
              <Well>
                <Button bsStyle="primary" bsSize="large" block>Block level button</Button>
                <Button bsSize="large" block>Block level button</Button>
              </Well>
            </Col>
          </Row>
        </div>

        <Highlight className="html">
          {' \
<div className="well"> \n \
  <Button bsStyle="primary" bsSize="large" block>Block level button</Button> \n \
  <Button bsSize="large" block>Block level button</Button> \n \
</div> \
          '}
        </Highlight>

      </div>
    );
  }
}

// Export.
export default Partial;
