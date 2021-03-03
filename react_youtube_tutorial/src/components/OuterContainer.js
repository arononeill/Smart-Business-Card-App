import { Container, Header, Content, Footer, Sidebar } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

import SidebarContainer from './Sidebar/SidebarContainer'
import HeaderContainer from './Header/HeaderContainer'
import React from 'react'
import bImage from '../Images/reactbg.png'

const backgroundImage = {
  backgroundImage: './Images/reactbg.png',
  width: '100%',
  backgroundSize: 'cover',
  height: '100vh'
}

function OuterContainer() {
    return (
        <div src={bImage} style={backgroundImage} className="show-container">        
            <Container>
                <Sidebar>
                    <SidebarContainer apperance="subtle"/>
                </Sidebar>
            <Container>
                <Header>
                    <HeaderContainer/>
                </Header>
                <Content>
                    <h1 className="text-center">Smart Business Cards</h1>
                </Content>
                <Footer>Footer</Footer>
            </Container>
            </Container>
        </div>
    )
}

export default OuterContainer

// const instance = (
    
//   );
//   ReactDOM.render(instance);