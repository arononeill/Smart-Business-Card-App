import React, { Component } from "react";
import { Avatar, Badge, Icon } from 'rsuite';

class UserNotifications extends Component {
  render() {
    return (
      <div className="avatar-group float-right mr-2">
        <Badge content="20">
          <Avatar>
            <Icon icon="user"/>
          </Avatar>
        </Badge>
      </div>
    );
  }
}

export default UserNotifications;
