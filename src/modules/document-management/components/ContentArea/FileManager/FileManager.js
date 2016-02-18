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

    const { foldersData, filesData, breadcrumbData, currentFolderId } = this.props;

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
            <FileManagerRows foldersData={foldersData} filesData={filesData} currentFolderId={currentFolderId}/>
          }

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
