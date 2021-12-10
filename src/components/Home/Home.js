import React from "react";
import ReactCompareImage from 'react-compare-image';
import './Home.css';
import Carousel from './Carousel/Carousel';
import image from '../../Stuff/Images/bannerhome.png';
import Topcar1 from '../../Stuff/Images/Sedancar.jpg';
import Topcar2 from '../../Stuff/Images/Hatchbackcar.jpg';
import Topcar3 from '../../Stuff/Images/SUVcar.jpg';
import Typesedan from '../../Stuff/Images/type-sedan.jpg';
import Typehatchback from '../../Stuff/Images/type-hatchback.jpg';
import TypeSUV from '../../Stuff/Images/type-SUV.jpg';
import Typeluxury from '../../Stuff/Images/type-luxury.jpg';
import Navigation_Signin from "../Navigation-signin/Navigation_Signin";
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";



const Home = () => {

    return(
        <>
        <Navigation_Signin />
            {/* Banner  */}
            <div className='banner'>
                <p className='olengines-banner'>OLENGINES</p>
                <p className='text-banner'>Around The World</p>
                <img src={image} alt='banner' loading="lazy" className='img-banner' />
            </div>
            
            {/* Brands  */}
            <div className='brands'>
                <Carousel />
            </div>



            {/* Top 10 Cars  */}
            <div className='top10'>
                <h1 className='Top10text'>Top 10 Cars in India</h1>
                <div className='top10inner'>
                    <div className='Sedan'>
                        <NavLink exact='true' to='sedan-cars'><img src={Topcar1} alt='Top Sedan Car' loading="lazy" className='Sedanimg' /></NavLink>
                        <p ><NavLink exact='ture' to='sedan-cars' className='Sedantext'>Top 10 Sedans in India</NavLink></p>
                        <p className='Sedansubtext'>Hyundai Verna, Honda City</p>
                    </div>
                    <div className='Hatchback'>
                        <NavLink exact='true' to='hacthback-cars'><img src={Topcar2} alt='Top Hatchback Car' loading="lazy" className='Hatchbackimg' /></NavLink>
                        <p ><NavLink exact='true' to='hacthback-cars' className='Hatchbacktext' >Top 10 Hatchbacks in India</NavLink></p>
                        <p className='Hatchbacksubtext'>Hyundai i20, Maruti Suzuki Swift</p>
                    </div>
                    <div className='SUV'>
                        <NavLink exact='true' to='SUVs-cars'><img src={Topcar3} alt='Top SUV Car' loading="lazy" className='SUVimg' /></NavLink>
                        <p ><NavLink exact='true' to='SUVs-cars' className='SUVtext'>Top 10 SUVs in India</NavLink></p>
                        <p className='SUVsubtext'>Kia Seltos, Hyundai Creta</p>
                    </div>
                </div>
            </div>


            {/* Body Type */}
            <div className='cartype'>
                <p className='cartypeheading'>DISCOVER YOUR PERFECT CAR</p>
                <p className='cartypesubhead'>Browse Car Body type Or Lifestyle</p>
                <div className='innercartype'>
                    <div className='sedantype'>
                        <NavLink exact='true' to='sedan-cars'><img src={Typesedan} alt='Sedan' loading="lazy" className='sedantypeimg' /></NavLink>
                        <p className='sedantypetext'><NavLink exact='true' to='sedan-cars' className='sedantypetext'>Sedan </NavLink></p>
                    </div>
                    <div className='hatchbacktype'>
                        <NavLink exact='true' to='hacthback-cars'><img src={Typehatchback} alt='Hatchback' loading="lazy" className='hatchbacktypeimg' /></NavLink>
                        <p className='hatchbacktypetext'><NavLink exact='true' to='hacthback-cars' className='hatchbacktypetext'>Hatchback</NavLink></p>
                    </div>
                    <div className='SUVtype'>
                        <NavLink exact='true' to='SUVs-cars'><img src={TypeSUV} alt='SUV' loading="lazy" className='SUVtypeimg' /></NavLink>
                        <p className='SUVtypetext'><NavLink exact='true' to='SUVs-cars' className='SUVtypetext'>SUV</NavLink></p>
                    </div>
                    <div className='luxurytype'>
                        <NavLink exact='true' to='SUVs-cars'><img src={Typeluxury} alt='Luxury' loading="lazy" className='luxurytypeimg' /></NavLink>
                        <p className='luxurytypetext'><NavLink exact='true' to='SUVs-cars' className='luxurytypetext'>Luxury</NavLink></p>
                </div>
                </div>
            </div>

            {/* Compare Cars  */}

            <div className='comparehome'>
                <div>
                    <NavLink exact='true' to='/compare-cars' className='comparehomeheading'>Comapre Cars</NavLink>
                    <p className='comparesubheading'>Compare to buy a right car</p>
                </div>
                <div className='comparecar'>
                    <div className='comparecar1'>
                        <ReactCompareImage leftImage={Topcar1} rightImage={Topcar2} />
                    </div>
                    <div className='comparecar2'>
                        <ReactCompareImage leftImage={Topcar1} rightImage={Topcar2} />
                    </div>
                    <div className='comparecar3'>
                        <ReactCompareImage leftImage={Topcar1} rightImage={Topcar2} />
                    </div>
                </div>
            </div>
            

            <Footer />
        </>
    );
}

export default Home;
