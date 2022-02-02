import React from "react";
import Chart from "./HomePageComponents/Chart";
import ExtraShift from "./HomePageComponents/ExtraShift";
import Leave from "./HomePageComponents/Leave";
import Event from "./HomePageComponents/Event";
import Salaryemp from "./HomePageComponents/Salaryemp";
import CreateEvent from "./HomePageComponents/CreateEvent";
import Header from "../../Header/Header"
import Navbaremp from "../../NavBar/Navbaremp"
import Footer from "../../Footer/Footer";
function HomePage() {
  return (
    <div>
      <Header />
        <Navbaremp />
    <div class="container">
       
      <div class="row">
        <div class="col-sm">
          <Chart />
        </div>
        <div class="col-sm">
          <Leave title="National Holidays" />
        </div>
        
        <div class="col-sm">
          <Salaryemp />
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