// Dependencies.
import React from 'react';

// Core components.
import {Row, Col, Input} from 'react-bootstrap';

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

        <h2>Use as a wrapper</h2>

        <p>If <code>type</code> is not set, child element(s) will be rendered instead of an input element.<code>getValue()</code> will not work when used this way.</p>

        <div className="bs-example">
          <Input label="Input wrapper" help="Use this when you need something other than the available input types." wrapperClassName="wrapper">
            <Row>
              <Col xs={6}>
                <input type="text" className="form-control" />
              </Col>
              <Col xs={6}>
                <input type="text" className="form-control" />
              </Col>
            </Row>
          </Input>
        </div>

        <Highlight className="html">
          {' \
render() { \n \
  return ( \n \
    <Input label="Input wrapper" help="Use this when you need something other than the available input types." wrapperClassName="wrapper"> \n \
      <Row> \n \
        <Col xs={6}> \n \
          <input type="text" className="form-control" /> \n \
        </Col> \n \
        <Col xs={6}> \n \
          <input type="text" className="form-control" /> \n \
        </Col> \n \
      </Row> \n \
    </Input> \n \
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
