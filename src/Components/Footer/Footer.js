import React, { Component } from "react";

const footerRight = {
  right: "2em",
  bottom: "0.35em",
  position: "fixed",
  transition: "0.3s",
};

const footerRightSocial = {
  display: "flex",
  listStyle: "none outside none",
};

const footerRightAhref = {
  paddingLeft: "8px",
  paddingRight: "8px",
  display: "inline-block",
  color: "rgba(255, 255, 255, 0.5)",
  fontSize: '24px'
};

class Footer extends Component {
  render() {
    return (
      <div>
        <div class="footer-right" style={footerRight}>
          <ul class="social" style={footerRightSocial}>
            <li>
              <a href="" style={footerRightAhref}>
                <i class="icon fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="" style={footerRightAhref}>
                <i class="icon fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="" style={footerRightAhref}>
                <i class="icon fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="" style={footerRightAhref}>
                <i class="icon fa fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
