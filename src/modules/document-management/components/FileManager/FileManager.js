// Dependencies.
import React from 'react';

// Core components.
// import {Row, Col, Button, ListGroup, ListGroupItem} from 'react-bootstrap';
// import Icon from 'react-fa';

// Components
import FileManagerBreadcrumb from './FileManagerBreadcrumb';
import FileManagerHeader from './FileManagerHeader';
import FileManagerRows from './FileManagerRows';

// Define class.
class FileManager extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);
  }

  // Render method.
  render() {
    const data = this.props.data;
    // const breadcrumbData = data ? data.path : '';
    // const fileManagerData = data ? data : [];
    // const breadcrumbData = data[0] ? data[0].path : '';
    // const fileManagerData = data[0] ? data[0].children : [];
    const breadcrumbData = data[0] ? data[0].children[0].path : '';
    const fileManagerData = data[0] ? data[0].children[0].children : [];

    console.log('data', data);


    return (
      <div>
        {/* File Manager Breadcrumb */}
        <FileManagerBreadcrumb data={breadcrumbData} />
        <div className="card">
          {/* File Manager Header */}
          <FileManagerHeader />
          {/* File Manager Rows */}
          <FileManagerRows data={fileManagerData} />
        </div>
      </div>
    );
  }
}

// Validation.
FileManager.propTypes = {
  data: React.PropTypes.array
};


// Export.
export default FileManager;
