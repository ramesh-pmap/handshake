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

    this.state = {alertVisible: false};
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

        <h2>Auto closeable</h2>

        <p>Auto close after a set time with <code>dismissAfter</code> prop.</p>

        <div className="bs-example">
          {(() => {
            if (this.state.alertVisible) {
              return (
                <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss.bind(this)} dismissAfter={2000}>
                  <h4>Oh snap! You got an error!</h4>
                  <p>But this will hide after 2 seconds.</p>
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
  this.state = {alertVisible: false}; \n \
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
                <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss.bind(this)} dismissAfter={2000}> \n \
                  <h4>Oh snap! You got an error!</h4> \n \
                  <p>But this will hide after 2 seconds.</p> \n \
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
