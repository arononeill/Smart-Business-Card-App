import { React, Component } from 'react'
import Premium from './Premium/Premium'
import SignIn from './SignIn'
import UserNotifications from './UserNotifications'

const HeaderContainerStyle = {
    position: 'static',
    margin: "1rem",
    marginTop: ".8rem"
}

class HeaderContainer extends Component {

    render() {
        return (
            <div style={HeaderContainerStyle} className="modal-container">
                <Premium/>                
                <UserNotifications/>
                <SignIn/>
            </div>
        );
    }
}

export default HeaderContainer