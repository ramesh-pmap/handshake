// Dependencies.
import React from 'react';

// Core components.
import LinkWithTooltip from '../../partials/tooltips/link';


// Syntax Highlighter.
import Highlight from 'react-highlight';

// Define class.
class Partial extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);
  }

  // Render method.
  render() {
    return (
      <div className="doc-section">

        <h2>In text copy</h2>

        <p>Positioned tooltip in text copy.</p>

        <div className="bs-example">
          <p className="muted" style={{ marginBottom: 0 }}>
            Tight pants next level keffiyeh <LinkWithTooltip tooltip="Default tooltip" href="#">you probably</LinkWithTooltip> haven't
            heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown. Farm-to-table seitan, mcsweeney's
            fixie sustainable quinoa 8-bit american apparel <LinkWithTooltip tooltip={<span>Another <strong>tooltip</strong></span>} href="#">have a</LinkWithTooltip>
            terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo thundercats. Tofu biodiesel williamsburg marfa, four
            loko mcsweeney's cleanse vegan chambray. A really ironic artisan <LinkWithTooltip tooltip="Another one here too" href="#">whatever keytar</LinkWithTooltip>,
            scenester farm-to-table banksy Austin <LinkWithTooltip tooltip="The last tip!" href="#">twitter handle</LinkWithTooltip> freegan
            cred raw denim single-origin coffee viral.
          </p>

        </div>

        <Highlight className="html">
          {' \
const LinkWithTooltip = React.createClass({ \n \
  render() { \n \
    let tooltip = <Tooltip>{this.props.tooltip}</Tooltip>; \n \
 \n \
    return ( \n \
      <OverlayTrigger \n \
        overlay={tooltip} placement="top" \n \
        delayShow={300} delayHide={150} \n \
      > \n \
        <a href={this.props.href}>{this.props.children}</a> \n \
      </OverlayTrigger> \n \
    ); \n \
  } \n \
}); \n \
 \n \
const copyInstance = ( \n \
  <p className="muted" style={{ marginBottom: 0 }}> \n \
    Tight pants next level keffiyeh <LinkWithTooltip tooltip="Default tooltip" href="#">you probably</LinkWithTooltip> haven\'t heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown. Farm-to-table seitan, mcsweeney\'s fixie sustainable quinoa 8-bit american apparel <LinkWithTooltip tooltip={<span>Another <strong>tooltip</strong></span>} href="#">have a</LinkWithTooltip> terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo thundercats. Tofu biodiesel williamsburg marfa, four loko mcsweeney\'s cleanse vegan chambray. A really ironic artisan <LinkWithTooltip tooltip="Another one here too" href="#">whatever keytar</LinkWithTooltip>, scenester farm-to-table banksy Austin <LinkWithTooltip tooltip="The last tip!" href="#">twitter handle</LinkWithTooltip> freegan cred raw denim single-origin coffee viral. \n \
  </p> \n \
); \n \
 \n \
ReactDOM.render(copyInstance, mountNode); '}
        </Highlight>

      </div>
    );
  }
}

// Export.
export default Partial;
