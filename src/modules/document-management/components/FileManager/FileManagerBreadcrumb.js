// Dependencies.
import React from 'react';

// Core components.
import {Breadcrumb, BreadcrumbItem} from 'react-bootstrap';
import Icon from 'react-fa';

// Define class.
class FileManagerBreadcrumb extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);
  }

  // Render method.
  render() {
    const breadcrumbString = this.props.data;
    const breadcrumbArray = breadcrumbString ? breadcrumbString.split('/') : [''];
    const lastItem = breadcrumbArray.length ? breadcrumbArray[breadcrumbArray.length - 1] : '';
    let breadcrumbs = [];

    breadcrumbArray.forEach(item => {
      console.log('breadcrumb item:', item);
      if (item !== '') {
        if (item === lastItem) {
          breadcrumbs.push(<BreadcrumbItem active key={item}>{item}</BreadcrumbItem>);
        } else {
          breadcrumbs.push(<BreadcrumbItem key={item}>{item}</BreadcrumbItem>);
        }
      }
    });

    return (
      <Breadcrumb>
        <BreadcrumbItem><Icon name="home"/></BreadcrumbItem>
        {breadcrumbs}
      </Breadcrumb>
    );
  }
}

// Validation.
FileManagerBreadcrumb.propTypes = {
  data: React.PropTypes.string
};


// Export.
export default FileManagerBreadcrumb;
