import { React, Component } from "react";
import { ButtonToolbar, Button, Modal } from "rsuite";
import "bootstrap/dist/css/bootstrap.min.css";

import ModalPricingBody from "./ModalPricingBody";

// Styled Components //
const menuIconOuterContainer = {
  height: "40px",
  width: "40px",
  transition: "0.3s",
  display: "inline-block",
  position: "relative",
  borderRadius: "2px",
  opacity: "0.5",
};

const menuIconBarsContainer = {
  display: "block",
  margin: "auto",
  marginTop: "15px",
  width: "24px",
};

const menuIconBarsContainerClose = {
  display: "block",
  margin: "auto",
  marginTop: "20px",
  width: "24px",
}

const iconBar = {
  background: "black",
  display: "block",
  content: "",
  marginBottom: "4px",
  transition: "0.3s",
  height: "2px",
};

const iconBarClose1 = {
  webkitTransform: 'translateY(-6px) rotate(45deg)',
  background: "black",
  display: "block",
  content: "",
  transition: "0.3s",
  marginBottom: '-1px',
  height: '2px',
  width: "24px"
};

const iconBarClose2 = {
  width: '0px'
};

const iconBarClose3 = {
  webkitTransform: 'translateY(-6px) rotate(-45deg)',
  transform: 'translateY(-6px) rotate(-45deg)',
  background: "black",
  display: "block",
  content: "",
  marginBottom: "4px",
  transition: "0.3s",
  height: '2px',
  width: '24px !important',
  width: "24px"
};

const PremiumButton = {
  background: "transparent",
};

const PricingHeader = {
  fontSize: "2.5rem",
};

const iconBar1 = {
  background: "black",
  display: "block",
  content: "",
  marginBottom: "4px",
  transition: "0.3s",
  height: "2px",
  width: "75%"
}

const iconBar2 = {
  background: "black",
  display: "block",
  content: "",
  marginBottom: "4px",
  transition: "0.3s",
  height: "2px"
}

const iconBar3 = {
  background: "black",
  display: "block",
  content: "",
  marginBottom: "4px",
  transition: "0.3s",
  height: "2px",
  width: "25%"
}

class Premium extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      isActive: true,
    };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }
  close() {
    this.setState({
      show: false,
    });
  }
  open(size) {
    this.setState({
      size,
      show: true,
    });
    this.handleCloseToggle();
  }

  handleCloseToggle = () => {
    this.setState({ isActive: !this.state.isActive });
  };

  render() {
    const isActive = this.state.isActive;
    return (
      <div className="modal-container">
        <ButtonToolbar>
          <Button
            style={PremiumButton}
            className="float-right mr-3 pt-1"
            size="lg"
            onClick={(() => this.open("lg"))}
          >
            <span
              style={menuIconOuterContainer}
              class="menu-icon menu-icon-random"
            >
              <span style={isActive ? menuIconBarsContainer : menuIconBarsContainerClose} class="bars">
                <span
                  style={isActive ? iconBar1 : iconBarClose1}
                  class="bar1"
                ></span>
                <span
                  style={isActive ? iconBar2 : iconBarClose2}
                  class="bar2"
                ></span>
                <span
                  style={isActive ? iconBar3 : iconBarClose3}
                  class="bar3"
                ></span>
              </span>
            </span>
          </Button>
        </ButtonToolbar>

        <Modal
          size={this.state.size}
          show={this.state.show}
          onHide={this.close}
          shouldCloseOnOverlayClick={false}
        >
          <Modal.Header>
            <Modal.Title style={PricingHeader}>Premium Pricing</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ModalPricingBody />
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Premium;
