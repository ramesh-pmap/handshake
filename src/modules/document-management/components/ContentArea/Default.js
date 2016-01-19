// Dependencies.
import React from 'react';
import { connect } from 'react-redux';

// Components.
import FileManager from './FileManager/FileManager';


// Define class.
class Default extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);
  }


  // Render method.
  render() {
    // File Manager data
    const { state } = this.props;
    const currentId = state.currentFolderId;
    const docFolders = state.docFolders;
    const filesData = state.docFiles;
    let folderData = [];
    let breadcrumbData = [];

    if (docFolders) {
      for (let i = 0; i < docFolders.length; i++) {
        if (docFolders[i].folder_id === currentId) {
          folderData = docFolders[i].children;
          breadcrumbData = docFolders[i].folder_breadcrumb ? docFolders[i].folder_breadcrumb : [];
        }
      }
    }

    return (
      <div>
        {/* FileManager component */}
        <FileManager foldersData={folderData} breadcrumbData={breadcrumbData} filesData={filesData} currentFolderId={currentId} />
      </div>
    );
  }
}

// propTypes.
Default.propTypes = {
  dispatch: React.PropTypes.func,
  state: React.PropTypes.object
};
const mapStateToProps = (state) => ({
  state
});

// Export.
export default connect(mapStateToProps)(Default);
