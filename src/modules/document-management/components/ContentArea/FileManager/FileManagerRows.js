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
    const {foldersData, filesData} = this.props;

    let rows = [];
    if (foldersData) {
      foldersData.forEach(folder => {
        if (folder.Id) {
          rows.push(<FileManagerRowFolder data={folder} key={folder.Uid + folder.Description} />);
        }
      });
    }

    if (filesData) {
      filesData.forEach(file => {
        if (file.Uid) {
          rows.push(<FileManagerRowFile data={file} key={file.Uid} />);
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
  currentFolderId: React.PropTypes.string
};


// Export.
export default FileManagerRows;
