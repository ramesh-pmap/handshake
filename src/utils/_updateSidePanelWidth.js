import getWindowDimensions from './_getWindowDimensions';

// Sidebar Panel Resizing.
export default function(sidebarOpenedArg) {
  let sidePanel = document.querySelector('#doc_mgt-right_column');
  if (sidePanel != null) {
    const dimensions = getWindowDimensions();
    const x = dimensions.width;

    let navWidth = 230;
    let percentageWidth = Math.floor(x / 4);

    if (sidebarOpenedArg) {
      percentageWidth = Math.floor((x - navWidth) / 4);
    }

    // console.log('============================');
    // console.log('open:', sidebarOpenedArg);
    // console.log('x:', x);
    // console.log('percentageWidth:', percentageWidth);
    // console.log('navWidth:', navWidth);

    // this.setState({width: x, height: y});
    if (x >= 768) {
      sidePanel.style.width = percentageWidth + 'px';
    } else {
      sidePanel.style.width = '100%';
    }
  }
}
