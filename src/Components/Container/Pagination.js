import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import styled from "styled-components";

const PaginationContainer = styled.div`
  position: fixed;
  top: 50%;
  right: 20px;
  webkit-transform: translateY(-50%);
  transform: translateY(-50%);
`

const ListItem = styled.li`
  margin: 1rem 0;
  list-style: none;
`;

const PaginationAHref = styled(Link)`
  position: relative;
  display: block;
  height: 0.5rem;
  width: 0.5rem;
  padding: 0;
  border-radius: 60px;
  transition: 0.2s
  cursor: pointer;
  background: rgba(255, 255, 255, 0.3);
`

const Pagination = () => (
  <PaginationContainer>
    <ul class="nav-dots">
      <ListItem class="nav-item active">
        <PaginationAHref
          activeClass="PaginationActive"
          to="home"
          spy={true}
          smooth={true}
          offset={-300}
          duration={500}
        ></PaginationAHref>
      </ListItem>
      <ListItem class="nav-item">
        <PaginationAHref
          activeClass="PaginationActive"
          to="section2"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        ></PaginationAHref>
      </ListItem>
      <ListItem class="nav-item">
        <PaginationAHref
          activeClass="PaginationActive"
          to="section3"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        ></PaginationAHref>
      </ListItem>
      <ListItem class="nav-item">
        <PaginationAHref
          activeClass="PaginationActive"
          to="section4"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        ></PaginationAHref>
      </ListItem>
      <ListItem class="nav-item">
        <a class="nav-link" href="#team" ></a>
      </ListItem>
      <ListItem class="nav-item">
        <a class="nav-link" href="#works"></a>
      </ListItem>
    </ul>
  </PaginationContainer>
);

export default Pagination;
