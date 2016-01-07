// Dependencies.
import React from 'react';
import { connect } from 'react-redux';

// Core components.
import {Breadcrumb, BreadcrumbItem} from 'react-bootstrap';
import Icon from 'react-fa';

// Define class.
class FileManagerBreadcrumb extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);
  }

  handleClick(index) {
    // const { dispatch } = this.props;
    console.log('index', index);
    // console.log('e.target', e.target);
    // dispatch(changeFolder(data.path, data.children));
  }

  // Render method.
  render() {
    const path = this.props.path;
    const breadcrumbArray = path ? path.split('/') : [''];
    const lastItem = breadcrumbArray.length ? breadcrumbArray[breadcrumbArray.length - 1] : '';
    let breadcrumbs = [];

    breadcrumbArray.forEach(item => {
      console.log('breadcrumb item:', item);
      if (item !== '') {
        if (item === lastItem) {
          breadcrumbs.push(<BreadcrumbItem active key={item}>{item}</BreadcrumbItem>);
        } else {
          breadcrumbs.push(<BreadcrumbItem onClick={this.handleClick.bind(this, item)} key={item}>{item}</BreadcrumbItem>);
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
  path: React.PropTypes.string,
  dispatch: React.PropTypes.func
};


// Export.
export default connect()(FileManagerBreadcrumb);
