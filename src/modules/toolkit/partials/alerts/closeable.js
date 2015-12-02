// Dependencies.
import React from 'react';

// Core components.
import {Alert, Button} from 'react-bootstrap';

// Syntax Highlighter.
import Highlight from 'react-highlight';


// Define class.
class Partial extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);

    this.state = {alertVisible: true};
  }

  handleAlertDismiss() {
    this.setState({alertVisible: false});
  }

  handleAlertShow() {
    this.setState({alertVisible: true});
  }

  // Render method.
  render() {
    return (
      <div className="doc-section">

        <h2>Closeable alerts</h2>

        <p>just pass in a <code>onDismiss</code> function.</p>

        <div className="bs-example">
          {(() => {
            if (this.state.alertVisible) {
              return (
                <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss.bind(this)}>
                  <h4>Oh snap! You got an error!</h4>
                  <p>Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.</p>
                  <p>
                    <Button bsStyle="danger">Take this action</Button>
                    <span> or </span>
                    <Button onClick={this.handleAlertDismiss.bind(this)}>Hide Alert</Button>
                  </p>
                </Alert>
                );
            }

            return (<Button onClick={this.handleAlertShow.bind(this)}>Show Alert</Button>);
          })()}
        </div>

        <Highlight className="html">
          {' \
constructor(props) { \n \
  // Pass `props` into scope. \n \
  super(props); \n \
\n \
  this.state = {alertVisible: true}; \n \
} \n \
\n \
handleAlertDismiss() { \n \
  this.setState({alertVisible: false}); \n \
} \n \
\n \
handleAlertShow() { \n \
  this.setState({alertVisible: true}); \n \
} \n \
render() { \n \
  return ( \n \
          {(() => { \n \
            if (this.state.alertVisible) { \n \
              return ( \n \
                <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss.bind(this)}> \n \
                  <h4>Oh snap! You got an error!</h4> \n \
                  <p>Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.</p> \n \
                  <p> \n \
                    <Button bsStyle="danger">Take this action</Button> \n \
                    <span> or </span> \n \
                    <Button onClick={this.handleAlertDismiss.bind(this)}>Hide Alert</Button> \n \
                  </p> \n \
                </Alert> \n \
                ); \n \
            } \n \
 \n \
            return (<Button onClick={this.handleAlertShow.bind(this)}>Show Alert</Button>); \n \
          })()} \n \
 \n \
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
