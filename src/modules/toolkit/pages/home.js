// Dependencies.
import React from 'react';

// Utility methods.
import utils from '../../../utils';

// Core components.
import {Grid, Row, Col} from 'react-bootstrap';

// Common components.
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Sidebar from '../../../components/SidebarLeft';

// Partials.
import RightNav from './right-nav';
import Buttons from '../partials/buttons/basic';
import ButtonSizes from '../partials/buttons/sizes';
import ButtonActive from '../partials/buttons/active-state';
import ButtonDisabled from '../partials/buttons/disabled-state';
import ButtonTags from '../partials/buttons/tags';
import ButtonLoading from '../partials/buttons/loading-state';
import ButtonProps from '../partials/buttons/props';

import ButtonGroups from '../partials/button-groups/basic';
import ButtonToolbar from '../partials/button-groups/toolbar';
import ButtonSizing from '../partials/button-groups/sizing';
import ButtonNesting from '../partials/button-groups/nesting';
import ButtonVertical from '../partials/button-groups/vertical';
import ButtonJustified from '../partials/button-groups/justified';

import ButtonDropdowns from '../partials/button-dropdowns/single';
import ButtonDropdownsSplit from '../partials/button-dropdowns/split';
import ButtonDropdownsSizing from '../partials/button-dropdowns/sizing';
import ButtonDropdownsNoCaret from '../partials/button-dropdowns/no-caret';
import ButtonDropdownsRight from '../partials/button-dropdowns/dropdown-right';
import ButtonDropdownsDropup from '../partials/button-dropdowns/dropup';

import ButtonMenuItem from '../partials/menu-item/menu-item';

import Panels from '../partials/panels/basic';
import PanelsCollapsible from '../partials/panels/collapsible';
import PanelsHeading from '../partials/panels/heading';
import PanelsFooter from '../partials/panels/footer';
import PanelsAlt from '../partials/panels/alternatives';
import PanelsTablesListgroups from '../partials/panels/tables-listgroups';
import PanelsControlled from '../partials/panels/controlled';
import PanelsUncontrolled from '../partials/panels/uncontrolled';
import PanelsAccordions from '../partials/panels/accordions';

import Tooltips from '../partials/tooltips/basic';
import TooltipsOverlayTrigger from '../partials/tooltips/overlay-trigger';
import TooltipsInText from '../partials/tooltips/in-text';

import Popovers from '../partials/popovers/basic';
import PopoversOverlayTrigger from '../partials/popovers/overlay-trigger';
import PopoversTrigger from '../partials/popovers/trigger-behaviors';
import PopoversContainer from '../partials/popovers/container';
import PopoversScrollingContainer from '../partials/popovers/scrolling-container';

import Overlay from '../partials/overlay/basic';
import OverlayInstead from '../partials/overlay/instead';

import Modals from '../partials/modal/basic';
import ModalsSizing from '../partials/modal/sizing';

import ProgressBars from '../partials/progress-bars/basic';
import ProgressBarsLabel from '../partials/progress-bars/label';
import ProgressBarsScreenreader from '../partials/progress-bars/screenreader';
import ProgressBarsAlternatives from '../partials/progress-bars/alternatives';
import ProgressBarsStriped from '../partials/progress-bars/striped';
import ProgressBarsAnimated from '../partials/progress-bars/animated';
import ProgressBarsStacked from '../partials/progress-bars/stacked';

import Navs from '../partials/navs/basic';
import NavsDropdown from '../partials/navs/dropdown';
import NavsStacked from '../partials/navs/stacked';
import NavsJustified from '../partials/navs/justified';

import Navbars from '../partials/navbars/basic';
import NavbarsMobile from '../partials/navbars/mobile';
import NavbarsMultiple from '../partials/navbars/mobile-multiple';

import Breadcrumbs from '../partials/breadcrumbs/basic';

import TabsUncontrolled from '../partials/tabs/uncontrolled';
import TabsControlled from '../partials/tabs/controlled';
import TabsNoAnimation from '../partials/tabs/no-animation';
import TabsLeft from '../partials/tabs/left-tabs';

import Pager from '../partials/pager/basic';
import PagerAligned from '../partials/pager/aligned';
import PagerDisabled from '../partials/pager/disabled';

import Pagination from '../partials/pagination/basic';
import PaginationOptions from '../partials/pagination/options';

import Alerts from '../partials/alerts/basic';
import AlertsCloseable from '../partials/alerts/closeable';
import AlertsAuto from '../partials/alerts/auto-closeable';

import Grids from '../partials/grids/basic';

import Images from '../partials/images/shape';
import ImagesResponsive from '../partials/images/responsive';

import Thumbnails from '../partials/thumbnails/anchor';
import ThumbnailsDivider from '../partials/thumbnails/divider';

import ListGroup from '../partials/list-group/basic';
import ListGroupLinked from '../partials/list-group/linked';
import ListGroupState from '../partials/list-group/styling-state';
import ListGroupColor from '../partials/list-group/styling-color';
import ListGroupHeader from '../partials/list-group/header';

