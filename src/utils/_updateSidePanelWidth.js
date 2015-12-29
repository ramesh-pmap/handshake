// Sidebar Panel Resizing.
export default function(sidebarOpenedArg) {
  let sidePanel = document.querySelector('#doc_mgt-right_column');
  if (sidePanel != null) {
    let w = window;
    let d = document;
    let e = d.documentElement;
    let g = d.getElementsByTagName('body')[0];
    let x = w.innerWidth || e.clientWidth || g.clientWidth;
    // let y = w.innerHeight || e.clientHeight || g.clientHeight;

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
