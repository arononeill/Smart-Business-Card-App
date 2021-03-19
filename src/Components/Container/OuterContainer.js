import { Container, Header, Content, Footer, Sidebar } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";
import styled from "styled-components";
import SidebarContainer from "../Sidebar/SidebarContainer";
import HeaderContainer from "../Header/HeaderContainer";
import FooterContainer from "../Footer/Footer";
import BodyContainer from "../Body/BodyContainer";
import Pagination from './Pagination'
import React from "react";
import bImage from "../../Images/reactbg.png";

const HeaderContainerStyle = styled(Header)`
  position: fixed;
  margin: 1rem;
  margin-top: .8rem;
  right: 0;
  width: 100%;
`

function OuterContainer() {
  return (
    <div src={bImage} className="show-container">
      <Container className="backgroundImage">
        <Sidebar>
          <SidebarContainer apperance="subtle" />
        </Sidebar>
        <Container>
          <HeaderContainerStyle className="modal-container" >
              <HeaderContainer />
          </HeaderContainerStyle>

          <Content>
            <BodyContainer />
            <Pagination/>
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