import Labels from '../partials/labels/basic';
import LabelsVariations from '../partials/labels/variations';

import Badges from '../partials/badges/basic';

import Jumbotron from '../partials/jumbotron/basic';

import PageHeader from '../partials/page-header/basic';

import ResponsiveEmbed from '../partials/embed/responsive';

import Wells from '../partials/wells/basic';
import WellsOptions from '../partials/wells/options';

import Tables from '../partials/tables/basic';
import TablesResponsive from '../partials/tables/responsive';

import Forms from '../partials/forms/input';
import FormsTypes from '../partials/forms/types';
import FormsStatic from '../partials/forms/static';
import FormsButtonInputs from '../partials/forms/button-input';
import FormsAddons from '../partials/forms/add-ons';
import FormsSizes from '../partials/forms/sizes';
import FormsValidation from '../partials/forms/validation';
import FormsHorizontal from '../partials/forms/horizontal';
import FormsWrapper from '../partials/forms/wrapper';

// Syntax Highlighter.
/* (https://highlightjs.org/static/demo/) */
import '../../../styles/css/syntax-highlight/react-highlight-theme-monokai_sublime.css';


// Define class.
class Page extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);

    // Set page title.
    utils.title(props);
  }

  // Render method.
  render() {
    return (
      <div id="shellWrapper" className="shell-wrapper doc-wrapper">

        <Sidebar title="mars" />

        <Header />

        <div className="page-content-wrapper">
          <Grid fluid>
            <Row>

              <Col sm={9}>

                <div id="buttons" className="doc-section">
                  <h1 className="page-header">
                    Buttons
                    <small>{'{Button}'}</small>
                  </h1>
                  <Buttons />
                  <ButtonSizes />
                  <ButtonActive />
                  <ButtonDisabled />
                  <ButtonTags />
                  <ButtonLoading />
                  <ButtonProps />
                </div>

                <div id="buttons_groups"></div>
                <div className="doc-section">
                  <h1 className="page-header">
                    Button groups
                    <small>{'{ButtonGroup, ButtonToolbar}'}</small>
                  </h1>
                  <p className="lead">Group a series of buttons together on a single line with the button group.</p>
                  <ButtonGroups />
                  <ButtonToolbar />
                  <ButtonSizing />
                  <ButtonNesting />
                  <ButtonVertical />
                  <ButtonJustified />
                </div>

                <div id="buttons_dropdowns"></div>
                <div className="doc-section">
                  <h1 className="page-header">
                    Button dropodowns
                  </h1>
                  <p className="lead">Use <code>&lt;DropdownButton /&gt;</code> or <code>&lt;SplitButton /&gt;</code> components to display a button with a dropdown menu.</p>
                  <ButtonDropdowns />
                  <ButtonDropdownsSplit />
                  <ButtonDropdownsSizing />
                  <ButtonDropdownsNoCaret />
                  <ButtonDropdownsRight />
                  <ButtonDropdownsDropup />
                </div>

                <div id="buttons_menuitems"></div>
                <div className="doc-section">
                  <h1 className="page-header">
                    Menu Item
                  </h1>
                  <ButtonMenuItem />
                </div>

                <div id="overlays"></div>
                <div className="doc-section">
                  <h1 className="page-header">
                    Overlays
                  </h1>
                  <Overlay />
                  <OverlayInstead />
                </div>

                <div id="overlays_modals" className="doc-section">
                  <h1 className="page-header">
                    Modals
                  </h1>
                  <Modals />
                  <ModalsSizing />
                </div>

                <div id="overlays_tooltips" className="doc-section">
                  <h1 className="page-header">
                    Tooltips
                  </h1>
                  <Tooltips />
                  <TooltipsOverlayTrigger />
                  <TooltipsInText />
                </div>

                <div id="overlays_popovers" className="doc-section">
                  <h1 className="page-header">
                    Popovers
                  </h1>
                  <Popovers />
                  <PopoversOverlayTrigger />
                  <PopoversTrigger />
                  <PopoversContainer />
                  <PopoversScrollingContainer />
                </div>

                <div id="navs"></div>
                <div className="doc-section">
                  <h1 className="page-header">
                    Navs
                    <small>{'{Nav, NavItem}'}</small>
                  </h1>
                  <Navs />
                  <NavsDropdown />
                  <NavsStacked />
                  <NavsJustified />
                </div>

                <div id="navs_navbars"></div>
                <div className="doc-section">
                  <h1 className="page-header">
                    Navbars
                  </h1>
                  <Navbars />
                  <NavbarsMobile />
                  <NavbarsMultiple />
                </div>

                <div id="navs_breadcrumbs"></div>
                <div className="doc-section">
                  <h1 className="page-header">
                    Breadcrumbs
                  </h1>
                  <Breadcrumbs />
                </div>

                <div id="navs_tabs"></div>
                <div className="doc-section">
                  <h1 className="page-header">
                    Tabs
                  </h1>
                  <TabsUncontrolled />
                  <TabsControlled />
                  <TabsNoAnimation />
                  <TabsLeft />
                </div>

                <div id="navs_pagination"></div>
                <div className="doc-section">
                  <h1 className="page-header">
                    Pagination
                  </h1>
                  <Pagination />
                  <PaginationOptions />
                </div>

                <div id="navs_pager"></div>
                <div className="doc-section">
                  <h1 className="page-header">
                    Pager
                  </h1>
                  <Pager />
                  <PagerAligned />
                  <PagerDisabled />
                </div>

                <div id="layout"></div>
                <div className="doc-section">
                  <h1 className="page-header">
                    Grid System
                  </h1>
                  <Grids />
                </div>

                <div id="layout_jumbotron"></div>
                <div className="doc-section">
                  <h1 className="page-header">
                    Jumbotron
                  </h1>
                  <Jumbotron />
                </div>

                <div id="layout_page-header"></div>
                <div className="doc-section">
                  <h1 className="page-header">
                    Page Header
                  </h1>
                  <PageHeader />
                </div>

                <div id="layout_list-group"></div>
                <div className="doc-section">
                  <h1 className="page-header">
                    List Group
                  </h1>
                  <ListGroup />
                  <ListGroupLinked />
                  <ListGroupState />
                  <ListGroupColor />
                  <ListGroupHeader />
                </div>

                <div id="layout_tables"></div>
                <div className="doc-section">
                  <h1 className="page-header">
                    Tables
                  </h1>
                  <Tables />
                  <TablesResponsive />
                </div>

                <div id="layout_panels"></div>
                <div className="doc-section">
                  <h1 className="page-header">
                    Panels
                    <small>{'{Panel, PanelGroup, Accordion}'}</small>
                  </h1>
                  <Panels />
                  <PanelsCollapsible />
                  <PanelsHeading />
                  <PanelsFooter />
                  <PanelsAlt />
                  <PanelsTablesListgroups />
                  <PanelsControlled />
                  <PanelsUncontrolled />
                  <PanelsAccordions />
                </div>

                <div id="layout_wells"></div>
                <div className="doc-section">
                  <h1 className="page-header">
                    Wells
                  </h1>
                  <Wells />
                  <WellsOptions />
                </div>

                <div id="forms"></div>
                <div className="doc-section">
                  <h1 className="page-header">
                    Forms
                    <small>{'{Input, ButtonInput, FormControls}'}</small>
                  </h1>
                  <Forms />
                  <FormsTypes />
                  <FormsStatic />
                  <FormsButtonInputs />
                  <FormsAddons />
                  <FormsSizes />
                  <FormsValidation />
                  <FormsHorizontal />
                  <FormsWrapper />
                </div>

                <div id="media"></div>
                <div className="doc-section">
                  <h1 className="page-header">
                    Media Content
                  </h1>
                  <p className="lead">The React-Bootstrap media content components offer ways to present images and other media to your users in a responsive way, along with support for styling those components.</p>
                  <Images />
                  <ImagesResponsive />
                </div>

                <div id="media_thumbnails"></div>
                <div className="doc-section">
                  <h1 className="page-header">
                    Thumbnails
                  </h1>
                  <p className="lead">Thumbnails are designed to showcase linked images with minimal required markup. You can extend the grid component with thumbnails.</p>
                  <Thumbnails />
                  <ThumbnailsDivider />
                </div>

                <div id="media_responsive-embed"></div>
                <div className="doc-section">
                  <h1 className="page-header">
                    Responsive Embed
                  </h1>
                  <ResponsiveEmbed />
                </div>

                <div id="misc"></div>
                <div className="doc-section">
                  <h1 className="page-header">
                    Labels
                  </h1>
                  <Labels />
                  <LabelsVariations />
                </div>

                <div id="misc_badges"></div>
                <div className="doc-section">
                  <h1 className="page-header">
                    Badges
                  </h1>
                  <Badges />
                </div>

                <div id="misc_alerts"></div>
                <div className="doc-section">
                  <h1 className="page-header">
                    Alerts
                  </h1>
                  <Alerts />
                  <AlertsCloseable />
                  <AlertsAuto />
                </div>

                <div id="misc_progress-bars"></div>
                <div className="doc-section">
                  <h1 className="page-header">
                    Progress Bars
                    <small>{'{ProgressBar}'}</small>
                  </h1>
                  <p className="lead">Provide up-to-date feedback on the progress of a workflow or action with simple yet flexible progress bars.</p>
                  <ProgressBars />
                  <ProgressBarsLabel />
                  <ProgressBarsScreenreader />
                  <ProgressBarsAlternatives />
                  <ProgressBarsStriped />
                  <ProgressBarsAnimated />
                  <ProgressBarsStacked />
                </div>

              </Col>

              <Col sm={3} className="hidden-xs">
                <RightNav />
              </Col>

            </Row>
          </Grid>

          <Footer />

        </div>
      </div>
    );
  }
}

// Export.
export default Page;
