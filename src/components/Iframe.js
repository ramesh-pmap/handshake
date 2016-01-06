// Dependencies.
import React from 'react';

// Core components.
// import {Panel, Well} from 'react-bootstrap';


// Define class.
class Page extends React.Component {
  constructor(props) {
    super(props);
  }

  // Render method.
  render() {
    const url = this.props.url;
    const css = {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '518px',
      border: 0
    };

    return (
      <iframe src={url} scrolling="yes" className="iframeWrapper home" style={css}></iframe>
    );
  }
}

// Validation.
Page.propTypes = {
  url: React.PropTypes.string,
};

// Export.
export default Page;
