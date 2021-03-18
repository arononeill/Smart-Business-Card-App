import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const paginationContainer = {
  position: "fixed",
  top: "50%",
  right: "20px",
  webkitTransform: "translateY(-50%)",
  transform: "translateY(-50%)",
};

const listItem = {
  margin: "1rem 0",
  listStyle: "none",
};

const PaginationAHref = {
  position: "relative",
  display: "block",
  height: "0.5rem",
  width: "0.5rem",
  padding: "0",
  borderRadius: "60px",
  transition: "0.2s",
  cursor: "pointer",
  background: "rgba(255, 255, 255, 0.3)",
};

class Pagination extends Component {
  render() {
    return (
      <div style={paginationContainer}>
        <ul class="nav-dots">
          <li class="nav-item active" style={listItem}>
            <Link
              activeClass="PaginationActive"
              to="home"
              spy={true}
              smooth={true}
              offset={-300}
              duration={500}
              style={PaginationAHref}
            ></Link>
          </li>
          <li class="nav-item" style={listItem}>
            <Link
              activeClass="PaginationActive"
              to="section2"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={PaginationAHref}
            ></Link>
          </li>
          <li class="nav-item" style={listItem}>
            <Link
              activeClass="PaginationActive"
              to="section3"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={PaginationAHref}
            ></Link>
          </li>
          <li class="nav-item" style={listItem}>
            <Link
              activeClass="PaginationActive"
              to="section4"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={PaginationAHref}
            ></Link>
          </li>
          <li class="nav-item" style={listItem}>
            <a class="nav-link" href="#team" style={PaginationAHref}></a>
          </li>
          <li class="nav-item" style={listItem}>
            <a class="nav-link" href="#works" style={PaginationAHref}></a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Pagination;
