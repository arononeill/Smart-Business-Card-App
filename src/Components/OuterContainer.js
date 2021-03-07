import { Container, Header, Content, Footer, Sidebar } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";

import SidebarContainer from "./Sidebar/SidebarContainer";
import HeaderContainer from "./Header/HeaderContainer";
import FooterContainer from './Footer/Footer'
import React from "react";
import bImage from "../Images/reactbg.png";

const backgroundImage = {
  backgroundImage: "./Images/reactbg.png",
  width: "100%",
  backgroundSize: "cover",
  height: "100vh",
};

const homeTitle = {
    color: 'white',
    fontSize: '4rem',
    transform: 'translate(-50%, -50%)',
    position: 'fixed',
    top: '50%',
    left: '50%'
}


function OuterContainer() {
  return (
    <div src={bImage} style={backgroundImage} className="show-container">
      <Container>
        <Sidebar>
          <SidebarContainer apperance="subtle" />
        </Sidebar>
        <Container>
          <Header>
            <HeaderContainer />
          </Header>
          <Content>
            
            <h2 style={homeTitle} className="text-center"><u><i>Smart Business Cards</i> </u></h2>
            <div>
                Where are you?
            </div>

          </Content>
          <Footer>
              <FooterContainer/>
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
