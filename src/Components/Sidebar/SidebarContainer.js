import { React, Component } from "react";
import { Toggle, Sidenav, Nav, Icon, Dropdown } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";
import logo from "../../Images/logo.png";
import styled from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";

const SidebarContainerOuterDiv = styled.div`
  width: 250px;
  top: 50%;
  position: fixed;
  transform: translate(0%, -50%);
  color: white;
`

const LogoImage = styled.img`
  height: 28px;
`

const LogoNavbarBrand = styled.a`
  left: 40px;
  position: fixed;
`

const LogoText = styled.span`
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 1rem;
  margin-left: 35px;
  color: white;
  margin-right: 8px;
`

const LogoLine = styled.span`
  display: block;
`

const LogoLineSub = styled.span`
  font-size: 0.75rem;
  opacity: 0.5s;
  color: #8c8c8c;
`

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
        <LogoNavbarBrand class="navbar-brand" href="#">
          <span class="logo float-left">
            <LogoImage
              class="light-logo mt-1"
              src={logo}
              alt="Logo"
            />
          </span>
          <LogoText class="text" >
            <LogoLine class="line text-left">
              Smart Business Card
            </LogoLine>
            <LogoLineSub class="line sub">
              Portfolio Template
            </LogoLineSub>
          </LogoText>
        </LogoNavbarBrand>
        <SidebarContainerOuterDiv>
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
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-300}
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
        </SidebarContainerOuterDiv>
      </div>
    );
  }
}

//   ReactDOM.render(<SidebarContainer />);
export default SidebarContainer;
