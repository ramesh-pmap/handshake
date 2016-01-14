// Sidebar Panel Resizing.
export default function() {
  let w = window;
  let d = document;
  let e = d.documentElement;
  let g = d.getElementsByTagName('body')[0];
  let windowWidth = w.innerWidth || e.clientWidth || g.clientWidth;
  let windowHeight = w.innerHeight || e.clientHeight || g.clientHeight;

  const dimensions = { width: windowWidth, height: windowHeight };
  // console.log(windowWidth);

  return dimensions;
}
