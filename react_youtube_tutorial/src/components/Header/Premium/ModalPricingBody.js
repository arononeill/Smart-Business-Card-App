import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";

// Styled Components //
const PricingOptionContainer = {
  border: "1px solid black",
  borderRadius: "0.3rem",
};

const PricingOptionCost = {
  background: "#3f4b62",
  color: "white",
};

const PricingFeaturesUl = {
  padding: "16px 32px",
};

const PricingFeaturesLi = {
  marginTop: "0.25rem",
  marginBottom: "0.25rem",
  color: "#1d1d1d",
};

const PricingFeatureLiNotAvailable = {
  marginTop: "0.25rem",
  marginBottom: "0.25rem",
  color: "#1d1d1d",
  color: "#8b8b8b",
};

const PricingFeaturesFooter = {
  background: "rgba(0, 0, 0, 0.04)",
  padding: "8px 16px",
};

const PricingFeaturesFooterBtn = {
  borderRadius: "18rem",
};

class ModalPricingBody extends Component {
  render() {
    return (
      <div className="row m-0">
        {/* Free Pricing Option Container - No. 1*/}
        <div className="col-md-4 col-12">
          <div style={PricingOptionContainer}>
            <h4 className="text-center pt-2">Lite</h4>
            <h4 style={PricingOptionCost} className="text-center pt-1 pb-2">
              Free
            </h4>
            <ul
              style={PricingFeaturesUl}
              class="item-features list-unstyled text-left mb-0"
            >
              <li style={PricingFeaturesLi}>
                <i class="icon fa fa-star mr-2"></i>Full Components
              </li>
              <li style={PricingFeaturesLi}>
                <i class="icon fa fa-check mr-2"></i>Future Updates
              </li>
              <li style={PricingFeaturesLi}>
                <i class="icon fa fa-check mr-2"></i>Documentation
              </li>
              <li style={PricingFeaturesLi}>
                <i class="icon fa fa-check mr-2"></i>Customer Support
              </li>
              <li style={PricingFeatureLiNotAvailable}>
                <i class="icon fa fa-remove mr-2"></i>Cool Option
              </li>
            </ul>
            <div style={PricingFeaturesFooter} className="text-center">
              <a
                style={PricingFeaturesFooterBtn}
                class="btn btn-secondary btn-round"
                href="#services"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Standard Pricing Option Container - No. 2*/}
        <div className="col-md-4 col-12">
          <div style={PricingOptionContainer}>
            <h4 className="text-center pt-2">Standard</h4>
            <h4 style={PricingOptionCost} className="text-center pt-1 pb-2">
              €4.99
            </h4>
            <ul
              style={PricingFeaturesUl}
              class="item-features list-unstyled text-left mb-0"
            >
              <li style={PricingFeaturesLi}>
                <i class="icon fa fa-star mr-2"></i>Full Components
              </li>
              <li style={PricingFeaturesLi}>
                <i class="icon fa fa-check mr-2"></i>Future Updates
              </li>
              <li style={PricingFeaturesLi}>
                <i class="icon fa fa-check mr-2"></i>Documentation
              </li>
              <li style={PricingFeaturesLi}>
                <i class="icon fa fa-check mr-2"></i>Customer Support
              </li>
              <li style={PricingFeatureLiNotAvailable}>
                <i class="icon fa fa-remove mr-2"></i>Cool Option
              </li>
            </ul>
            <div style={PricingFeaturesFooter} className="text-center">
              <a
                style={PricingFeaturesFooterBtn}
                class="btn btn-secondary btn-round"
                href="#services"
              >
                Purchase
              </a>
            </div>
          </div>
        </div>

        {/* Ultimate Pricing Option Container - No. 3*/}
        <div className="col-md-4 col-12">
          <div style={PricingOptionContainer}>
            <h4 className="text-center pt-2">Ultimate</h4>
            <h4 style={PricingOptionCost} className="text-center pt-1 pb-2">
              €9.99
            </h4>
            <ul
              style={PricingFeaturesUl}
              class="item-features list-unstyled text-left mb-0"
            >
              <li style={PricingFeaturesLi}>
                <i class="icon fa fa-star mr-2"></i>Full Components
              </li>
              <li style={PricingFeaturesLi}>
                <i class="icon fa fa-check mr-2"></i>Future Updates
              </li>
              <li style={PricingFeaturesLi}>
                <i class="icon fa fa-check mr-2"></i>Documentation
              </li>
              <li style={PricingFeaturesLi}>
                <i class="icon fa fa-check mr-2"></i>Customer Support
              </li>
              <li style={PricingFeatureLiNotAvailable}>
                <i class="icon fa fa-remove mr-2"></i>Cool Option
              </li>
            </ul>
            <div style={PricingFeaturesFooter} className="text-center">
              <a
                style={PricingFeaturesFooterBtn}
                class="btn btn-secondary btn-round"
                href="#services"
              >
                Subscribe
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalPricingBody;
