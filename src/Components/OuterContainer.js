import { Container, Header, Content, Footer, Sidebar } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";
import SidebarContainer from "./Sidebar/SidebarContainer";
import HeaderContainer from "./Header/HeaderContainer";
import FooterContainer from "./Footer/Footer";
import BodyContainer from "./Body/BodyContainer";
import React from "react";
import bImage from "../Images/reactbg.png";

function OuterContainer() {
  return (
    <div src={bImage} className="show-container">
      <Container className="backgroundImage">
        <Sidebar>
          <SidebarContainer apperance="subtle" />
        </Sidebar>
        <Container>
          <Header>
              <HeaderContainer />
            {/* </Section> */}
          </Header>

          <Content>
            <BodyContainer />
          </Content>

          <Footer>
            <FooterContainer />
          </Footer>
        </Container>
      </Container>
    </div>
  );
}

export default OuterContainer;

// const instance = (

//   );
//   ReactDOM.render(instance);
