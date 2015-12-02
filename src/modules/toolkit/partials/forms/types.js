// Dependencies.
import React from 'react';

// Core components.
import {Input, ButtonInput} from 'react-bootstrap';

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

        <h2>Types</h2>

        <p>Supports select, <code>textarea</code>, as well as standard HTML input types. <code>getValue()</code> returns an array for multiple select.</p>

        <div className="bs-example">
          <form>
            <Input type="text" label="Text" placeholder="Enter text" />
            <Input type="email" label="Email Address" placeholder="Enter email" />
            <Input type="password" label="Password" />
            <Input type="file" label="File" help="[Optional] Block level help text" />
            <Input type="checkbox" label="Checkbox" checked readOnly />
            <Input type="radio" label="Radio" checked readOnly />
            <Input type="select" label="Select" placeholder="select">
              <option value="select">select</option>
              <option value="other">...</option>
            </Input>
            <Input type="select" label="Multiple Select" multiple>
              <option value="select">select (multiple)</option>
              <option value="other">...</option>
            </Input>
            <Input type="textarea" label="Text Area" placeholder="textarea" />
            <ButtonInput value="Button Input" />
            <ButtonInput type="reset" value="Reset Button" />
            <ButtonInput type="submit" value="Submit Button" />
          </form>
        </div>

        <Highlight className="html">
          {' \
render() { \n \
  return ( \n \
    <form> \n \
      <Input type="text" label="Text" placeholder="Enter text" /> \n \
      <Input type="email" label="Email Address" placeholder="Enter email" /> \n \
      <Input type="password" label="Password" /> \n \
      <Input type="file" label="File" help="[Optional] Block level help text" /> \n \
      <Input type="checkbox" label="Checkbox" checked readOnly /> \n \
      <Input type="radio" label="Radio" checked readOnly /> \n \
      <Input type="select" label="Select" placeholder="select"> \n \
        <option value="select">select</option> \n \
        <option value="other">...</option> \n \
      </Input> \n \
      <Input type="select" label="Multiple Select" multiple> \n \
        <option value="select">select (multiple)</option> \n \
        <option value="other">...</option> \n \
      </Input> \n \
      <Input type="textarea" label="Text Area" placeholder="textarea" /> \n \
      <ButtonInput value="Button Input" /> \n \
      <ButtonInput type="reset" value="Reset Button" /> \n \
      <ButtonInput type="submit" value="Submit Button" /> \n \
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
