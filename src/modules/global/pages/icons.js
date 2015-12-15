// Dependencies.
import React from 'react';

// Core components.
import {Panel} from 'react-bootstrap';
import {DataTable} from 'react-data-components';

// Utility methods.
import utils from '../../../utils';

// Layout components.
import Main from '../../../layouts/main';

// Json file with icons data.
const JsonFile = '../../../static/icons/data-icons.json';

// Render Icon column.
const renderIcon = (val, row) => {
  return row.NAME ? <img width="30" height="30" src={`./static/icons/svg/${row.NAME}.svg`} alt={`${row.NAME}.svg`} /> : false;
};

// Config fields/columns.
const columns = [
  { title: 'Folder', prop: 'FOLDER'},
  { title: 'Directory', prop: 'DIRECTORY'},
  { title: 'Name', prop: 'NAME'},
  { title: 'Icon', render: renderIcon, className: 'text-center'}
];

// Define class.
class Page extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);

    // Set page title.
    utils.title(props);

    this.state = {
      data: [],
      error: []
    };
  }

  componentDidMount() {
    // Fetch Json data.
    fetch(JsonFile).then(r => r.json())
      .then(data => {this.setState({data}); })
      .catch(error => {this.setState({error}); });
  }

  // Render method.
  render() {
    return (
      <Main>
        <Panel header={<div>Data Grid : Icons view</div>} bsStyle="primary">
          <DataTable
            className="container"
            keys={[ 'FOLDER', 'DIRECTORY', 'NAME' ]}
            columns={columns}
            initialData={this.state.data}
            initialPageLength={5}
            initialSortBy={{ prop: 'FOLDER', order: 'descending' }}
            pageLengthOptions={[ 5, 20, 50 ]}
          />
        </Panel>
      </Main>
    );
  }
}


// Export.
export default Page;
