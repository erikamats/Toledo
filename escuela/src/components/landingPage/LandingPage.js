import React, { Component } from "react";

// import SliderForm from "./SliderForm";
import EnrollBox from "./components/Enroll";
// import CarouselSlider from "./CarouselSlider";
import TopHeader from "./components/Header";
import AboutUs from "./components/AboutUs";
import ElemHigh from "./components/ElemHigh";
import Events from "./components/Events";
import "../footer/footerCSS.css";
import NavMain from "../nav/Nav";

class LandingPage extends Component {
  // will add form to update sliders
  // will later map through each and prepend newest articles
  render() {
    return (
      <div>
        {/* <CarouselSlider /> */}
        <TopHeader/>
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
