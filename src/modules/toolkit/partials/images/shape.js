// Dependencies.
import React from 'react';

// Core components.
import {Grid, Row, Col, Image} from 'react-bootstrap';

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

        <h2>Image Shapes</h2>

        <p>Use the <code>rounded</code>, <code>circle</code> and <code>thumbnail</code> props to customise the image.</p>

        <div className="bs-example">
          <Grid>
            <Row>
              <Col xs={6} md={4}>
                <Image src="http://placehold.it/180x180" rounded />
              </Col>
              <Col xs={6} md={4}>
                <Image src="http://placehold.it/180x180" circle />
              </Col>
              <Col xs={6} md={4}>
                <Image src="http://placehold.it/180x180" thumbnail />
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
          <Image src="http://placehold.it/180x180" rounded /> \n \
        </Col> \n \
        <Col xs={6} md={4}> \n \
          <Image src="http://placehold.it/180x180" circle /> \n \
        </Col> \n \
        <Col xs={6} md={4}> \n \
          <Image src="http://placehold.it/180x180" thumbnail /> \n \
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
