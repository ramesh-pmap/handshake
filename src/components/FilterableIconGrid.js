// Dependencies.
import React from 'react';

// Core components.
import {Grid, Row, Col} from 'react-bootstrap';

// Icon components.
import SearchBar from '../components/SearchBar';
import IconGrid from '../components/IconGrid';

// Define class.
class FilterableGrid extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);
    this.state = {
      filterText: ''
    };
  }

  handleUserInput(filterText) {
    this.setState({filterText});
  }

  // Render method.
  render() {
    const icons = this.props.icons;

    return (
      <Grid fluid>
        <Row>
          <Col xs={12}>
            <SearchBar
              filterText={this.state.filterText}
              onUserInput={this.handleUserInput.bind(this)}
            />
          </Col>
        </Row>

        <Row className="icon-grid">
          <IconGrid icons={icons} filterText={this.state.filterText} />
        </Row>

      </Grid>
    );
  }
}

// Validation.
FilterableGrid.propTypes = {
  icons: React.PropTypes.array
};


// Export.
export default FilterableGrid;
