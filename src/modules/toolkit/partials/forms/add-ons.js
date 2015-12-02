// Dependencies.
import React from 'react';
import Icon from 'react-fa';

// Core components.
import {Input, Button, DropdownButton, MenuItem} from 'react-bootstrap';

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
    let innerIcon = <Icon name="music" />;
    let innerButton = <Button>Before</Button>;
    let innerDropdown = (
      <DropdownButton title="Action" id="input-dropdown-addon">
        <MenuItem key="1">Item 1</MenuItem>
        <MenuItem key="2">Item 2</MenuItem>
        <MenuItem key="3">Item 3</MenuItem>
      </DropdownButton>
    );
    return (
      <div className="doc-section">

        <h2>Add-ons</h2>

        <p>Use <code>addonBefore</code> and <code>addonAfter</code> for normal addons, <code>buttonBefore</code> and <code>buttonAfter</code> for button addons. Exotic configurations may require some css on your side.</p>

        <div className="bs-example">
          <form>
            <Input type="text" addonBefore="@" />
            <Input type="text" addonAfter=".00" />
            <Input type="text" addonBefore="$" addonAfter=".00" />
            <Input type="text" addonAfter={innerIcon} />
            <Input type="text" buttonBefore={innerButton} />
            <Input type="text" buttonAfter={innerDropdown} />
          </form>
        </div>

        <Highlight className="html">
          {' \
render() { \n \
  let innerIcon = <Icon name="music" />; \n \
  let innerButton = <Button>Before</Button>; \n \
  let innerDropdown = ( \n \
    <DropdownButton title="Action" id="input-dropdown-addon"> \n \
      <MenuItem key="1">Item 1</MenuItem> \n \
      <MenuItem key="2">Item 2</MenuItem> \n \
      <MenuItem key="3">Item 3</MenuItem> \n \
    </DropdownButton> \n \
  ); \n \
  return ( \n \
    <form> \n \
      <Input type="text" addonBefore="@" /> \n \
      <Input type="text" addonAfter=".00" /> \n \
      <Input type="text" addonBefore="$" addonAfter=".00" /> \n \
      <Input type="text" addonAfter={innerIcon} /> \n \
      <Input type="text" buttonBefore={innerButton} /> \n \
      <Input type="text" buttonAfter={innerDropdown} /> \n \
    </form> \n \
  }\n \
} \
          '}
        </Highlight>

      </div>
    );
  }
}

// Export.
export default Partial;
