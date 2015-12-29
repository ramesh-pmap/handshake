// Dependencies.
import React from 'react';
import { connect } from 'react-redux';
// import { toggleSidebar } from '../../redux/actions';
import { updateSidePanelWidth } from '../../utils';

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
      rightPanel: ACTIVITY,
      currentListView: ALLDOCS,
      breadcrumb: BC_ROOT,
      showPreview: 'none',
    };
  }

  updateDimensions() {
    const { state } = this.props;
    const sidebarOpened = state.sidebarOpened;
    updateSidePanelWidth(sidebarOpened);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  }

  componentDidMount() {
    this.updateDimensions();
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
        showPreview={this.showPreview.bind(this)}
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
              <Button bsStyle="link" bsSize="sm" className="text-muted">
                <Icon name="print" className="fa-lg" />
                &nbsp;
                Print
              </Button>
              <Button bsStyle="link" bsSize="sm" className="text-muted">
                <Icon name="download" className="fa-lg" />
                &nbsp;
                Download
              </Button>
              <Button bsStyle="link" bsSize="sm" className="text-muted">
                <Icon name="share-square-o" className="fa-lg" />
                &nbsp;
                Share
              </Button>
              <Button bsStyle="link" bsSize="sm" className="text-muted" onClick={this.closePreview.bind(this)}>
                <Icon name="times" className="fa-lg" />
                &nbsp;
                Close
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

// propTypes.
Page.propTypes = {
  state: React.PropTypes.object
};
const mapStateToProps = (state) => ({
  state
});

// Export.
export default connect(mapStateToProps)(Page);
