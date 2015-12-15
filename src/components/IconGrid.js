// Dependencies.
import React from 'react';

// UI components
import {Col} from 'react-bootstrap';


// Icon components.
import IconCategoryRow from '../components/IconCategoryRow';
import IconRow from '../components/IconRow';

// Define class.
class IconGrid extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);
  }

  // Render method.
  render() {
    let rows = [];
    let lastCategory = null;
    let counter = 0;
    const icons = this.props.icons;
    const filterText = this.props.filterText;

    icons.forEach(icon => {
      if (icon.Name.indexOf(filterText) === -1) {
        return;
      }
      if (icon.Category !== lastCategory) {
        rows.push(<IconCategoryRow category={icon.Category} key={icon.Folder + icon.Category} />);
      }
      rows.push(<IconRow icon={icon} key={icon.Name} />);
      counter += 1;
      lastCategory = icon.Category;
    });

    return (
      <div>
        <Col xs={12} className="text-center">
          <p>Total icons: {counter}</p>
        </Col>
        {rows}
      </div>
    );
  }
}

// Validation.
IconGrid.propTypes = {
  icons: React.PropTypes.array,
  filterText: React.PropTypes.string
};

// Export.
export default IconGrid;
