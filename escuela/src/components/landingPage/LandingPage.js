import React, { Component } from "react";

// import SliderForm from "./SliderForm";
import EnrollBox from "./Enroll";
import CarouselSlider from "./CarouselSlider";
import AboutUs from "./AboutUs";
import ElemHigh from "./ElemHigh";
import Events from "./Events";
import "../footer/footerCSS.css";
import NavMain from "../nav/Nav";

class LandingPage extends Component {
  // will add form to update sliders
  // will later map through each and prepend newest articles
  render() {
    return (
      <div>
        <CarouselSlider />
        <NavMain />
        <EnrollBox />
        {/* <SliderForm /> */}
        <AboutUs />
        <ElemHigh />

        <Events />
      </div>
    );
  }
}

export default LandingPage;
