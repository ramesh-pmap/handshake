// Dependencies.
import React from 'react';
import { connect } from 'react-redux';

import { Scrollbars } from 'react-custom-scrollbars';

// Core components.
import { Button } from 'react-bootstrap';
import Icon from 'react-fa';

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
    const { height } = this.state;

    let tableRows;
    switch (height) {
    case AUTO_HEIGHT:
      tableRows = (
          <FileManagerRows foldersData={foldersData} filesData={filesData} currentFolderId={currentFolderId}/>
      );
      break;
    default:
      tableRows = (
        <Scrollbars style={{ height: [height] }}>
        {/* File Manager Rows */}
        <FileManagerRows foldersData={foldersData} filesData={filesData} currentFolderId={currentFolderId}/>
        </Scrollbars>
      );
    }

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

        <div style={{ display: 'none', position: 'absolute', top: -10, right: -10 }}>
            <small className="text-muted">Freeze Table Header</small>
            <Button bsSize="lg" bsStyle="link" className="hidden-xs"
              onClick={this.handleFixedHeaderToggle.bind(this)}>
              {
                  height === AUTO_HEIGHT ?
                    <Icon name="toggle-off" />
                  :
                    <Icon name="toggle-on" />

              }
            </Button>
          </div>

          {/* File Manager Header */}
          <FileManagerHeader />

          { tableRows }

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
