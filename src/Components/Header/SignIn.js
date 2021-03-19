import React, { Component } from "react";
import { ButtonToolbar, Button, Modal, FlexboxGrid, Panel, Form, FormGroup, ControlLabel, FormControl } from "rsuite";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

const SignUpNavItem = styled.li`
  color: #fff;
  list-style: none;
`

const SignUpNavItemHref = styled(Button)`
  color: #fff;
  border: 2px solid #fff;
  border-radius: 10rem;
  transition: 3s;
  background: none;
  line-height: 1;
`

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }
  close() {
    this.setState({
      show: false,
    });
  }
  open(size) {
    this.setState({
      size,
      show: true,
    });
  }

  render() {
    return (
      <div className="float-right mr-2">
        <SignUpNavItem class="nav-item">
          <SignUpNavItemHref
            className="btn btn-outline-white btn-round"
            size="lg"
            onClick={() => this.open("md")}
          >
            Sign In
          </SignUpNavItemHref>
        </SignUpNavItem>

        <Modal
          size={this.state.size}
          show={this.state.show}
          onHide={this.close}
        >
              <Panel header={<h3>Login</h3>}>
                <Form fluid>
                  <FormGroup>
                    <ControlLabel>Username or email address</ControlLabel>
                    <FormControl name="name" />
                  </FormGroup>
                  <FormGroup>
                    <ControlLabel>Password</ControlLabel>
                    <FormControl name="password" type="password" />
                  </FormGroup>
                  <FormGroup>
                    <ButtonToolbar>
                      <Button appearance="primary">Sign in</Button>
                      <Button appearance="link">Forgot password?</Button>
                    </ButtonToolbar>
                  </FormGroup>
                </Form>
              </Panel>
        </Modal>
      </div>
    );
  }
}

export default SignIn;
