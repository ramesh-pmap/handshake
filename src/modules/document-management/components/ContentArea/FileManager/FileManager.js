// Dependencies.
import React from 'react';
import { connect } from 'react-redux';

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
    const {path, data} = this.props;
    const breadcrumbData = path ? path : '';
    const fileManagerData = data ? data : [];

    return (
      <div>
        {/* File Manager Breadcrumb */}
        <FileManagerBreadcrumb path={breadcrumbData} />
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
  data: React.PropTypes.array,
  path: React.PropTypes.string,
  state: React.PropTypes.object
};

const mapStateToProps = (state) => ({
  state
});

// Export.
export default connect(mapStateToProps)(FileManager);
