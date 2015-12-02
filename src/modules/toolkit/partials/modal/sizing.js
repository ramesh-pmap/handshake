// Dependencies.
import React from 'react';

// Core components.
import {Table} from 'react-bootstrap';

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

        <h2>Sizing modals using standard Bootstrap props</h2>

        <p>You can specify a bootstrap large or small modal by using the "bsSize" prop.</p>

        <div className="bs-example">
        </div>

        <Highlight className="html">
          {' \
            render() { \n \
                return ( \n \
                }\n \
                }\
          '}
        </Highlight>
        <h2>Sizing modals using custom CSS</h2>

        <p>You can apply custom css to the modal dialog div using the "dialogClassName" prop. Example is using a custom css class with width set to 90%</p>

        <div className="bs-example">
        </div>

        <Highlight className="html">
          {' \
            render() { \n \
                return ( \n \
                }\n \
                }\
          '}
        </Highlight>
        <h2>Props</h2>
        <h3>Modal</h3>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>animation</td>
              <td>boolean</td>
              <td>true</td>
              <td>Open and close the Modal with a slide and fade animation.</td>
            </tr>
            <tr>
              <td>autoFocus</td>
              <td>boolean</td>
              <td></td>
              <td>When <code>true</code> The modal will automatically shift focus to itself when it opens, and replace it to the last focused element when it closes. Generally this should never be set to false as it makes the Modal less accessible to assistive technologies, like screen-readers.</td>
            </tr>
            <tr>
              <td>backdrop</td>
              <td>
                one of:
                <code>"static"</code>,
                <code>"true"</code>,
                <code>"false"</code>
              </td>
              <td></td>
              <td>Include a backdrop component. Specify 'static' for a backdrop that doesn't trigger an "onHide" when clicked.</td>
            </tr>
            <tr>
              <td>bsClass</td>
              <td>string</td>
              <td>'modal'</td>
              <td>Base css class name and prefix for the Component. Generally one should only change <code>bsClass</code> if they are providing new, non bootstrap, css styles for a component.</td>
            </tr>
            <tr>
              <td>bsSize</td>
              <td>
                one of:
                <code>"lg"</code>,
                <code>"large"</code>,
                <code>"sm"</code>,
                <code>"small"</code>
              </td>
              <td></td>
              <td>Component Size variations</td>
            </tr>
            <tr>
              <td>dialogClassName</td>
              <td>string</td>
              <td></td>
              <td>A css class to apply to the Modal dialog DOM node.</td>
            </tr>
            <tr>
              <td>dialogComponent</td>
              <td>elementType</td>
              <td>ModalDialog</td>
              <td>A Component type that provides the modal content Markup. This is a useful prop when you want to use your own styles and markup to create a custom modal component.</td>
            </tr>
            <tr>
              <td>enforceFocus</td>
              <td>boolean</td>
              <td>'modal'</td>
              <td>When <code>true</code> The modal will prevent focus from leaving the Modal while open. Consider leaving the default value here, as it is necessary to make the Modal work well with assistive technologies, such as screen readers.</td>
            </tr>
            <tr>
              <td>keyboard</td>
              <td>boolean</td>
              <td>'modal'</td>
              <td>Close the modal when escape key is pressed</td>
            </tr>
            <tr>
              <td>onHide</td>
              <td>function</td>
              <td>'modal'</td>
              <td>A callback fired when the header closeButton or non-static backdrop is clicked. Required if either are specified.</td>
            </tr>
            <tr>
              <td>show</td>
              <td>boolean</td>
              <td>'modal'</td>
              <td>When <code>true</code> The modal will show itself.</td>
            </tr>
          </tbody>
        </Table>
        <h3>Modal.Header</h3>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>aria-label</td>
              <td>string</td>
              <td>'Close'</td>
              <td>The 'aria-label' attribute provides an accessible label for the close button. It is used for Assistive Technology when the label text is not readable.</td>
            </tr>
            <tr>
              <td>bs-class</td>
              <td>string</td>
              <td>'modal'</td>
              <td>Base css class name and prefix for the Component. Generally one should only change <code>bsClass</code> if they are providing new, non bootstrap, css styles for a component.</td>
            </tr>
            <tr>
              <td>closeButton</td>
              <td>boolean</td>
              <td>false</td>
              <td>Specify whether the Component should contain a close button</td>
            </tr>
            <tr>
              <td>onHide</td>
              <td>function</td>
              <td></td>
              <td>A Callback fired when the close button is clicked. If used directly inside a Modal component, the onHide will automatically be propagated up to the parent Modal <code>onHide</code>.</td>
            </tr>
          </tbody>
        </Table>
        <h3>Modal.Title</h3>
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>bsClass</td>
                        <td>string</td>
                        <td>'modal'</td>
                        <td>Base css class name and prefix for the Component. Generally one should only change <code>bsClass</code> if they are providing new, non bootstrap, css styles for a component.</td>
                    </tr>
                </tbody>
            </Table>
        <h3>Modal.Body</h3>
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>bsClass</td>
                        <td>string</td>
                        <td>'modal'</td>
                        <td>Base css class name and prefix for the Component. Generally one should only change <code>bsClass</code> if they are providing new, non bootstrap, css styles for a component.</td>
                    </tr>
                </tbody>
            </Table>
        <h3>Modal.Footer</h3>
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>bsClass</td>
                        <td>string</td>
                        <td>'modal'</td>
                        <td>Base css class name and prefix for the Component. Generally one should only change <code>bsClass</code> if they are providing new, non bootstrap, css styles for a component.</td>
                    </tr>
                </tbody>
            </Table>
      </div>
    );
  }
}

// Export.
export default Partial;
