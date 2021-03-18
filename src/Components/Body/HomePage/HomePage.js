import React from "react";
import { Button } from "rsuite";
import { Link, animateScroll as scroll } from "react-scroll";

const homeTitle = {
  borderBottom: "2px solid currentColor",
  transitionDelay: "0.3s",
  fontSize: "3rem",
};

const homeSubTitle = {
  transitionDelay: "0.5s",
};

const learnMoreButton = {
  color: "#fff",
  border: "2px solid #fff",
  borderRadius: "10rem",
  transition: "3s",
  background: "none",
  lineHeight: "1",
};

const scrolldown = {
  position: "absolute",
  bottom: "0",
  top: "auto",
  right: "auto",
  marginBottom: "20px",
  left: "50%"
};

const down = {
  padding: "8px",
  transition: "0.3s",
  cursor: "pointer",
};

const scrollDownText = {
  position: "absolute",
  width: "200px",
  textAlign: "center",
  left: "-100px",
  top: "0",
};

const HomePage = () => {
  return (
    <div>
      <h2 style={homeTitle}>Smart Business Card</h2>
      <h4 style={homeSubTitle}>The Future of Business</h4>
      <Button
        style={learnMoreButton}
        className="btn btn-outline-white btn-round mt-2"
      >
        Get Started
      </Button>
      <Link
        activeClass="active"
        to="section2"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <footer style={scrolldown} className="scrolldown">
          <a style={down}>
            <span></span>
            <span style={scrollDownText}>Scroll Down</span>
          </a>
        </footer>
      </Link>
    </div>
  );
};

export default HomePage;
