import { Container, Header, Content, Footer, Sidebar } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import SidebarContainer from './SidebarContainer'

import React from 'react'

function OuterContainer() {
    return (
        <div className="show-container">        
            <Container>
                <Sidebar>
                    <SidebarContainer/>
                </Sidebar>
            <Container>
                <Header>Header</Header>
                <Content>Content</Content>
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