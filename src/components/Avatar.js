// Dependencies.
import React from 'react';

// UI components
// import {Panel} from 'react-bootstrap';


// Define class.
class Mars extends React.Component {

  // Render method.
  render() {
    // As const variable:
    // let status = this.props.status || '';
    // console.log(status);

    // Direct from props
    // console.log(this.props.shape);

    // Size.
    let size = this.props.size;
    let sizeStyle = 30;
    if (size === 'xs') {
      sizeStyle = 16;
    } else if (size === 'sm') {
      sizeStyle = 24;
    } else if (size === 'lg') {
      sizeStyle = 48;
    } else if (size === 'xl') {
      sizeStyle = 64;
    }

    // Border.
    let shape = this.props.shape;
    let radius = '50%';
    if (shape === 'square') {
      radius = 0;
    }

    let styles = {
      width: sizeStyle,
      height: sizeStyle,
      borderRadius: radius
    };

    const status = this.props.status || '';
    let classnames = 'avatar ' + status;

    // Image src.
    const imageSrc = this.props.src || '';
    let imageTag = '';
    if (imageSrc.length >= 1) {
      imageTag = <img src={imageSrc} />;
    }

    return (
      <div className={classnames} style={styles}>
        {imageTag}
      </div>
    );
  }
}

// Validation.
Mars.propTypes = {
  status: React.PropTypes.string,
  shape: React.PropTypes.string,
  size: React.PropTypes.string,
  border: React.PropTypes.string,
  src: React.PropTypes.string
};

// Export.
export default Mars;
