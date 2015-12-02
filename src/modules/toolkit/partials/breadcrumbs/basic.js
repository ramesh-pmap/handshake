// Dependencies.
import React from 'react';

// Core components.
import {Breadcrumb, BreadcrumbItem} from 'react-bootstrap';

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

        <h2>Breadcrumbs</h2>

<p>Breadcrumbs are used to indicate the current page's location. Add<code>active</code> attribute to active<code>BreadcrumbItem</code> . Do not set both<code> active</code> and<code> href </code> attributes.<code>active</code> overwrites<code> href</code> and<code> span</code> element is rendered instead of<code> a</code></p>
        <div className="bs-example">
        <Breadcrumb>
            <BreadcrumbItem href="#">
                Home
            </BreadcrumbItem>
            <BreadcrumbItem href="#">
                Library
            </BreadcrumbItem>
            <BreadcrumbItem active>
                Data
            </BreadcrumbItem>
        </Breadcrumb>
        </div>

        <Highlight className="html">
          {' \
            render() { \n \
                return ( \n \
                    <Breadcrumb>\n \
                        <BreadcrumbItem href="#"> \n \
                            Home \n \
                        </BreadcrumbItem>\n \
                        <BreadcrumbItem href="#"> \n \
                            Library\n \
                        </BreadcrumbItem>\n \
                        <BreadcrumbItem active>\n \
                            Data\n \
                        </BreadcrumbItem>\n \
                    </Breadcrumb>\n \
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
