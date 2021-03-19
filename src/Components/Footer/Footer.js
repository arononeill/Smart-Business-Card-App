import React, { Component } from "react";
import styled from "styled-components";

const FooterRight = styled.div`
  right: 2em;
  bottom: 0.35em;
  position: fixed;
  transition: 0.3s;
`

const FooterRightSocial = styled.ul `
  display: flex;
  list-style: none outside none;
`

const FooterRightAhref = styled.a`
  padding-left: 8px;
  padding=right: 8px;
  display: inline-block;
  color: rgba(255, 255, 255, 0.5);
  font-size: 24px;
`

class Footer extends Component {
  render() {
    return (
      <div>
        <FooterRight class="footer-right">
          <FooterRightSocial class="social">
            <li>
              <FooterRightAhref href="">
                <i class="icon fa fa-facebook"></i>
              </FooterRightAhref>
            </li>
            <li>
              <FooterRightAhref href="">
                <i class="icon fa fa-twitter"></i>
              </FooterRightAhref>
            </li>
            <li>
              <FooterRightAhref href="">
                <i class="icon fa fa-linkedin"></i>
              </FooterRightAhref>
            </li>
            <li>
              <FooterRightAhref href="">
                <i class="icon fa fa-instagram"></i>
              </FooterRightAhref>
            </li>
          </FooterRightSocial>
        </FooterRight>
      </div>
    );
  }
}

export default Footer;
