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
    // const dataRows = this.props.data ? this.props.data : this.props.data.fileManager;
    console.log('rowsData:', rowsData);
    let rows = [];

    rowsData.forEach(row => {
      console.log('row:', row);
      if (row.type === 'folder') {
        rows.push(<FileManagerRowFolder data={row} key={row.path} />);
      } else {
        rows.push(<FileManagerRowFile data={row} key={row.path} />);
      }
    });

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
