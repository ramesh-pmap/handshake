// Dependencies.
import React from 'react';
import { connect } from 'react-redux';

// Core components.
// import { Button } from 'react-bootstrap';
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
    const { foldersData, filesData, breadcrumbData, currentFolderId } = this.props;

    return (
      <div>
        {/* File Manager Breadcrumb */}
        <FileManagerBreadcrumb data={breadcrumbData} />

        <div className="card" style={{ position: 'relative' }}>

        {/* File Manager Header */}
        <FileManagerHeader />

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
  currentFolderId: React.PropTypes.string,
  state: React.PropTypes.object
};

const mapStateToProps = (state) => ({
  state
});

// Export.
export default connect(mapStateToProps)(FileManager);
