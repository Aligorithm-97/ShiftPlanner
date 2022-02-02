import React, { Component } from "react";
import Header from "../../Header/Header";
import Navbardepadmin from "../../NavBar/Navbardepadmin";
import Footer from "../../Footer/Footer";
export default class Helpemp extends Component {
  render() {
    return (
      <div>
        
        <Header></Header>
        <Navbardepadmin></Navbardepadmin>
        <br />
        <br />
        <br />
        <br />
        <h3>
        <div className="container" style={{border: "1px solid black"}}>
        
          Contact Us
          <br />
          <br />
          Samet Yekta Güçlü - yekdaguclu@gmail.com
          <br />
          <br />
          Ali Temurtaş - atemurtas97@gmail.com
          <br />
          <br />
          Cihat Mete Gül - mete546@gmail.com
          <br />
          <br />
          Emre Can Şimşek - emresimsek97@hotmail.com
        </div>
        
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        </h3>
        <Footer></Footer>
       
      </div>
      
    );
  }
}
