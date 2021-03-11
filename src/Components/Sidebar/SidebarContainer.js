import { React, Component } from "react";
import { Toggle, Sidenav, Nav, Icon, Dropdown } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";
import logo from "../../Images/logo.png";
import { Link, animateScroll as scroll } from "react-scroll";

const SidebarContainerOuterDiv = {
  width: "250px",
  top: "50%",
  position: "fixed",
  transform: "translate(0%, -50%)",
};

const logoImage = {
  height: "28px",
};

const logoNavbarBrand = {
  left: "40px",
  position: "fixed",
};

const logoText = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  fontSize: "1rem",
  marginLeft: "35px",
  color: "white",
  marginRight: "8px",
};

const logoLine = {
  display: "block",
};

const logoLineSub = {
  fontSize: "0.75rem",
  opacity: "0.5s",
  color: "#8c8c8c",
};

class SidebarContainer extends Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleToggle() {
    this.setState({
      expanded: !this.state.expanded,
    });
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    const { expanded } = this.state;

    return (
      <div>
        <a class="navbar-brand" style={logoNavbarBrand} href="#">
          <span class="logo float-left">
            <img
              class="light-logo mt-1"
              src={logo}
              style={logoImage}
              alt="Logo"
            />
          </span>
          <span class="text" style={logoText}>
            <span class="line text-left" style={logoLine}>
              Smart Business Card
            </span>
            <span class="line sub" style={logoLineSub}>
              Portfolio Template
            </span>
          </span>
        </a>
        <div style={SidebarContainerOuterDiv}>
          <Sidenav
            appearance="subtle"
            expanded={expanded}
            defaultOpenKeys={["3", "4"]}
            activeKey={this.state.activeKey}
            onSelect={this.handleSelect}
          >
            <Sidenav.Body>
                <Link
                  activeClass="active"
                  to="section1"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Home
                </Link><br/>
                <Link
                  activeClass="active"
                  to="section2"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >Profile</Link><br/>
                  <Link
                  activeClass="active"
                  to="section3"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >Cards</Link><br/>
                <Link
                  activeClass="active"
                  to="section4"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >Explore</Link>
            </Sidenav.Body>
          </Sidenav>
        </div>
      </div>
    );
  }
}

//   ReactDOM.render(<SidebarContainer />);
export default SidebarContainer;
