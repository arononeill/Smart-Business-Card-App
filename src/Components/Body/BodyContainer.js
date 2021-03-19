import { React, Component } from "react";
import styled from "styled-components";
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

const BodyContainerContent = styled.div`
  width: 80%;
  color: white;
`

class BodyContainer extends Component {
  render() {
    return (
      <BodyContainerContent className="App">
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
      </BodyContainerContent>
    );
  }
}

export default BodyContainer;
