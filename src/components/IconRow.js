// Dependencies.
import React from 'react';

// UI components
import {Col, Image} from 'react-bootstrap';

// Define class.
class IconRow extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);
  }

  // Render method.
  render() {
    const icon = this.props.icon;
    return (
      <Col xs={6} sm={4} md={3} lg={2}>
        <div className="icon-grid-item">
          <Image src={`./static/icons/svg/${icon.Name}.svg`} responsive />
          {icon.Name}
        </div>
      </Col>
    );
  }
}

// Validation.
IconRow.propTypes = {
  icon: React.PropTypes.object
};

// Export.
export default IconRow;
