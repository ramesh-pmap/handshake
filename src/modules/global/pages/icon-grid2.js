// Dependencies.
import React from 'react';

// Core components.
import {Grid, Row, Col, Input, Image} from 'react-bootstrap';

// Utility methods.
import utils from '../../../utils';

// Common components.
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Sidebar from '../../../components/SidebarLeft';

// Json file with icons data.
const DataIcons = '../../../static/icons/data-icons.json';

// Define class.
class Page extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);

    // Set page title.
    utils.title(props);

    this.state = {
      data: [],
      error: [],
      value: '',
      filteredData: []
    };
  }

  componentDidMount() {
    // Fetch Json data.
    fetch(DataIcons).then(r => r.json())
      .then(data => {this.setState({data, filteredData: data }); })
      .catch(error => {this.setState({error}); });
  }

  handleChange() {
    let searchValue = this.refs.input.getValue();

    this.setState({
      value: searchValue
    });

    if (searchValue === '') {
      this.setState({
        filteredData: this.state.data
      });
    } else {
      this.setState({
        filteredData: this.state.data.filter((icon) => icon.NAME.match(searchValue))
      });
    }
  }

  // Render method.
  render() {
    let icons = this.state.filteredData.map(
      icon =>
        <Col xs={6} sm={4} md={3} lg={2} key={icon.NAME}>
          <div className="icon-grid-item">
            <Image src={`./static/icons/svg/${icon.NAME}.svg`} responsive />
            {icon.NAME}
          </div>
        </Col>
    );

    return (
      <div id="shellWrapper" className="shell-wrapper doc-wrapper">

        <Sidebar title="mars" />

        <Header />

        <div className="page-content-wrapper">
          <Grid fluid>
            <Row>

              <Col xs={12}>
                <Input
                  type="search"
                  value={this.state.value}
                  bsSize="large"
                  placeholder="Search Icons"
                  hasFeedback
                  ref="input"
                  onChange={this.handleChange.bind(this)}
                  autoFocus />
              </Col>

              <Col xs={12} className="text-center">
                  {(() => {
                    if (!this.state.data.length) {
                      return (
                        <Col xs={12}>
                          <p>Loading Icons...</p>
                        </Col>
                        );
                    }

                    return (
                      <Col xs={12}>
                        <p>Total icons found: {icons.length}</p>
                      </Col>
                    );
                  })()}
              </Col>

            </Row>

            <Row className="icon-grid">

              <Col xs={12}>
                <h2 id="Sample_Group_Name" className="icon-grid-title">Sample Group Name</h2>
              </Col>

              {icons.length ? icons : ''}
{/* }
              <Col xs={12}>
                <h2 className="icon-grid-title">First Group</h2>
              </Col>

              <Col xs={6} sm={4} md={3} lg={2}>
                <div className="icon-grid-item">
                  <Image src="./static/icons/svg/3d-glasses.svg" responsive />
                  3d-glasses
                </div>
              </Col>

              <Col xs={6} sm={4} md={3} lg={2}>
                <div className="icon-grid-item">
                  <Image src="./static/icons/svg/3d-screen.svg" responsive />
                  3d-screen
                </div>
              </Col>

              <Col xs={6} sm={4} md={3} lg={2}>
                <div className="icon-grid-item">
                  <Image src="./static/icons/svg/3d-sync.svg" responsive />
                  3d-sync
                </div>
              </Col>

              <Col xs={6} sm={4} md={3} lg={2}>
                <div className="icon-grid-item">
                  <Image src="./static/icons/svg/abacus.svg" responsive />
                  abacus
                </div>
              </Col>

              <Col xs={6} sm={4} md={3} lg={2}>
                <div className="icon-grid-item">
                  <Image src="./static/icons/svg/account-circle-1.svg" responsive />
                  account-circle-1
                </div>
              </Col>

              <Col xs={6} sm={4} md={3} lg={2}>
                <div className="icon-grid-item">
                  <Image src="./static/icons/svg/account-circle-2.svg" responsive />
                  account-circle-2
                </div>
              </Col>

              <Col xs={6} sm={4} md={3} lg={2}>
                <div className="icon-grid-item">
                  <Image src="./static/icons/svg/account-code.svg" responsive />
                  account-code
                </div>
              </Col>

              <Col xs={6} sm={4} md={3} lg={2}>
                <div className="icon-grid-item">
                  <Image src="./static/icons/svg/account-expand.svg" responsive />
                  account-expand
                </div>
              </Col>

              <Col xs={6} sm={4} md={3} lg={2}>
                <div className="icon-grid-item">
                  <Image src="./static/icons/svg/account-favorite.svg" responsive />
                  account-favorite
                </div>
              </Col>

              <Col xs={6} sm={4} md={3} lg={2}>
                <div className="icon-grid-item">
                  <Image src="./static/icons/svg/account-files.svg" responsive />
                  account-files
                </div>
              </Col>

              <Col xs={12}>
                <h2 className="icon-grid-title">Second Group</h2>
              </Col>

              <Col xs={6} sm={4} md={3} lg={2}>
                <div className="icon-grid-item">
                  <Image src="./static/icons/svg/account-find-1.svg" responsive />
                  account-find-1
                </div>
              </Col>

              <Col xs={6} sm={4} md={3} lg={2}>
                <div className="icon-grid-item">
                  <Image src="./static/icons/svg/account-find-2.svg" responsive />
                  account-find-2
                </div>
              </Col>

              <Col xs={6} sm={4} md={3} lg={2}>
                <div className="icon-grid-item">
                  <Image src="./static/icons/svg/account-flag.svg" responsive />
                  account-flag
                </div>
              </Col>

              <Col xs={6} sm={4} md={3} lg={2}>
                <div className="icon-grid-item">
                  <Image src="./static/icons/svg/account-flash.svg" responsive />
                  account-flash
                </div>
              </Col>

              <Col xs={6} sm={4} md={3} lg={2}>
                <div className="icon-grid-item">
                  <Image src="./static/icons/svg/account-group-1.svg" responsive />
                  account-group-1
                </div>
              </Col>

              <Col xs={6} sm={4} md={3} lg={2}>
                <div className="icon-grid-item">
                  <Image src="./static/icons/svg/account-group-2.svg" responsive />
                  account-group-2
                </div>
              </Col>

              <Col xs={6} sm={4} md={3} lg={2}>
                <div className="icon-grid-item">
                  <Image src="./static/icons/svg/account-group-3.svg" responsive />
                  account-group-3
                </div>
              </Col>

              <Col xs={6} sm={4} md={3} lg={2}>
                <div className="icon-grid-item">
                  <Image src="./static/icons/svg/account-group-4.svg" responsive />
                  account-group-4
                </div>
              </Col>

              <Col xs={6} sm={4} md={3} lg={2}>
                <div className="icon-grid-item">
                  <Image src="./static/icons/svg/account-group-5.svg" responsive />
                  account-group-5
                </div>
              </Col>

              <Col xs={6} sm={4} md={3} lg={2}>
                <div className="icon-grid-item">
                  <Image src="./static/icons/svg/account-home.svg" responsive />
                  account-home
                </div>
              </Col>
{*/ }
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
