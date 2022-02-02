import React from "react";
import Chart from "./HomePageComponents/Chart";
import ExtraShift from "./HomePageComponents/ExtraShift";
import Leave from "./HomePageComponents/Leave";
import Event from "./HomePageComponents/Event";
import CreateEvent from "./HomePageComponents/CreateEvent";
import Header from "../../Header/Header"
import Navbardepadmin from "../../NavBar/Navbardepadmin"
import Footer from "../../Footer/Footer";
function HomePage() {
  return (
    <div>
      <Header />
        <Navbardepadmin />
    <div class="container">
       
      <div class="row">
        <div class="col-sm">
          <Chart />
        </div>
        <div class="col-sm">
          <Leave title="National Holidays" />
        </div>
        <div class="col-sm">
          <CreateEvent />
        </div>
        <div class="col-sm">
          <Event />
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default HomePage;
