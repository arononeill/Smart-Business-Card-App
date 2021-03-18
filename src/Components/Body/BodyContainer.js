import { React, Component } from "react";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";
import Section from "../Body/Section";
import { Button } from "rsuite";
import dummyText from "../../DummyText";
import HomePage from '../Body/HomePage/HomePage'
import Profile from "./Profile/Profile";
import Cards from "./Cards/Cards";
import Explore from "./Explore/Explore";
import Settings from "./Settings/Settings";

const FadeUp = batch(Fade(), Move(), Sticky());

const pageTwo = {
  backgroundColor: "grey",
};

const pageText = {
  color: "white",
  fontSize: "3em",
};

const HomePageBtn = {
  color: "#fff",
  border: "2px solid #fff",
  display: "inline-block",
  borderRadius: "10rem",
  transition: "3s",
  background: "none",
  lineHeight: "1",
};

const BodyContainerContent = {
  width: '80%',
  color: 'white'
}

class BodyContainer extends Component {
  render() {
    return (
      <div className="App" style={BodyContainerContent}>
        <Section
          title="Section 1"
          subtitle={<HomePage/>}
          id="home"
        />
        <Section
          title="Section 2"
          subtitle={<Profile/>}
          dark={false}
          id="section2"
        />
        <Section
          title="Section 3"
          subtitle={<Cards/>}
          dark={true}
          id="section3"
        />
        <Section
          title="Section 4"
          subtitle={dummyText}
          dark={false}
          id="section4"
        />
        <Explore/>
        <Section
          title="Section 5"
          subtitle={<Settings/>}
          dark={true}
          id="section5"
        />
        <Settings/>
      </div>
    );
  }
}

export default BodyContainer;
