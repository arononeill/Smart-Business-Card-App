import { React, Component } from "react";
import { Toggle, Sidenav, Nav, Icon, Dropdown } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";
import logo from "../../Images/logo.png";

const SidebarContainerOuterDiv = {
  width: "250px",
  top: "50%",
  position: "absolute",
  transform: "translate(0%, -50%)",
};

const logoImage = {
  height: "28px",
};

const logoNavbarBrand = {
  left: "40px",
  position: 'fixed'
};

const logoText = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  fontSize: '1rem',
  marginLeft: '35px',
  color: 'white',
  marginRight: '8px'
}

const logoLine = {
  display: 'block'
}

const logoLineSub = {
  fontSize: '0.75rem',
  opacity: '0.5s',
  color: '#8c8c8c'
}

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
            <img class="light-logo mt-1" src={logo} style={logoImage} alt="Logo" />
          </span>
          <span class="text" style={logoText}>
            <span class="line text-left" style={logoLine}>Smart Business Card</span>
            <span class="line sub" style={logoLineSub}>Portfolio Template</span>
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
              <Nav>
                <Nav.Item
                  title="Settings"
                  className="text-left"
                  eventKey="1"
                  icon={<Icon icon="dashboard" />}
                >
                  Home
                </Nav.Item>
                <Nav.Item className="text-left" eventKey="2" icon={<Icon icon="profile" />}>
                  Profile
                </Nav.Item>
                <Nav.Item className="text-left" eventKey="3" icon={<Icon icon="envelope" />}>
                  Cards
                </Nav.Item>
                <Nav.Item className="text-left" eventKey="4" icon={<Icon icon="group" />}>
                  Explore
                </Nav.Item>
                {/* <Dropdown
                  placement="rightStart"
                  eventKey="3"
                  title="Settings"
                  icon={<Icon icon="magic" />}
                >
                  <Dropdown.Item eventKey="3-1">Geo</Dropdown.Item>
                  <Dropdown.Item eventKey="3-2">Devices</Dropdown.Item>
                  <Dropdown.Item eventKey="3-3">Loyalty</Dropdown.Item>
                </Dropdown> */}
              </Nav>
            </Sidenav.Body>
          </Sidenav>
        </div>
      </div>
    );
  }
}

//   ReactDOM.render(<SidebarContainer />);
export default SidebarContainer;
