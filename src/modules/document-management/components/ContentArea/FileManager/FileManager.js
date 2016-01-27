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
    const {foldersData, filesData, breadcrumbData, currentFolderId} = this.props;

    return (
      <div>
        {/* File Manager Breadcrumb */}
        {
          breadcrumbData.length >= 1 ?
            <FileManagerBreadcrumb data={breadcrumbData} />
          :
            <div style={{height: '0px'}}/>
        }
        <div className="card">
          {/* File Manager Header */}
          <FileManagerHeader />
          {/* File Manager Rows */}
          <FileManagerRows foldersData={foldersData} filesData={filesData} currentFolderId={currentFolderId}/>
        </div>
      </div>
    );
  }
}

// Validation.
FileManager.propTypes = {
  foldersData: React.PropTypes.array,
  filesData: React.PropTypes.array,
  breadcrumbData: React.PropTypes.array,
  currentFolderId: React.PropTypes.number,
  state: React.PropTypes.object
};

const mapStateToProps = (state) => ({
  state
});

// Export.
export default connect(mapStateToProps)(FileManager);
