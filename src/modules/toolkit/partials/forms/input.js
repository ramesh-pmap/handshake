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

    this.state = {
      value: ''
    };
  }

  validationState() {
    let length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  handleChange() {
    // This could also be done using ReactLink:
    // http://facebook.github.io/react/docs/two-way-binding-helpers.html
    this.setState({
      value: this.refs.input.getValue()
    });
  }

  // Render method.
  render() {
    return (
      <div className="doc-section">

        <h2>Title</h2>

        <p>The <code>&lt;Input /&gt;</code> component renders an input in Bootstrap wrappers. Supports label, help, text input add-ons, validation and use as wrapper. Use <code>getValue()</code> or <code>getChecked()</code> to get the current state. The helper method <code>getInputDOMNode()</code> returns the internal input element. If you don't want the <code>form-group</code> class applied apply the prop named <code>standalone</code>.</p>

        <div className="bs-example">
          <Input
            type="text"
            value={this.state.value}
            placeholder="Enter text"
            label="Working example with validation"
            help="Validation is based on string length."
            bsStyle={this.validationState()}
            hasFeedback
            ref="input"
            groupClassName="group-class"
            labelClassName="label-class"
            onChange={this.handleChange.bind(this)} />
        </div>

        <Highlight className="">
          {' \
constructor(props) { \n \
  // Pass `props` into scope. \n \
  super(props); \n \
 \n \
  this.state = { \n \
    value: \'\' \n \
  }; \n \
} \n \
 \n \
validationState() { \n \
  let length = this.state.value.length; \n \
  if (length > 10) return \'success\'; \n \
  else if (length > 5) return \'warning\'; \n \
  else if (length > 0) return \'error\'; \n \
} \n \
 \n \
handleChange() { \n \
  this.setState({ \n \
    value: this.refs.input.getValue() \n \
  }); \n \
} \n \
 \n \
render() { \n \
  return ( \n \
    <Input \n \
      type="text" \n \
      value={this.state.value} \n \
      placeholder="Enter text" \n \
      label="Working example with validation" \n \
      help="Validation is based on string length." \n \
      bsStyle={this.validationState()} \n \
      hasFeedback \n \
      ref="input" \n \
      groupClassName="group-class" \n \
      labelClassName="label-class" \n \
      onChange={this.handleChange.bind(this)} /> \n \
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
