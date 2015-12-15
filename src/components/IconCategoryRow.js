// Dependencies.
import React from 'react';

// UI components
import {Col} from 'react-bootstrap';

// Define class.
class IconCategoryRow extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);
  }

  // Render method.
  render() {
    const category = this.props.category;
    return (
      <Col xs={12}>
        <h2 id="Sample_Group_Name" className="icon-grid-title">{category}</h2>
      </Col>
    );
  }
}

// Validation.
IconCategoryRow.propTypes = {
  category: React.PropTypes.string
};

// Export.
export default IconCategoryRow;
