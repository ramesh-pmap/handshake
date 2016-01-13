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
    let fileManagerData = []; // state.currentFolderChildren ? state.currentFolderChildren : [];
    const currentPath = state.currentFolderPath;
    const fileMatrix = state.fileMatrix;

    if (fileMatrix) {
      for (let i = 0; i < fileMatrix.length; i++) {
        if (fileMatrix[i].path === currentPath) {
          fileManagerData = fileMatrix[i].children;
        }
      }
    }

    return (
      <div>
        <DocumentListHeader loadContentAreaView={this.props.loadContentAreaView} />
        {/* FileManager component */}
        <FileManager data={fileManagerData} />
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
