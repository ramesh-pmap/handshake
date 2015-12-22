// Dependencies.
import React from 'react';
// import {Link} from 'react-router';
// import {LinkContainer} from 'react-router-bootstrap';

// Core components.
import {Button, Input, FormControls} from 'react-bootstrap';
// import Icon from 'react-fa';

// Define class.
class Layout extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);

    this.state = {
    };
  }

  showDetail(e) {
    e.preventDefault();
    this.props.showDetail();
  }

  // Render method.
  render() {
    return (
      <div>
        <div className="fixed-title clearfix">
          <h3 className="pull-left">Selected File</h3>
          <div className="pull-right">
            <Button bsStyle="info" bsSize="sm" onClick={this.showDetail.bind(this)}>
              Save
            </Button>
          </div>
        </div>

        <div className="sidebar-details">
          <div className="document-details">
            <Input type="text" label="Title" labelClassName=" required" wrapperClassName="" />
            <Input type="text" label="Internal Document ID" labelClassName="" wrapperClassName="" />
            <Input type="number" label="Version" labelClassName=" required" wrapperClassName="" />
            <Input type="select" multiple label="Document Owner" labelClassName=" required" wrapperClassName="">
              <option>Owner 1</option>
              <option>Owner 2</option>
              <option>Owner 3</option>
            </Input>
            <Input type="select" multiple label="Author" labelClassName="" wrapperClassName="">
              <option>Author 1</option>
              <option>Author 2</option>
              <option>Author 3</option>
            </Input>
            <FormControls.Static label="Uploaded/Referenced By" labelClassName="" wrapperClassName="" value="John Doe"/>
            <FormControls.Static label="Date Uploaded/Referenced" labelClassName="" wrapperClassName="" value="11/7/2015"/>
            <FormControls.Static label="Modified By" labelClassName="" wrapperClassName="" value="John Doe"/>
            <FormControls.Static label="Modified Date" labelClassName="" wrapperClassName="" value="11/8/2015"/>
            <FormControls.Static label="Document Status" labelClassName="" wrapperClassName="" value="Pending Approval"/>
            <Input type="select" label="Document Type" labelClassName="" wrapperClassName="">
              <option>Option1</option>
              <option>Option2</option>
              <option>Option3</option>
            </Input>
            <Input type="select" label="Document Level" labelClassName=" required" wrapperClassName="">
              <option>Option1</option>
              <option>Option2</option>
              <option>Option3</option>
            </Input>
            <Input type="select" multiple label="Display Folders" labelClassName=" required" wrapperClassName="">
              <option>Folder 1</option>
              <option>Folder 2</option>
              <option>Folder 3</option>
            </Input>
            <Input type="textarea" label="Description" labelClassName="" wrapperClassName="" />
            <Input type="textarea" label="Keywords/Tags" labelClassName="" wrapperClassName="" />
            <Input type="select" multiple label="Reference Documents" labelClassName="" wrapperClassName="">
              <option>Document 1</option>
              <option>Document 2</option>
              <option>Document 3</option>
            </Input>
            <Input type="textarea" label="Regulatory References" labelClassName="" wrapperClassName="" />
            <FormControls.Static label="Review Date" labelClassName="" wrapperClassName="" value="12/20/2015"/>
            <Input type="textarea" label="Review Date" labelClassName="" wrapperClassName="" />
            <Input type="select" label="Retention Period" labelClassName="" wrapperClassName="">
              <option>Option1</option>
              <option>Option2</option>
              <option>Option3</option>
            </Input>
            <Input type="textarea" label="Reason for Change" labelClassName="" wrapperClassName="" />
            <FormControls.Static label="File Name" labelClassName="" wrapperClassName="" value="OSHA_V2.0.docx"/>
            <FormControls.Static label="File Size" labelClassName="" wrapperClassName="" value="2.5 MB"/>
          </div>
        </div>
      </div>
    );
  }
}

// Parent Functions.
Layout.propTypes = {
  showDetail: React.PropTypes.func
};

// Export.
export default Layout;
