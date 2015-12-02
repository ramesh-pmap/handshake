// Dependencies.
import React from 'react';

// Core components.
import {Panel, Button} from 'react-bootstrap';

// Syntax Highlighter.
import Highlight from 'react-highlight';


// Define class.
class Partial extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);

    this.state = {
      open: true
    };
  }

  // Render method.
  render() {
    return (
      <div className="doc-section">

        <h2>Collapsible Panel</h2>

        <div className="bs-example">
          <Button onClick={ ()=> this.setState({ open: !this.state.open })}>
            click
          </Button>
          <Panel collapsible expanded={this.state.open}>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
            Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
          </Panel>
        </div>

        <Highlight className="html">
          {' \
<Button onClick={ ()=> this.setState({ open: !this.state.open })}> \n \
  click \n \
</Button> \n \
<Panel collapsible expanded={this.state.open}> \n \
  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. \n \
  Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. \n \
</Panel> \
          '}
        </Highlight>

      </div>
    );
  }
}

// Export.
export default Partial;
