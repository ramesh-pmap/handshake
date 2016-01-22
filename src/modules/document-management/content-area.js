// Dependencies.
import React from 'react';
import { connect } from 'react-redux';
import { DEFAULT, PREVIEW, UPLOAD, SEARCH_RESULTS, DATAGRID } from '../../redux/constants';

// Components.
import DocumentListHeader from './components/ContentArea/ContentAreaHeader';
import Default from './components/ContentArea/Default';
import Preview from './components/ContentArea/Preview';
import Upload from './components/ContentArea/Upload';
import SearchResults from './components/ContentArea/SearchResults';
import DataGrid from './components/ContentArea/DataGrid';

// Utility methods.
// import utils from '../../utils';

// Define class.
class ContentArea extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);
  }


  // Render method.
  render() {
    const { state } = this.props;

    // Right Panel
    const currentView = state.contentAreaView;
    let contentArea;

    switch (currentView) {
    case DEFAULT:
      contentArea = (
        <div className="page-content-wrapper">
          <DocumentListHeader />
          <Default />
        </div>
      );
      break;
    case PREVIEW:
      contentArea = <Preview />;
      break;
    case UPLOAD:
      contentArea = (
        <div className="page-content-wrapper">
          <DocumentListHeader />
          <br/>
          <Upload />
        </div>
      );
      break;
    case SEARCH_RESULTS:
      contentArea = (
        <div className="page-content-wrapper">
          <DocumentListHeader />
          <SearchResults />
        </div>
      );
      break;
    case DATAGRID:
      contentArea = (
        <div className="page-content-wrapper">
          <DocumentListHeader />
          <DataGrid />
        </div>
      );
      break;
    default:
      contentArea = (
        <div className="page-content-wrapper">
          <DocumentListHeader />
          <Default />
        </div>
      );
    }
    // console.log('STATE', state);

    return (
      <div>
        {contentArea}
      </div>
    );
  }
}

// propTypes.
ContentArea.propTypes = {
  dispatch: React.PropTypes.func,
  state: React.PropTypes.object
};
const mapStateToProps = (state) => ({
  state
});

// Export.
export default connect(mapStateToProps)(ContentArea);
