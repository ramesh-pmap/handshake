// Dependencies.
import React from 'react';
import Icon from 'react-fa';


// Define class.
class Avatar extends React.Component {

  // Render method.
  render() {
    // As const variable:
    // let status = this.props.status || '';
    // console.log(status);

    // Direct from props
    // console.log(this.props.shape);

    // Size.
    let size = this.props.size;
    let sizeStyle;
    if (size === 'xs') {
      sizeStyle = 16;
    } else if (size === 'sm') {
      sizeStyle = 24;
    } else if (size === 'lg') {
      sizeStyle = 48;
    } else if (size === 'xl') {
      sizeStyle = 64;
    } else {
      sizeStyle = 30;
    }

    // Border.
    let shape = this.props.shape;
    let radius;
    if (shape === 'square') {
      radius = 0;
    } else {
      radius = '50%';
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

    // Icon.
    const icon = this.props.icon || 'user';
    let contents;
    if (imageSrc.length >= 1) {
      contents = <img src={imageSrc} />;
    } else {
      contents = <Icon name={icon} />;
    }

    return (
      <div className={classnames} style={styles}>
        {contents}
      </div>
    );
  }
}

// Validation.
Avatar.propTypes = {
  status: React.PropTypes.string,
  shape: React.PropTypes.string,
  size: React.PropTypes.string,
  border: React.PropTypes.string,
  src: React.PropTypes.string,
  icon: React.PropTypes.string
};

// Export.
export default Avatar;
