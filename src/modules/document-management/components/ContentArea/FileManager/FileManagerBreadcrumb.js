// Dependencies.
import React from 'react';
import { connect } from 'react-redux';

import { changeFolder, setRightPanelAreaView } from '../../../../../redux/actions/ui-actions';
import { ACTIVITY } from '../../../../../redux/constants/ui-constants';

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
    dispatch(setRightPanelAreaView(ACTIVITY));
  }

  // Render method.
  render() {
    const breadcrumbsData = this.props.data;
    let breadcrumbs = [];
    // Work in progress.

    if (breadcrumbsData) {
      breadcrumbsData.forEach((item, index) => {
        // Breadcrumb array is reversed.
        if (index === 0) {
          breadcrumbs.push(<BreadcrumbItem active key={item.breadcrumb_id}>{item.breadcrumb_name}</BreadcrumbItem>);
        } else {
          breadcrumbs.push(<BreadcrumbItem onClick={this.handleClick.bind(this, item.breadcrumb_id)} key={item.breadcrumb_id + item.breadcrumb_name}>{item.breadcrumb_name}</BreadcrumbItem>);
        }
      });
    }

    return (
      <Breadcrumb>
        <BreadcrumbItem onClick={this.handleClick.bind(this, 0)} key={'0'}><Icon name="home"/></BreadcrumbItem>
        {breadcrumbs.reverse()}
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
