// Dependencies.
import React from 'react';

// Core components.
import {Tooltip, OverlayTrigger} from 'react-bootstrap';


// Define class.
class LinkWithTooltip extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);
  }

  // Render method.
  render() {
    let tooltip = <Tooltip id="tp1">{this.props.tooltip}</Tooltip>;

    return (
      <OverlayTrigger
        overlay={tooltip} placement="top"
        delayShow={300} delayHide={150}
      >
        <a href={this.props.href}>{this.props.children}</a>
      </OverlayTrigger>
    );
  }
}

// Validation.
LinkWithTooltip.propTypes = {
  tooltip: React.PropTypes.node,
  href: React.PropTypes.string
};

// Export.
export default LinkWithTooltip;
