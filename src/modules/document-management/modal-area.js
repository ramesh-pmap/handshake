// Dependencies.
import React from 'react';
import { connect } from 'react-redux';
import { SHARE, CHECKIN, CHECKOUT, DOWNLOAD, UPLOAD_NEW_VERSION } from '../../redux/constants';

// Components.
import ModalShare from './components/Modal/Share';
import ModalCheckIn from './components/Modal/CheckIn';
import ModalCheckOut from './components/Modal/CheckOut';
import ModalDownload from './components/Modal/Download';
import ModalUploadNewVersion from './components/Modal/UploadNewVersion';

// Define class.
class ModalArea extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);
  }

  // Render method.
  render() {
    const { state } = this.props;
    // Modal view.
    const currentView = state.modalView;
    let modalView;
    switch (currentView) {
    case SHARE:
      modalView = <ModalShare />;
      break;
    case CHECKIN:
      modalView = <ModalCheckIn />;
      break;
    case CHECKOUT:
      modalView = <ModalCheckOut />;
      break;
    case DOWNLOAD:
      modalView = <ModalDownload />;
      break;
    case UPLOAD_NEW_VERSION:
      modalView = <ModalUploadNewVersion />;
      break;
    default:
      modalView = <ModalShare />;
    }

    return (
      <div>
        {modalView}
      </div>
    );
  }
}

// propTypes.
ModalArea.propTypes = {
  dispatch: React.PropTypes.func,
  state: React.PropTypes.object
};
const mapStateToProps = (state) => ({
  state
});

// Export.
export default connect(mapStateToProps)(ModalArea);
