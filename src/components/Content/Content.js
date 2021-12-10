import React from "react";
import './Contentstyle.css';
import banner from '../../Stuff/Images/banner.png';
import arrow from '../../Stuff/Images/arrow.svg';
import desktop from '../../Stuff/Images/desktop.svg';
import apple from '../../Stuff/Images/apple.svg';
import playstore from '../../Stuff/Images/playstore.svg';
import chrome from '../../Stuff/Images/chrome.svg';
import instagram from '../../Stuff/Images/instagram.svg';
import { NavLink } from "react-router-dom";

const Content = () =>{
    return(
        <>
        <div className='main-screen'>
            <div className='content'>
                <div className='content-inner'>
                    <p className='heading'>The super fast <br/> Car Information <br/> Platform!</p>
                    <p className='sub-heading'>With Olengines save your time and get <br/>  the desired car information quickly.</p>
                    <NavLink exact='true' to='/signin'><button className='first-button'>Start the olengines!</button></NavLink>
                    <NavLink exact='true' to='/trendingcars'><button className='second-button'>Explore trending cars</button></NavLink>
                </div>
            </div>
            <div className='banner-img'>
                <img className='arrow' src={arrow} alt='arrow'/>
                <NavLink exact='true' to='/signin' className='explore'>Explore</NavLink>
                <NavLink exact='true' to='/signin'><img src={banner} alt='banner' className='banner-image'/></NavLink>
            </div>
        </div>

        <div className='boxes'>
            <div className='firstblock'>
                <img className='img1' src={desktop} alt='desktop'/>
                <p className='h1'>Website</p>
                <p className='t1'>All the powers of Olengines in your computer.</p>
            </div>
            <div className='secondblock'>
                <img classname='img2' src={apple} alt='apple'/>
                <p className='h2'>iOS App</p>
                <p className='t2'>Crerate, browse and save cars on the go.</p>
            </div>
            <div className='thirdblock'>
                <img classname='img3' src={playstore} alt='playstore'/>
                <p className='h3'>Android App</p>
                <p className='t3'>Crerate, browse and save cars on the go.</p>
            </div>
            <div className='forthblock'>
                <img classname='img4' src={chrome} alt='chrome'/>
                <p className='h4'>Chrome</p>
                <p className='t4'>Update with new info. in your chrome.</p>
            </div>
            <div className='fifthblock'>
                <img classname='img5' src={instagram} alt='instagram'/>
                <p className='h5'>Instagram</p>
                <p className='t5'>Get your daily update of beautiful cars.</p>
            </div>
        </div>
        </>
    );
}

export default Content;


