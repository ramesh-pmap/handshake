// Dependencies.
import React from 'react';
// import {Link} from 'react-router';
// import {LinkContainer} from 'react-router-bootstrap';

// Core components.
import {Button, ButtonGroup, DropdownButton, MenuItem, FormControls} from 'react-bootstrap';
// import Icon from 'react-fa';

// Stylesheets.
import '../../../modules/document-management/styles.scss';


// Define class.
class Layout extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);

    this.state = {
    };
  }

  showDetailForm(e) {
    e.preventDefault();
    this.props.showDetailForm();
  }

  // Render method.
  render() {
    return (
      <div>

        <div className="fixed-title">
          <ButtonGroup className="title-dropdown">
            <DropdownButton id="doc_mgt-actions_dropdown" title="All Tasks" bsStyle="link" bsSize="lg">
              <MenuItem eventKey="1">Pending <small>(2)</small></MenuItem>
              <MenuItem eventKey="2">Ready for Release <small>(1)</small></MenuItem>
              <MenuItem eventKey="3">Change Requests <small>(7)</small></MenuItem>
              <MenuItem eventKey="4">All Tasks</MenuItem>
            </DropdownButton>
          </ButtonGroup>
        </div>

        <div className="form-horizontal static">
          <FormControls.Static label="Title" labelClassName="col-md-4" wrapperClassName="col-md-8" value="Doc Title" />
          <FormControls.Static label="Internal Document ID" labelClassName="col-md-4" wrapperClassName="col-md-8" value="123456789-0" />
          <FormControls.Static label="Textarea" labelClassName="col-md-4" wrapperClassName="col-md-8" rows="6" />
        </div>

        <br />
        <Button bsStyle="warning" bsSize="sm" onClick={this.showDetailForm.bind(this)}>
          Edit
        </Button>

      </div>
    );
  }
}

// Parent Functions.
Layout.propTypes = {
  showDetailForm: React.PropTypes.func
};

// Export.
export default Layout;
