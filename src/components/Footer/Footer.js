import React from "react";
import './Footerstyle.css';
import {NavLink} from "react-router-dom";
// import Signin from "../Signin-up/Signin";

const Footer = () => {

    return(
        <>
        <hr/>
        <div className='footer1'>
            <div className='col1'>
                <p className='website'>Website</p>
                <ul>
                    <li><NavLink exact='true' className='latestf'  to='/latestcars'>Latest Cars</NavLink></li>
                    <li><NavLink exact='true' className='upcomingf' to='/upcomingcars'>Upcoming Cars</NavLink></li>
                    <li><NavLink exact='true' className='trendingf' to='/trendingcars'>Trending Cars</NavLink></li>
                    <li><NavLink exact='true' className='reviewsf' to='/reviews'>Reviews</NavLink></li>
                    <li><NavLink exact='true' className='newsf' to='/news'>News</NavLink></li>
                    <li><NavLink exact='true' className='comparef' to='/comparecars'>Compare Cars</NavLink></li>
                    <li><NavLink exact='true' className='feedf' to='/feed'> Feed</NavLink></li>
                </ul>
            </div>

            <div className='col2'>
                <p className='products'>Products</p>
                <ul>
                    <li><NavLink exact='true' className='iosf'  to='/ios'>iOS app</NavLink></li>
                    <li><NavLink exact='true' className='androidf' to='/android'>Android app</NavLink></li>
                    <li><NavLink exact='true' className='chromef' to='/chrome'>Chrome extension</NavLink></li>
                </ul>
            </div>

            <div className='col3'>
                <p className='company'>Company</p>
                <ul>
                    <li><NavLink exact='true' className='termsf'  to='/termsofservice'>Terms of service</NavLink></li>
                    <li><NavLink exact='true' className='privacyf' to='/privacypolicy'>Privacy policy</NavLink></li>
                    <li><NavLink exact='true' className='cookief' to='/cookiepolicy'>Cookie Policy</NavLink></li>
                    <li><NavLink exact='true' className='helpf' to='/helpcenter'>Help Center</NavLink></li>
                    <li><NavLink exact='true' className='aboutf' to='/aboutus'>About us</NavLink></li>
                    <li><NavLink exact='true' className='contactf' to='/contactus'>Contact us</NavLink></li>
                </ul>
            </div>

            <div className='col4'>
                <p className='account'>Account</p>
                <ul>
                    <li><NavLink exact='true' className='signinf'  to='/signin'>Sign in</NavLink></li>
                    <li><NavLink exact='true' className='signupf' to='/upcomingcars'>Sign up</NavLink></li>
                    <li><NavLink exact='true' className='resetf' to='/trendingcars'>Reset password</NavLink></li>
                </ul>
            </div>
        </div>

        <div className='footer2'>
                <div className='logo-textf'>
                        <NavLink exact='true' to='/' className='text-logof'><p>Olengines</p></NavLink>
                </div>
                <div className='ccf'>
                    <p className='textf'>© Olengines by <a className='priyavartf' href='http://globebuzztimes.com'>Priyavart Vashisht</a>. From a creative to all the others</p>
                </div>
                <div className='socialmediaf'>
                    <a href="#" class="fa fa-facebook" />
                    <a href="#" class="fa fa-twitter" />
                    <a href="#" class="fa fa-instagram" />
                    <a href="#" class="fa fa-github" />
                    <a href="#" class="fa fa-behance" />
                </div>
            </div>

        </>
    );
}

export default Footer;