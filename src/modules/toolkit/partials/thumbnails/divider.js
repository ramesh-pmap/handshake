// Dependencies.
import React from 'react';

// Core components.
import {Grid, Row, Col, Thumbnail, Button} from 'react-bootstrap';

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

        <h2>Divider Thumbnail</h2>

        <p>Creates a divider wrapping an image and other children elements.</p>

        <div className="bs-example">
          <Grid>
            <Row>
              <Col xs={6} md={4}>
                <Thumbnail src="http://placehold.it/360x200" alt="360x200">
                  <h3>Thumbnail label</h3>
                  <p>Description</p>
                  <p>
                    <Button bsStyle="primary">Button</Button>&nbsp;
                    <Button bsStyle="default">Button</Button>
                  </p>
                </Thumbnail>
              </Col>
              <Col xs={6} md={4}>
                <Thumbnail src="http://placehold.it/360x200" alt="360x200">
                  <h3>Thumbnail label</h3>
                  <p>Description</p>
                  <p>
                    <Button bsStyle="primary">Button</Button>&nbsp;
                    <Button bsStyle="default">Button</Button>
                  </p>
                </Thumbnail>
              </Col>
              <Col xs={6} md={4}>
                <Thumbnail src="http://placehold.it/360x200" alt="360x200">
                  <h3>Thumbnail label</h3>
                  <p>Description</p>
                  <p>
                    <Button bsStyle="primary">Button</Button>&nbsp;
                    <Button bsStyle="default">Button</Button>
                  </p>
                </Thumbnail>
              </Col>
            </Row>
          </Grid>
        </div>

        <Highlight className="html">
          {' \
render() { \n \
  return ( \n \
    <Grid> \n \
      <Row> \n \
        <Col xs={6} md={4}> \n \
          <Thumbnail src="http://placehold.it/360x200" alt="360x200"> \n \
            <h3>Thumbnail label</h3> \n \
            <p>Description</p> \n \
            <p> \n \
              <Button bsStyle="primary">Button</Button>&nbsp; \n \
              <Button bsStyle="default">Button</Button> \n \
            </p> \n \
          </Thumbnail> \n \
        </Col> \n \
        <Col xs={6} md={4}> \n \
          <Thumbnail src="http://placehold.it/360x200" alt="360x200"> \n \
            <h3>Thumbnail label</h3> \n \
            <p>Description</p> \n \
            <p> \n \
              <Button bsStyle="primary">Button</Button>&nbsp; \n \
              <Button bsStyle="default">Button</Button> \n \
            </p> \n \
          </Thumbnail> \n \
        </Col> \n \
        <Col xs={6} md={4}> \n \
          <Thumbnail src="http://placehold.it/360x200" alt="360x200"> \n \
            <h3>Thumbnail label</h3> \n \
            <p>Description</p> \n \
            <p> \n \
              <Button bsStyle="primary">Button</Button>&nbsp; \n \
              <Button bsStyle="default">Button</Button> \n \
            </p> \n \
          </Thumbnail> \n \
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
