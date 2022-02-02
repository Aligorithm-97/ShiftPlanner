import React, { Component } from 'react'
import Header from "../../Header/Header";
import Navbaremp from "../../NavBar/Navbaremp";
import Footer from "../../Footer/Footer";
import Homepageemp from "../HomePage/Homepageemp"
export default class Empview extends Component {
    render() {
        return (
            <div>
                <Homepageemp></Homepageemp>
            </div>
        )
    }
}
