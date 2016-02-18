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
    const currentId = state.ui.currentFolderId;
    let breadcrumbData = state.folders.items.Breadcrumbs ? state.folders.items.Breadcrumbs : [];
    let folderData = state.folders.items.Subfolders ? state.folders.items.Subfolders : [];
    let filesData = state.folders.items.Documents ? state.folders.items.Documents : [];

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
