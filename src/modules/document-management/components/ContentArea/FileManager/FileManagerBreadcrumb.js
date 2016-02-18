// Dependencies.
import React from 'react';
import { connect } from 'react-redux';

import { changeFolder, setRightPanelAreaView } from '../../../../../redux/actions/ui-actions';
import { fetchFolder } from '../../../../../redux/actions/folder-actions';
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
    const { state, dispatch } = this.props;
    let token = state.global.authorizationToken;
    let consumerId = state.global.consumerId;
    // Redux action.
    dispatch(changeFolder(id));
    dispatch(fetchFolder(id, token, consumerId));
    dispatch(setRightPanelAreaView(ACTIVITY));
  }

  // Render method.
  render() {
    const breadcrumbsData = this.props.data;
    let breadcrumbs = [];

    if (breadcrumbsData) {
      breadcrumbsData.forEach((item, index) => {
        // Breadcrumb array is reversed.
        if (index === 0) {
          breadcrumbs.push(<BreadcrumbItem active key={item.Uid}>{item.Description}</BreadcrumbItem>);
        } else {
          breadcrumbs.push(<BreadcrumbItem onClick={this.handleClick.bind(this, item.Id)} key={item.Uid + item.Description}>{item.Description}</BreadcrumbItem>);
        }
      });
    }

    return (
      <Breadcrumb>
        <BreadcrumbItem onClick={this.handleClick.bind(this, 'root')} key={'root'}><Icon name="home"/></BreadcrumbItem>
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
