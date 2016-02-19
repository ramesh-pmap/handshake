// Dependencies.
import React, { Component, PropTypes } from 'react';
import PDFJS from 'react-pdfjs';

// Define class.
class PDF extends Component {
  handlePageCompleted() {
    console.log('handlePageCompleted() function was triggered.');
  }

  handlePdfCompleted() {
    console.log('handlePdfCompleted() function was triggered.');
  }

  // Render method.
  render() {
    return (
      <div className="pdf-viewer">
        <PDFJS file={this.props.file}
               page={this.props.page}
               scale={this.props.scale}
               loading={<h1>Loading {this.props.name}...</h1>}
               onPageComplete={this.handlePageCompleted.bind(this)}
               onDocumentComplete={this.handlePdfCompleted.bind(this)} />
      </div>
    );
  }
}

// Validation.
PDF.propTypes = {
  file: PropTypes.string.isRequired,
  name: PropTypes.string,
  page: PropTypes.number,
  scale: PropTypes.number
};
PDF.defaultProps = {
  page: 1,
  scale: 1.0
};

// Export.
export default PDF;
