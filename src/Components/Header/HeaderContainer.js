import { React, Component } from "react";
import Premium from "./Premium/Premium";
import SignIn from "./SignIn";
import UserNotifications from "./UserNotifications";



export default function HeaderContainer({ id }) {
  return (
    <div >
      <Premium />
      <UserNotifications />
      <SignIn />
    </div>
  );
}
