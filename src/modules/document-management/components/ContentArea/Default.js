// Dependencies.
import React from 'react';
import { connect } from 'react-redux';

// Components.
import DocumentListHeader from './ContentAreaHeader';
import FileManager from './FileManager/FileManager';


// Define class.
class Default extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);

    this.state = {
      selectedKey: 'default',
      selectedValue: 'All Tasks',
    };
  }


  // Render method.
  render() {
    // File Manager data
    const { state } = this.props;
    let breadcrumbData = [];
    let folderData = []; // state.currentFolderChildren ? state.currentFolderChildren : [];

    const currentId = state.currentFolderId;
    // const currentPath = state.currentFolderPath;
    const docFolders = state.docFolders;

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
        <DocumentListHeader loadContentAreaView={this.props.loadContentAreaView} />
        {/* FileManager component */}
        <FileManager folderData={folderData} breadcrumbData={breadcrumbData} />
      </div>
    );
  }
}

// propTypes.
Default.propTypes = {
  loadContentAreaView: React.PropTypes.func,
  dispatch: React.PropTypes.func,
  state: React.PropTypes.object
};
const mapStateToProps = (state) => ({
  state
});

// Export.
export default connect(mapStateToProps)(Default);
