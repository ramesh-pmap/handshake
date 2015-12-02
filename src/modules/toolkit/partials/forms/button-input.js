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

    this.state = {
      disabled: true,
      style: null
    };
  }

  resetValidation() {
    this.setState({
      disabled: true,
      style: null
    });
  }

  validationState() {
    let length = this.refs.input.getValue().length;
    let style = 'danger';

    if (length > 10) style = 'success';
    else if (length > 5) style = 'warning';

    let disabled = style !== 'success';

    return { style, disabled };
  }

  handleChange() {
    this.setState( this.validationState() );
  }

  // Render method.
  render() {
    return (
      <div className="doc-section">

        <h2>Button Input Types</h2>

        <p>Form buttons are encapsulated by <code>ButtonInput</code>. Pass in <code>type="reset"</code> or <code>type="submit"</code> to suit your needs. Styling is the same as <code>Button</code>.</p>

        <div className="bs-example">
          <form>
            <Input type="text" ref="input" onChange={this.handleChange.bind(this)} />
            <ButtonInput bsSize="small">Child Text</ButtonInput>
            <ButtonInput type="reset" bsStyle="primary" onClick={this.resetValidation.bind(this)} />
            <ButtonInput type="submit" value="Submit Your Input" bsStyle={this.state.style} bsSize="large" disabled={this.state.disabled} />
          </form>
        </div>

        <Highlight className="">
          {' \
  constructor(props) { \n \
    this.state = { \n \
      disabled: true, \n \
      style: null \n \
    }; \n \
  } \n \
 \n \
  resetValidation() { \n \
    this.setState({ \n \
      disabled: true, \n \
      style: null \n \
    }); \n \
  } \n \
 \n \
  validationState() { \n \
    let length = this.refs.input.getValue().length; \n \
    let style = \'danger\'; \n \
 \n \
    if (length > 10) style = \'success\'; \n \
    else if (length > 5) style = \'warning\'; \n \
 \n \
    let disabled = style !== \'success\'; \n \
 \n \
    return { style, disabled }; \n \
  } \n \
 \n \
  handleChange() { \n \
    this.setState( this.validationState() ); \n \
  } \n \
render() { \n \
  return ( \n \
    <form> \n \
      <Input type="text" ref="input" onChange={this.handleChange.bind(this)} /> \n \
      <ButtonInput bsSize="small">Child Text</ButtonInput> \n \
      <ButtonInput type="reset" bsStyle="primary" onClick={this.resetValidation.bind(this)} /> \n \
      <ButtonInput type="submit" value="Submit Your Input" bsStyle={this.state.style} bsSize="large" disabled={this.state.disabled} /> \n \
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
