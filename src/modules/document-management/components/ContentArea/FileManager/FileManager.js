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

const AUTO_HEIGHT = 'auto';

// Define class.
class FileManager extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);

    this.state = {
      height: AUTO_HEIGHT
    };
  }

  handleFixedHeaderToggle() {
    const { height } = this.state;
    if ( height === AUTO_HEIGHT ) {
      this.setState({ height: 100 });
    } else {
      this.setState({ height: AUTO_HEIGHT });
    }
  }

  // Render method.
  render() {
    const { foldersData, filesData, breadcrumbData, currentFolderId } = this.props;

    return (
      <div>
        {/* File Manager Breadcrumb */}
        {
          breadcrumbData.length >= 1 ?
            <FileManagerBreadcrumb data={breadcrumbData} />
          :
            <div/>
        }

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
  currentFolderId: React.PropTypes.number,
  state: React.PropTypes.object
};

const mapStateToProps = (state) => ({
  state
});

// Export.
export default connect(mapStateToProps)(FileManager);
