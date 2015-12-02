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

        <h2>Horizontal forms</h2>

        <p>Use <code>labelClassName</code> and <code>wrapperClassName</code> properties to add col classes manually. <code>checkbox</code> and <code>radio</code> types need special treatment because label wraps input.</p>

        <div className="bs-example">
          <form className="form-horizontal">
            <Input type="text" label="Text" labelClassName="col-xs-2" wrapperClassName="col-xs-10" />
            <Input type="textarea" label="Textarea" labelClassName="col-xs-2" wrapperClassName="col-xs-10" />
            <Input type="checkbox" label="Checkbox" wrapperClassName="col-xs-offset-2 col-xs-10" help="Offset is applied to wrapper." />
          </form>
        </div>

        <Highlight className="html">
          {' \
render() { \n \
  return ( \n \
    <form className="form-horizontal"> \n \
      <Input type="text" label="Text" labelClassName="col-xs-2" wrapperClassName="col-xs-10" /> \n \
      <Input type="textarea" label="Textarea" labelClassName="col-xs-2" wrapperClassName="col-xs-10" /> \n \
      <Input type="checkbox" label="Checkbox" wrapperClassName="col-xs-offset-2 col-xs-10" help="Offset is applied to wrapper." /> \n \
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
