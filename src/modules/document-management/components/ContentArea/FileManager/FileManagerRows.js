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
    const rowsData = this.props.data;
    let rows = [];
    if (rowsData) {
      rowsData.forEach(row => {
        if (row.folder_id) {
          rows.push(<FileManagerRowFolder data={row} key={row.folder_id} />);
        } else {
          rows.push(<FileManagerRowFile data={row} key={row.id} />);
        }
      });
    }

    return (
      <ListGroup className="doc_mgt-list">
        {rows}
      </ListGroup>
    );
  }
}

// Validation.
FileManagerRows.propTypes = {
  data: React.PropTypes.array
};


// Export.
export default FileManagerRows;
