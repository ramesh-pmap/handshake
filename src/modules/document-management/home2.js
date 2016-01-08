// Dependencies.
import React from 'react';
import { connect } from 'react-redux';
import { changeFolder, setFileManagerData } from '../../redux/actions';

// Core components.
import {Row, Col, ButtonGroup, Button, Image} from 'react-bootstrap';
import Icon from 'react-fa';

// Layouts.
import Main from '../../layouts/shell-demo/main';

// Components
import FileManager from './components/FileManager/FileManager';
import DocumentListHeader from './components/document-list-header';

import DocumentActivityList from './components/document-activity-list';
import DocumentDetail from './components/document-detail';
import DocumentDetailForm from './components/document-detail-form';

// Utility methods.
import utils from '../../utils';

// Json file with folder structure data.
const FileManagerData = '../../../static/data/filemanager-data.json';


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
      data: [],
      rightPanel: ACTIVITY,
      currentListView: ALLDOCS,
      breadcrumb: BC_ROOT,
      showPreview: 'none',
    };
  }

  updateDimensions() {
    const { state } = this.props;
    const sidebarOpened = state.sidebarOpened;
    utils.updateSidePanelWidth(sidebarOpened);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  }

  componentDidMount() {
    const { dispatch } = this.props;
    // Fetch Json data.
    fetch(FileManagerData).then(r => r.json())
      .then(data => {
        // Redux action.
        // utils.createFolderMatrix([], data.fileManager);
        dispatch(setFileManagerData(data.fileManager[0], utils.createFolderMatrix([], data.fileManager) ));
        dispatch(changeFolder(data.fileManager[0].path));
      })
      .catch(error => {this.setState({error}); });

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
    // File Manager data
    const { state } = this.props;
    let fileManagerData = []; // state.currentFolderChildren ? state.currentFolderChildren : [];
    const currentPath = state.currentFolderPath;
    const fileMatrix = state.fileMatrix;

    if (fileMatrix) {
      for (let i = 0; i < fileMatrix.length; i++) {
        if (fileMatrix[i].path === currentPath) {
          fileManagerData = fileMatrix[i].children;
        }
      }
    }
    // console.log('STATE', state);

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
              {/* FileManager component */}
              <FileManager data={fileManagerData} />
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
  dispatch: React.PropTypes.func,
  state: React.PropTypes.object
};
const mapStateToProps = (state) => ({
  state
});

// Export.
export default connect(mapStateToProps)(Page);
