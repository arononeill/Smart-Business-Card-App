import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import styled from "styled-components";

// Styled Components //
const PricingOptionContainer = styled.div`
  border: 1px solid black;
  border-radius: 0.3rem;
`

const PricingOptionCost = styled.h4`
  background: #3f4b62;
  color: white;
`

const PricingFeaturesUl = styled.ul`
  padding: 16px 32px;
`
const PricingFeaturesLi = styled.li`
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  color: #1d1d1d;
`

const PricingFeatureLiNotAvailable = styled.li`
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  color: #1d1d1d;
  color: #8b8b8b;
`

const PricingFeaturesFooter = styled.div`
  background: rgba(0, 0, 0, 0.04);
  padding: 8px 16px;
`

const PricingFeaturesFooterBtn = styled.a`
  border-radius: 18rem;
`

class ModalPricingBody extends Component {
  render() {
    return (
      <div className="row m-0">
        {/* Free Pricing Option Container - No. 1*/}
        <div className="col-md-4 col-12">
          <PricingOptionContainer>
            <h4 className="text-center pt-2">Lite</h4>
            <PricingOptionCost className="text-center pt-1 pb-2">
              Free
            </PricingOptionCost>
            <PricingFeaturesUl
              class="item-features list-unstyled text-left mb-0"
            >
              <PricingFeaturesLi>
                <i class="icon fa fa-star mr-2"></i>Full Components
              </PricingFeaturesLi>
              <PricingFeaturesLi>
                <i class="icon fa fa-check mr-2"></i>Future Updates
              </PricingFeaturesLi>
              <PricingFeaturesLi>
                <i class="icon fa fa-check mr-2"></i>Documentation
              </PricingFeaturesLi>
              <PricingFeaturesLi>
                <i class="icon fa fa-check mr-2"></i>Customer Support
              </PricingFeaturesLi>
              <PricingFeatureLiNotAvailable>
                <i class="icon fa fa-remove mr-2"></i>Cool Option
              </PricingFeatureLiNotAvailable>
            </PricingFeaturesUl>
            <PricingFeaturesFooter className="text-center">
              <PricingFeaturesFooterBtn
                class="btn btn-secondary btn-round"
                href="#services"
              >
                Learn More
              </PricingFeaturesFooterBtn>
            </PricingFeaturesFooter>
          </PricingOptionContainer>
        </div>

        {/* Standard Pricing Option Container - No. 2*/}
        <div className="col-md-4 col-12">
          <PricingOptionContainer>
            <h4 className="text-center pt-2">Standard</h4>
            <PricingOptionCost className="text-center pt-1 pb-2">
              €4.99
            </PricingOptionCost>
            <PricingFeaturesUl
              class="item-features list-unstyled text-left mb-0"
            >
              <PricingFeaturesLi>
                <i class="icon fa fa-star mr-2"></i>Full Components
              </PricingFeaturesLi>
              <PricingFeaturesLi>
                <i class="icon fa fa-check mr-2"></i>Future Updates
              </PricingFeaturesLi>
              <PricingFeaturesLi>
                <i class="icon fa fa-check mr-2"></i>Documentation
              </PricingFeaturesLi>
              <PricingFeaturesLi>
                <i class="icon fa fa-check mr-2"></i>Customer Support
              </PricingFeaturesLi>
              <PricingFeatureLiNotAvailable>
                <i class="icon fa fa-remove mr-2"></i>Cool Option
              </PricingFeatureLiNotAvailable>
            </PricingFeaturesUl>
            <PricingFeaturesFooter className="text-center">
              <PricingFeaturesFooterBtn
                class="btn btn-secondary btn-round"
                href="#services"
              >
                Purchase
              </PricingFeaturesFooterBtn>
            </PricingFeaturesFooter>
          </PricingOptionContainer>
        </div>

        {/* Ultimate Pricing Option Container - No. 3*/}
        <div className="col-md-4 col-12">
          <PricingOptionContainer>
            <h4 className="text-center pt-2">Ultimate</h4>
            <PricingOptionCost className="text-center pt-1 pb-2">
              €9.99
            </PricingOptionCost>
            <PricingFeaturesUl
              class="item-features list-unstyled text-left mb-0"
            >
              <PricingFeaturesLi>
                <i class="icon fa fa-star mr-2"></i>Full Components
              </PricingFeaturesLi>
              <PricingFeaturesLi>
                <i class="icon fa fa-check mr-2"></i>Future Updates
              </PricingFeaturesLi>
              <PricingFeaturesLi>
                <i class="icon fa fa-check mr-2"></i>Documentation
              </PricingFeaturesLi>
              <PricingFeaturesLi>
                <i class="icon fa fa-check mr-2"></i>Customer Support
              </PricingFeaturesLi>
              <PricingFeatureLiNotAvailable>
                <i class="icon fa fa-remove mr-2"></i>Cool Option
              </PricingFeatureLiNotAvailable>
            </PricingFeaturesUl>
            <PricingFeaturesFooter className="text-center">
              <PricingFeaturesFooterBtn
                class="btn btn-secondary btn-round"
                href="#services"
              >
                Subscribe
              </PricingFeaturesFooterBtn>
            </PricingFeaturesFooter>
          </PricingOptionContainer>
        </div>
      </div>
    );
  }
}

export default ModalPricingBody;
