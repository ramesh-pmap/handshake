// Dependencies.
import React from 'react';

// Core components.
import {Row, Col, Breadcrumb, BreadcrumbItem, ButtonGroup, Button, Image} from 'react-bootstrap';
import Icon from 'react-fa';

// Layouts.
import Main from '../../layouts/shell-demo/main';
import DocumentListHeader from './components/document-list-header';
import RootList from './lists/all-docs';
import UploadList from './lists/upload';

// import UploadList from './lists/upload';

import DocumentActivityList from './components/document-activity-list';
import DocumentDetail from './components/document-detail';
import DocumentDetailForm from './components/document-detail-form';

// Utility methods.
import utils from '../../utils';

// Breadcrumb const.
const BC_ROOT = 'root';
const BC_UPLOAD = 'upload';
const BC_SAMPLEFOLDER = 'sample folder';

// List views const.
const ALLDOCS = 'All Documents';
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
      currentListView: ALLDOCS,
      breadcrumb: BC_ROOT,
      showPreview: 'none',
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
    this.showActivity();
    this.setState({ currentListView: ALLDOCS, breadcrumb: BC_ROOT });
  }

  showUploadList() {
    this.showActivity();
    this.setState({ currentListView: UPLOADEDDOCS, breadcrumb: BC_UPLOAD });
  }

  showSampleFolder() {
    this.showActivity();
    this.setState({ currentListView: ALLDOCS, breadcrumb: BC_SAMPLEFOLDER });
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

  // Close preview.
  closePreview() {
    this.setState({ showPreview: 'none' });
  }

  showPreview() {
    this.setState({ showPreview: 'block' });
  }

  // Render method.
  render() {
    // Breadcrumbs
    const breadcrumb = this.state.breadcrumb;
    let breadcrumbsArea;

    switch (breadcrumb) {
    case BC_ROOT:
      breadcrumbsArea = (<Breadcrumb>
          <BreadcrumbItem active><Icon name="home"/> /</BreadcrumbItem>
        </Breadcrumb>);
      break;
    case BC_UPLOAD:
      breadcrumbsArea = (<Breadcrumb>
          <BreadcrumbItem onClick={this.showRootList.bind(this)}><Icon name="home"/></BreadcrumbItem>
          <BreadcrumbItem active>Uploads</BreadcrumbItem>
        </Breadcrumb>);
      break;
    case BC_SAMPLEFOLDER:
      breadcrumbsArea = (<Breadcrumb>
          <BreadcrumbItem><Icon name="home"/></BreadcrumbItem>
          <BreadcrumbItem>1.0 EH&S Management System</BreadcrumbItem>
          <BreadcrumbItem>1.01 Incident and Emergency Management</BreadcrumbItem>
          <BreadcrumbItem>1.01.01 Incident Management</BreadcrumbItem>
          <BreadcrumbItem active>1.01.01.2 Procedures</BreadcrumbItem>
        </Breadcrumb>);
      break;
    default:
      breadcrumbsArea = null;
    }

    // Left List View
    const currentListView = this.state.currentListView;
    let listArea;

    switch (currentListView) {
    case ALLDOCS:
      listArea = (<RootList
        showDetail={this.showDetail.bind(this)}
        showDetailForm={this.showDetailForm.bind(this)}
        showActivity={this.showActivity.bind(this)}
        showRootList={this.showRootList.bind(this)}
        showUploadList={this.showUploadList.bind(this)}
        showSampleFolder={this.showSampleFolder.bind(this)}
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
      listArea = null;
    }

    // Right Panel
    const rightPanel = this.state.rightPanel;
    let rightPanelArea;

    switch (rightPanel) {
    case ACTIVITY:
      rightPanelArea = <DocumentActivityList />;
      break;
    case DETAIL:
      rightPanelArea = (<DocumentDetail
        showDetailForm={this.showDetailForm.bind(this)}
        showPreview={this.showPreview.bind(this)}
      />);
      break;
    case DETAILFORM:
      rightPanelArea = <DocumentDetailForm showDetail={this.showDetail.bind(this)} />;
      break;
    default:
      rightPanelArea = <DocumentActivityList />;
    }

    return (
      <div>
        <Main>
          <Row>
            <Col sm={9} id="doc_mgt-left_column">

              <DocumentListHeader
                showRootList={this.showRootList.bind(this)}
                showUploadList={this.showUploadList.bind(this)}
                showSampleFolder={this.showSampleFolder.bind(this)}
              />

              {breadcrumbsArea}

              {listArea}

            </Col>

            <Col sm={3} id="doc_mgt-right_column" className="sidebar-wrapper">
              <div className="sidebar" style={{height: this.state.height + 'px'}}>

                {rightPanelArea}

              </div>
            </Col>
          </Row>

        </Main>

        <div className="preview-panel" style={{ display: this.state.showPreview }}>
          <div className="preview-panel-toolbar clearfix">
            <div className="pull-left lead">
              sample-word-document.docx
            </div>
            <ButtonGroup className="pull-right">
              <Button bsStyle="link">
                <Icon name="print" className="fa-lg text-muted" />
              </Button>
              <Button bsStyle="link">
                <Icon name="share-square-o" className="fa-lg text-muted" />
              </Button>
              <Button bsStyle="link">
                <Icon name="info-circle" className="fa-lg text-muted" />
              </Button>
              <Button bsStyle="link" onClick={this.closePreview.bind(this)}>
                <Icon name="times" className="fa-lg text-muted" />
              </Button>
            </ButtonGroup>
            <div className="pull-right">
            </div>
          </div>
          <Image src="/static/images/sample-doc-preview.png" />
        </div>

      </div>
    );
  }
}


// Export.
export default Page;
