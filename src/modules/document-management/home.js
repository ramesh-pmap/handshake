// Dependencies.
import React from 'react';

// Core components.
import {Row, Col} from 'react-bootstrap';
// import Icon from 'react-fa';

// Layouts.
import Main from '../../layouts/shell-demo/main';
import DocumentListHeader from './components/document-list-header';
import RootList from './lists/root';
import UploadList from './lists/upload';
// import UploadList from './lists/upload';

import DocumentActivityList from './components/document-activity-list';
import DocumentDetail from './components/document-detail';
import DocumentDetailForm from './components/document-detail-form';

// Utility methods.
import utils from '../../utils';

// List views const.
const ALLDOCS = 'All Documents';
// const MYDOCS = 'My Documents';
// const RECENTDOCS = 'Recent Documents';
const UPLOADEDDOCS = 'My Pending Uploads';

// Right panel const.
const ACTIVITY = 'activity';
const DETAIL = 'detail';
const DETAILFORM = 'detail-form';

// Define class.
class Page extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);

    // Set page title.
    utils.title(props);

    this.state = {
      width: 0,
      height: 0,
      rightPanel: ACTIVITY,
      currentListView: ALLDOCS
    };
  }

  // Window Resizing.
  updateDimensions() {
    let w = window;
    let d = document;
    let e = d.documentElement;
    let g = d.getElementsByTagName('body')[0];
    let x = w.innerWidth || e.clientWidth || g.clientWidth;
    let y = w.innerHeight || e.clientHeight || g.clientHeight;
    // let nav = d.getElementsByClassName('sidebar-wrapper');
    // let navWidth = nav.innerWidth || nav.clientWidth;
    // x = ( Math.floor((navWidth / 25) * 100) - navWidth );
    this.setState({width: x, height: y});
  }
  componentWillMount() {
    this.updateDimensions();
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  }
  componentDidMount() {
    // Window Resizing.
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }

  // List views.
  showRootList() {
    console.log('all docs view');
    this.setState({ currentListView: ALLDOCS });
  }
  showUploadList() {
    console.log('upload view');
    this.setState({ currentListView: UPLOADEDDOCS });
  }

  // Right panels.
  showDetail() {
    this.setState({ rightPanel: DETAIL });
  }
  showDetailForm() {
    this.setState({ rightPanel: DETAILFORM });
  }
  showActivity() {
    this.setState({ rightPanel: ACTIVITY });
  }

  // Render method.
  render() {
    // Left List View
    const currentListView = this.state.currentListView;
    let listArea;

    switch (currentListView) {
    case ALLDOCS:
      listArea = (<RootList
        showDetail={this.showDetail.bind(this)}
        showDetailForm={this.showDetailForm.bind(this)}
        showActivity={this.showActivity.bind(this)}
      />);
      break;
    case UPLOADEDDOCS:
      listArea = (<UploadList
        showDetail={this.showDetail.bind(this)}
        showDetailForm={this.showDetailForm.bind(this)}
        showActivity={this.showActivity.bind(this)}
      />);
      break;
    default:
      listArea = (<RootList
        showDetail={this.showDetail.bind(this)}
        showDetailForm={this.showDetailForm.bind(this)}
        showActivity={this.showActivity.bind(this)}
      />);
    }

    // Right Panel
    const rightPanel = this.state.rightPanel;
    let rightPanelArea;

    switch (rightPanel) {
    case ACTIVITY:
      rightPanelArea = <DocumentActivityList />;
      break;
    case DETAIL:
      rightPanelArea = <DocumentDetail showDetailForm={this.showDetailForm.bind(this)} />;
      break;
    case DETAILFORM:
      rightPanelArea = <DocumentDetailForm showDetail={this.showDetail.bind(this)} />;
      break;
    default:
      rightPanelArea = <DocumentActivityList />;
    }

    return (
      <Main>
        <Row>
          <Col sm={9} id="doc_mgt-left_column">

            <DocumentListHeader
              showRootList={this.showRootList.bind(this)}
              showUploadList={this.showUploadList.bind(this)}
            />

            {listArea}

          </Col>

          <Col sm={3} id="doc_mgt-right_column" className="sidebar-wrapper">
            <div className="sidebar" style={{height: this.state.height + 'px'}}>

              {rightPanelArea}

            </div>
          </Col>
        </Row>

      </Main>
    );
  }
}


// Export.
export default Page;
