// Dependencies.
import React from 'react';
import { connect } from 'react-redux';

import { changeFolder } from '../../../../../redux/actions';

// Core components.
import {Breadcrumb, BreadcrumbItem} from 'react-bootstrap';
import Icon from 'react-fa';

// Define class.
class FileManagerBreadcrumb extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);
  }

  handleClick(id) {
    const { dispatch } = this.props;
    // Redux action.
    dispatch(changeFolder(id));
  }

  // Render method.
  render() {
    const breadcrumbsData = this.props.data;
    let breadcrumbs = [];
    // Work in progress.
    breadcrumbs.push(<BreadcrumbItem onClick={this.handleClick.bind(this, '0')} key={'0'}><Icon name="home"/></BreadcrumbItem>);

    if (breadcrumbsData) {
      breadcrumbsData.forEach(item => {
        // console.log('item: ', breadcrumbsData);
        breadcrumbs.push(<BreadcrumbItem onClick={this.handleClick.bind(this, item.breadcrumb_id)} key={item.breadcrumb_id}>{item.breadcrumb_name}</BreadcrumbItem>);
        // console.log('breadcrumb item:', item);
        // if (item !== '') {
        //   sPath += '/' + item;
        //   for (let i = 0; i < fileMatrix.length; i++) {
        //     if (fileMatrix[i].path === sPath) {
        //       if (item === lastItem) {
        //         breadcrumbs.push(<BreadcrumbItem active key={item}>{item}</BreadcrumbItem>);
        //       } else {
        //         breadcrumbs.push(<BreadcrumbItem onClick={this.handleClick.bind(this, fileMatrix[i])} key={item}>{item}</BreadcrumbItem>);
        //       }
        //     }
        //   }
        // } else {
        //   if (fileMatrix) {
        //     if (fileMatrix[0].name === 'root' && breadcrumbs.length === 0) {
        //       breadcrumbs.push(<BreadcrumbItem onClick={this.handleClick.bind(this, fileMatrix[0])} key={fileMatrix[0].id}><Icon name="home"/></BreadcrumbItem>);
        //     }
        //   }
        // }
      });
    }

    return (
      <Breadcrumb>
        {breadcrumbs}
      </Breadcrumb>
    );
  }
}

// Validation.
FileManagerBreadcrumb.propTypes = {
  data: React.PropTypes.array,
  dispatch: React.PropTypes.func,
  state: React.PropTypes.object
};

const mapStateToProps = (state) => ({
  state
});

// Export.
export default connect(mapStateToProps)(FileManagerBreadcrumb);
