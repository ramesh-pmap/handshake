// Dependencies.
import React from 'react';

// Core components.
import {ListGroup} from 'react-bootstrap';

// Components.
import FileManagerRowFolder from './FileManagerRowFolder';
import FileManagerRowFile from './FileManagerRowFile';

// Define class.
class FileManagerRows extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);
  }

  // Render method.
  render() {
    // const rowsData = this.props.data;
    const {foldersData, filesData, currentFolderId} = this.props;

    let rows = [];
    if (foldersData) {
      foldersData.forEach(folder => {
        if (folder.folder_id) {
          rows.push(<FileManagerRowFolder data={folder} key={folder.folder_id + folder.folder_name} />);
        }
      });
    }

    if (filesData) {
      filesData.forEach(file => {
        if (file.doc_folder_id === currentFolderId) {
          rows.push(<FileManagerRowFile data={file} key={file.doc_id} />);
        }
      });
    }

    return (
      <ListGroup className="file_manager-list">
        {rows}
      </ListGroup>
    );
  }
}

// Validation.
FileManagerRows.propTypes = {
  foldersData: React.PropTypes.array,
  filesData: React.PropTypes.array,
  currentFolderId: React.PropTypes.number
};


// Export.
export default FileManagerRows;
