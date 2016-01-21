// Dependencies.
import React from 'react';
import { connect } from 'react-redux';
import { SHARE, CHECKOUT } from '../../redux/constants';

// Components.
import ModalShare from './components/Modal/Share';
import ModalCheckOut from './components/Modal/CheckOut';


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
    case CHECKOUT:
      modalView = <ModalCheckOut />;
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
