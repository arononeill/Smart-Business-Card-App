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
import Section from "../Section";
import { Button } from "rsuite";
import dummyText from "../../DummyText";
import TestComponent from './TestComponent'

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

class BodyContainer extends Component {
  render() {
    return (
      <div className="App">
        <Section
          title="Section 1"
          subtitle={'dummyText'}
          dark={true}
          id="section1"
        />
        <TestComponent/>
        <Section
          title="Section 2"
          subtitle={dummyText}
          dark={false}
          id="section2"
        />
        <Section
          title="Section 3"
          subtitle={dummyText}
          dark={true}
          id="section3"
        />
        <Section
          title="Section 4"
          subtitle={dummyText}
          dark={false}
          id="section4"
        />
        <Section
          title="Section 5"
          subtitle={dummyText}
          dark={true}
          id="section5"
        />
      </div>
    );
  }
}

export default BodyContainer;
