import React from "react";
import './Upcomingcarsstyle.css';
import Footer from '../Footer/Footer';
import Carousel from '../Home/Carousel/Carousel';
import image from '../../Stuff/Images/bannerhome.png';
import Navigation_Signin from "../Navigation-signin/Navigation_Signin";

const Upcomingcars = () => {
    return(
    <>
        <Navigation_Signin />
        <div className='banner'>
                <p className='olengines-banner'>OLENGINES</p>
                <p className='text-banner'>Around The World</p>
                <img src={image} alt='banner' loading="lazy" className='img-banner' />
            </div>
            
            {/* Brands  */}
            <div className='brands'>
                <Carousel />
            </div>
        <Footer />
    </>);
}

export default Upcomingcars;