import React from "react";
import './Latestcarsstyle.css';
import Footer from '../Footer/Footer';
import Bannerimage from '../../Stuff/Images/latestcarsbanner.png';
import Navigation_Signin from "../Navigation-signin/Navigation_Signin";

const Latestcars = () => {
    return(
        <>
            <Navigation_Signin />
            <div className='firstscreen'>
                <div className='firsttext'>
                    <p className='firstheading'>Each & Every Latest cars for you <br/> by<span id='firstolengines'> Olengines.</span></p>
                    <button className='firstexplore'>Explore</button>
                </div>
                <div className='firstimage'>
                    <img src={Bannerimage} alt='latestbanner' className='bannerlatest' />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Latestcars;