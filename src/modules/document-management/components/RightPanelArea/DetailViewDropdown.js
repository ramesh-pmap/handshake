// Dependencies.
import React from 'react';
import { connect } from 'react-redux';
import { setRightPanelAreaView } from '../../../../redux/actions';
import { DETAIL, /* VIEWER_CHANGE_REQUEST, */ APPROVE_CHANGE_REQUEST, VERSION_HISTORY } from '../../../../redux/constants';

import { ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap';

// Const.
const DETAIL_TITLE = 'Document Details';
const VERSION_HISTORY_TITLE = 'Version History';
const APPROVE_CHANGE_REQUEST_TITLE = 'Change Requests';

// Define class.
class DetailViewDropdown extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);

    this.state = {
      currentViewTitle: 'Dropdown'
    };
  }

  componentWillMount() {
    const { state } = this.props;
    switch (state.rightPanelAreaView) {
    case DETAIL:
      this.setState({ currentViewTitle: DETAIL_TITLE });
      break;
    case VERSION_HISTORY:
      this.setState({ currentViewTitle: VERSION_HISTORY_TITLE });
      break;
    case APPROVE_CHANGE_REQUEST:
      this.setState({ currentViewTitle: APPROVE_CHANGE_REQUEST_TITLE });
      break;
    default:
      this.setState({ currentViewTitle: DETAIL_TITLE });
    }
  }

  handleTabClick(view) {
    console.log(view);
    const { dispatch } = this.props;
    dispatch(setRightPanelAreaView(view));
  }

  // Render method.
  render() {
    const dropdownTitle = this.state.currentViewTitle;

    return (
      <ButtonGroup className="title-dropdown">
        <DropdownButton id="documentDetailViewDropdown" title={dropdownTitle} bsStyle="link" bsSize="md">
          <MenuItem onClick={this.handleTabClick.bind(this, DETAIL)}> {DETAIL_TITLE} </MenuItem>
          <MenuItem onClick={this.handleTabClick.bind(this, APPROVE_CHANGE_REQUEST)}> {APPROVE_CHANGE_REQUEST_TITLE} </MenuItem>
          <MenuItem onClick={this.handleTabClick.bind(this, VERSION_HISTORY)}> {VERSION_HISTORY_TITLE} </MenuItem>
        </DropdownButton>
      </ButtonGroup>
    );
  }
}

// propTypes.
DetailViewDropdown.propTypes = {
  dispatch: React.PropTypes.func,
  state: React.PropTypes.object
};
const mapStateToProps = (state) => ({
  state
});

// Export.
export default connect(mapStateToProps)(DetailViewDropdown);
