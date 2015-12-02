// Dependencies.
import React from 'react';

// Core components.
// import {Modal, Button, Popover, Tooltip, Panel} from 'react-bootstrap';
import {Panel} from 'react-bootstrap';
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

        <h2>Static Markup</h2>

        <p>A modal dialog component </p>

        <div className="bs-example">
        </div>

        <Highlight className="html">
          {' \
            render() { \n \
            return ( \n \
                <div className="static-modal">\n \
                    <Modal.Dialog>\n \
                        <Modal.Header>\n \
                            <Modal.Title>Modal title</Modal.Title>\n \
                        </Modal.Header>\n \
                        <Modal.Body>\n \
                            One fine body...\n \
                        </Modal.Body>\n \
                        <Modal.Footer>\n \
                            <Button>Close</Button>\n \
                            <Button bsStyle="primary">Save changes</Button>\n \
                        </Modal.Footer>\n \
                    </Modal.Dialog>\n \
                </div>\n \
            }\n \
            } \
        '}
       </Highlight>
       <h2>Basic Example</h2>
        <p>A modal with header, body and set of actions in the footer. Use <code>&lt;Modal/&gt;</code>in combination with other componenets to show or hide your Modal. The <code>&lt; Modal/&gt;</code> Component comes with a few convinient "sub components" : <code>&lt; Modal.Header/&gt;</code>, <code>&lt; Modal.Title/&gt;</code>, <code>&lt; Modal.Body/&gt;</code>, and <code>&lt;Modal.Footer/&gt;</code>, which you can use to build the Modal content.</p>
        <div className="bs-example">
        </div>
        <Panel bsStyle="info" header="Additional Import Options">
          The Modal Header, Title, Body, and Footer componenets are available as static properties the <code>&lt; Modal /&gt;</code>component, but you can also, import them directly from the <code>/lib</code> directory like: <code> require("react-bootstrap/lib/ModalHeader")</code>.
        </Panel>
        <h2>Contained Modal</h2>
        <p>You will need to add the following css to your project and ensure that your container has the <code>modal-container</code> class.</p>
        <div className="bs-example">
        </div>
        <Highlight>
        {'\
          .modal-container {\n \
            position: relative;\n \
          }\n \
          .modal-container .modal, .modal-container .modal-backdrop {\n \
            position: absolute;\n \
          }\n \
        '}
        </Highlight>
        <div className="bs-example">
        </div>
      </div>
    );
  }
}
// Export.
export default Partial;
