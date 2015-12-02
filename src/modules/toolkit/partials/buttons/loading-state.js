// Dependencies.
import React from 'react';

// Core components.
import {ButtonToolbar, Button} from 'react-bootstrap';

// Syntax Highlighter.
import Highlight from 'react-highlight';


// Define class.
class Partial extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);

    this.state = {
      isLoading: false
    };
  }

  handleClick() {
    this.setState({isLoading: true});

    // This probably where you would have an `ajax` call
    setTimeout(() => {
      // Completed of async action, set loading state back
      this.setState({isLoading: false});
    }, 2000);
  }

  // Render method.
  render() {
    let isLoading = this.state.isLoading;
    return (
      <div id="buttons_loading" className="doc-section">

        <h2>Loading state</h2>

        <p>When activating an asynchronous action from a button it is a good UX pattern to give the user feedback as to the loading state, this can easily be done by updating your <code>&lt;Button/&gt;</code>’s props from a state change like below.</p>

        <div className="bs-example">
          <ButtonToolbar>
            <Button href="#">Link</Button>
              <Button
              bsStyle="primary"
              disabled={isLoading}
              onClick={!isLoading ? this.handleClick.bind(this) : null}>
              {isLoading ? 'Loading...' : 'Loading state'}
              </Button>
          </ButtonToolbar>
        </div>

        <Highlight>
          {' \
  constructor() { \n \
    return { \n \
      isLoading: false \n \
    }; \n \
  } \n \
 \n \
  render() { \n \
    let isLoading = this.state.isLoading; \n \
    return ( \n \
      <Button \n \
        bsStyle="primary" \n \
        disabled={isLoading} \n \
        onClick={!isLoading ? this.handleClick.bind(this) : null}> \n \
        {isLoading ? "Loading..." : "Loading state"} \n \
      </Button> \n \
    ); \n \
  } \n \
 \n \
  handleClick() { \n \
    this.setState({isLoading: true}); \n \
 \n \
    // This probably where you would have an `ajax` call \n \
    setTimeout(() => { \n \
      // Completed of async action, set loading state back \n \
      this.setState({isLoading: false}); \n \
    }, 2000); \n \
  } \
          '}
        </Highlight>

      </div>
    );
  }
}

// Export.
export default Partial;
