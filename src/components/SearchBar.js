// Dependencies.
import React from 'react';

// UI components
import {Input} from 'react-bootstrap';

// Define class.
class SearchBar extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);
  }

  handleChange() {
    this.props.onUserInput(this.refs.filterTextInput.getValue());
  }

  // Render method.
  render() {
    const filterText = this.props.filterText;

    return (
      <form>
        <Input
          type="text"
          defaultValue={filterText}
          bsSize="large"
          placeholder="Search Icons"
          ref="filterTextInput"
          autoFocus
          onChange={this.handleChange.bind(this)}/>
    </form>
    );
  }
}

// Validation.
SearchBar.propTypes = {
  filterText: React.PropTypes.string,
  onUserInput: React.PropTypes.func
};

// Export.
export default SearchBar;
