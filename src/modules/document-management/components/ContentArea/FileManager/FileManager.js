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
import FileManagerRowLoader from './FileManagerRowLoader';


// Define class.
class FileManager extends React.Component {
  // Render method.
  render() {
    const { state } = this.props;
    const isFetching = state.folder.isFetching;

    const { folderData, documentData, breadcrumbData, currentFolderId } = this.props;

    return (
      <div>
        {/* File Manager Breadcrumb */}
        <FileManagerBreadcrumb data={breadcrumbData} />

        <div className="card" style={{ position: 'relative' }}>

        {/* File Manager Header */}
        <FileManagerHeader />

          { isFetching ?
            <FileManagerRowLoader />
          :
            <FileManagerRows folderData={folderData} documentData={documentData} currentFolderId={currentFolderId}/>
          }

        </div>

      </div>
    );
  }
}

// Validation.
FileManager.propTypes = {
  folderData: React.PropTypes.array,
  documentData: React.PropTypes.array,
  breadcrumbData: React.PropTypes.array,
  currentFolderId: React.PropTypes.string,
  state: React.PropTypes.object
};

const mapStateToProps = (state) => ({
  state
});

// Export.
export default connect(mapStateToProps)(FileManager);
