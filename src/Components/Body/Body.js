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
import { Button } from "rsuite";

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
      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <span style={pageText}>
              <row>
                <div className="col-12">Smart Business Card</div>
                <div className="col-12">
                  <Button
                    style={HomePageBtn}
                    className="btn btn-outline-white btn-round"
                    size="lg"
                    onClick={() => this.open("md")}
                  >
                    Sign In
                  </Button>
                </div>
              </row>
            </span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={1} style={pageTwo}>
          <Animator animation={FadeUp}>
            <span style={pageText}>I'm FadeUp ⛅️</span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={2}>
          <Animator animation={FadeUp}>
            <span style={pageText}>I'm FadeUp ⛅️</span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={3}>
          <Animator animation={FadeUp}>
            <span style={pageText}>I'm FadeUp ⛅️</span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={4}>
          <Animator animation={FadeUp}>
            <span style={pageText}>I'm FadeUp ⛅️</span>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    );
  }
}

export default BodyContainer;
