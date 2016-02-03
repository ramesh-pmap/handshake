// Dependencies.
import React from 'react';
import Icon from 'react-fa';


// Define class.
class Avatar extends React.Component {

  // Render method.
  render() {
    let contents;

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
    } else if (size === 'md') {
      sizeStyle = 48;
    } else if (size === 'lg') {
      sizeStyle = 64;
    } else {
      sizeStyle = 32;
    }

    // Border.
    let shape = this.props.shape;
    let radius;
    if (shape === 'square') {
      radius = 0;
    } else {
      radius = '50%';
    }

    // Background color.
    const colors = [
      '#ff6c93',
      '#ff8a13',
      '#4cbb22',
      '#4CBBFC',
      '#EEEE22',
      '#ffc38a',
      '#fadc4a',
      '#4fc7ea',
      '#E3FFEE',
      '#80E56F',
      '#7fcbc9'
    ];

    // Get random number from colors array
    const random = Math.floor((Math.random() * colors.length));

    let styles = {
      width: sizeStyle,
      height: sizeStyle,
      borderRadius: radius,
      backgroundColor: colors[random]
    };

    const status = this.props.status || '';
    let classnames = 'avatar ' + status;

    // Icon.
    const icon = this.props.icon || '';
    if (icon.length >= 1) {
      contents = <Icon name={icon} />;
    }

    // Initials
    const name = this.props.name || '';
    let initials;
    if (name.length > 0) {
      // Get all initials from name prop
      const allInitials = name.split(' ').map( (s) => {
        return s.charAt(0);
      });
      // Join first and last initials
      initials = allInitials[0] + allInitials[allInitials.length - 1];
      contents = <span className="avatar-initials">{initials}</span>;
    }

    // Image.
    const imageSrc = this.props.src || '';
    if (imageSrc.length > 0) {
      contents = <img src={imageSrc} />;
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
  icon: React.PropTypes.string,
  background: React.PropTypes.string,
  name: React.PropTypes.string
};

// Export.
export default Avatar;
