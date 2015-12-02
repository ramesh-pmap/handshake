// Dependencies.
import React from 'react';

// Core components.
import {Nav, SubNav, NavItem} from 'react-bootstrap';


// Define class.
class Page extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);
  }

  // Render method.
  render() {
    return (

      <Nav className="text-nav fixed" data-spy="affix"
        ulClassName="nav">

        <SubNav href="#" text="Basic" active>
          <NavItem href="#buttons_groups">Button groups</NavItem>
          <NavItem href="#buttons_dropdowns">Button dropdowns</NavItem>
          <NavItem href="#buttons_menuitems">Menu Item</NavItem>
        </SubNav>

        <SubNav href="#overlays" text="Overlays" active>
          <NavItem href="#overlays_modals">Modals</NavItem>
          <NavItem href="#overlays_tooltips">Tooltips</NavItem>
          <NavItem href="#overlays_popovers">Popovers</NavItem>
        </SubNav>

        <SubNav href="#navs" text="Navigation" active>
          <NavItem href="#navs">Navs</NavItem>
          <NavItem href="#navs_navbars">Navbars</NavItem>
          <NavItem href="#navs_breadcrumbs">Breadcrumbs</NavItem>
          <NavItem href="#navs_tabs">Tabs</NavItem>
          <NavItem href="#navs_pagination">Pagination</NavItem>
          <NavItem href="#navs_pager">Pager</NavItem>
        </SubNav>

        <SubNav href="#layout" text="Page Layout" active>
          <NavItem href="#layout">Grid System</NavItem>
          <NavItem href="#layout_jumbotron">Jumbotron</NavItem>
          <NavItem href="#layout_page-header">Page Header</NavItem>
          <NavItem href="#layout_list-group">List Group</NavItem>
          <NavItem href="#layout_tables">Tables</NavItem>
          <NavItem href="#layout_panels">Panels</NavItem>
          <NavItem href="#layout_wells">Wells</NavItem>
        </SubNav>

        <NavItem href="#forms" active>
          Forms
        </NavItem>

        <SubNav href="#media" text="Media Content" active>
          <NavItem href="#media">Images</NavItem>
          <NavItem href="#media_thumbnails">Thumbnails</NavItem>
          <NavItem href="#media_responsive-embed">Responsive Embed</NavItem>
        </SubNav>

        <SubNav href="#misc" text="Miscellaneous" active>
          <NavItem href="#misc">Labels</NavItem>
          <NavItem href="#misc_badges">Badges</NavItem>
          <NavItem href="#misc_alerts">Alerts</NavItem>
          <NavItem href="#misc_progress-bars">Progress Bars</NavItem>
        </SubNav>

      </Nav>

    );
  }
}

// Export.
export default Page;
