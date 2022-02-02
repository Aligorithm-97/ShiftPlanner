import React, { Component } from 'react'
import ContentRouter from '../../Components/Content/ContentRouter';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/NavBar/Navbar';

class Home extends Component{
    render(){
        return (
            <div>
                <Header />
                <Navbar />
                <ContentRouter />
                <Footer />
            </div>
        );
    }
}

export default Home;
