import { React, Component } from "react";
import Premium from "./Premium/Premium";
import SignIn from "./SignIn";
import UserNotifications from "./UserNotifications";

const HeaderContainerStyle = {
  position: "fixed",
  margin: "1rem",
  marginTop: ".8rem",
  right: "0",
  width: "100%",
};

export default function HeaderContainer({ id }) {
  return (
    <div>
        sasa
      <div style={HeaderContainerStyle} className="modal-container">
        <Premium />
        <UserNotifications />
        <SignIn />
      </div>
    </div>
  );
}
