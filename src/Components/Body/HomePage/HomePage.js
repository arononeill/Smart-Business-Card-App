import React from "react";
import { Button } from "rsuite";
import { Link, animateScroll as scroll } from "react-scroll";
import styled from "styled-components";

const HomeTitle = styled.h2`
  border-bottom: 2px solid currentColor;
  transition-delay: 0.3s;
  font-size: 3rem;
`

const HomeSubTitle = styled.h4`
  transition-delay: 0.5s;
`

const LearnMoreButton = styled(Button)`
  color: #fff;
  border: 2px solid #fff;
  border-radius: 10rem;
  transition: 3s;
  background: none;
  line-height: 1;
`

const Scrolldown = styled.footer`
  position: absolute;
  bottom: 0;
  top: auto;
  right: auto;
  margin-bottom: 20px;
  left: 50%;
`

const Down = styled.a`
  padding: 8px;
  transition: 0.3s;
  cursor: pointer;
`

const ScrollDownText = styled.span`
  position: absolute;
  width: 200px;
  text-align: center;
  left: -100px;
  top: 0;
  color: white;
`

const HomePage = () => {
  return (
    <div>
      <HomeTitle>Smart Business Card</HomeTitle>
      <HomeSubTitle>The Future of Business</HomeSubTitle>
      <LearnMoreButton
        className="btn btn-outline-white btn-round mt-2"
      >
        Get Started
      </LearnMoreButton>
      <Link
        activeClass="active"
        to="section2"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <Scrolldown className="scrolldown">
          <Down>
            <span></span>
            <ScrollDownText>Scroll Down</ScrollDownText>
          </Down>
        </Scrolldown>
      </Link>
    </div>
  );
};

export default HomePage;
