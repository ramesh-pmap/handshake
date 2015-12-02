// Dependencies.
import React from 'react';

// Core components.
import {Grid, Row, Col, Thumbnail} from 'react-bootstrap';

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
      <div id="media_thumbnails" className="doc-section">

        <h2>Anchor Thumbnail</h2>

        <p>Creates an anchor wrapping an image.</p>

        <div className="bs-example">
          <Grid>
            <Row>
              <Col xs={6} md={3}>
                <Thumbnail href="#media_thumbnails" alt="200x200" src="http://placehold.it/200x200" />
              </Col>
              <Col xs={6} md={3}>
                <Thumbnail href="#media_thumbnails" alt="200x200" src="http://placehold.it/200x200" />
              </Col>
              <Col xs={6} md={3}>
                <Thumbnail href="#media_thumbnails" alt="200x200" src="http://placehold.it/200x200" />
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
        <Col xs={6} md={3}> \n \
          <Thumbnail href="#" alt="200x200" src="http://placehold.it/200x200" /> \n \
        </Col> \n \
        <Col xs={6} md={3}> \n \
          <Thumbnail href="#" alt="200x200" src="http://placehold.it/200x200" /> \n \
        </Col> \n \
        <Col xs={6} md={3}> \n \
          <Thumbnail href="#" alt="200x200" src="http://placehold.it/200x200" /> \n \
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
