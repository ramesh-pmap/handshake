// Dependencies.
import React from 'react';

// Core components.
import {FormControls} from 'react-bootstrap';

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

        <h2>FormControls.Static</h2>

        <p>Static text can be added to your form controls through the use of the <code>FormControls.Static</code> component.</p>

        <div className="bs-example">
          <form className="form-horizontal">
            <FormControls.Static className="col-xs-10 col-xs-offset-2" value="I'm in a form" />
            <FormControls.Static label="First Name" labelClassName="col-xs-2" wrapperClassName="col-xs-10" value="Billy" />
            <FormControls.Static label="Last Name" labelClassName="col-xs-2" wrapperClassName="col-xs-10">Bob</FormControls.Static>
          </form>
        </div>

        <Highlight className="html">
          {' \
render() { \n \
  return ( \n \
    <form className="form-horizontal"> \n \
      <FormControls.Static className="col-xs-10 col-xs-offset-2" value="I\'m in a form" /> \n \
      <FormControls.Static label="First Name" labelClassName="col-xs-2" wrapperClassName="col-xs-10" value="Billy" /> \n \
      <FormControls.Static label="Last Name" labelClassName="col-xs-2" wrapperClassName="col-xs-10">Bob</FormControls.Static> \n \
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
