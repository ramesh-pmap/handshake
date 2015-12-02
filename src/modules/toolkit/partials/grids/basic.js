// Dependencies.
import React from 'react';

// Core components.
import {Grid, Row, Col} from 'react-bootstrap';

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

        <h2>Title</h2>

        <p>Text <code>CODE</code> and <code>&lt;COMPONENT /&gt;</code> more text.</p>

        <div className="bs-example">
          <Grid>
            <Row className="show-grid">
              <Col xs={12} md={8}><code>&lt;{'Col xs={12} md={8}'} /&gt;</code></Col>
              <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
            </Row>

            <Row className="show-grid">
              <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
              <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
              <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
            </Row>

            <Row className="show-grid">
              <Col xs={6} xsOffset={6}><code>&lt;{'Col xs={6} xsOffset={6}'} /&gt;</code></Col>
            </Row>

            <Row className="show-grid">
              <Col md={6} mdPush={6}><code>&lt;{'Col md={6} mdPush={6}'} /&gt;</code></Col>
              <Col md={6} mdPull={6}><code>&lt;{'Col md={6} mdPull={6}'} /&gt;</code></Col>
            </Row>
          </Grid>
        </div>

        <Highlight className="html">
          {' \
render() { \n \
  return ( \n \
    <Grid> \n \
      <Row> \n \
        <Col xs={12} md={8}> \n \
          <code>&lt;{\'Col xs={12} md={8}\'} /&gt;</code> \n \
        </Col> \n \
        <Col xs={6} md={4}> \n \
          <code>&lt;{\'Col xs={6} md={4}\'} /&gt;</code> \n \
        </Col> \n \
      </Row> \n \
   \n \
      <Row> \n \
        <Col xs={6} md={4}> \n \
          <code>&lt;{\'Col xs={6} md={4}\'} /&gt;</code> \n \
        </Col> \n \
        <Col xs={6} md={4}> \n \
          <code>&lt;{\'Col xs={6} md={4}\'} /&gt;</code> \n \
        </Col> \n \
        <Col xs={6} md={4}> \n \
          <code>&lt;{\'Col xs={6} md={4}\'} /&gt;</code> \n \
        </Col> \n \
      </Row> \n \
   \n \
      <Row> \n \
        <Col xs={6} xsOffset={6}> \n \
          <code>&lt;{\'Col xs={6} xsOffset={6}\'} /&gt;</code> \n \
        </Col> \n \
      </Row> \n \
   \n \
      <Row> \n \
        <Col md={6} mdPush={6}> \n \
          <code>&lt;{\'Col md={6} mdPush={6}\'} /&gt;</code> \n \
        </Col> \n \
        <Col md={6} mdPull={6}> \n \
          <code>&lt;{\'Col md={6} mdPull={6}\'} /&gt;</code> \n \
        </Col> \n \
      </Row> \n \
    </Grid> \n \
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
