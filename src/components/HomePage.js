import './HomePage.css';
import React from "react";
import NavBar from "./NavBar";

const HomePage = () => {
    return <div className='home-page'>
        <NavBar/>
        <div className='img'></div>
        <div className='center'>
            <div className='title-box'>
                <span className='title'>Welcome to my page!</span>
            </div>
            <div className='subtitle-box'>
                <span className='subtitle'>Let's start</span>
            </div>
            <div className='buttons'>
                <button>Learn More</button>
                <button>Contact</button>
            </div>
        </div>

    </div>
}

export default HomePage;