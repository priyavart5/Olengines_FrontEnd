import React from "react";
import './Navigationstyle.css';
import Ios from '../../Stuff/Images/navigation-ios.svg';
import hamburger from '../../Stuff/Images/hamburger.ico';
import { NavLink } from 'react-router-dom';


const Navigation = () =>{

    return(
              <div className='navbar'>
                <img src={hamburger} alt='ico'  className='hamburger'  />
                  <div className='logo-text'>
                    <NavLink exact='true' to='/' className='text-logo'><p>Olengines</p></NavLink>
                  </div>
                  <div className='ios-app'>
                    <img className='ios-svg' src={Ios} alt='ios-img'/>
                    <p className='text1'>Advertise on Olengines</p>
                    <p className='text2'>Promote your brand to passionate creative professionalsall over the world</p>
                    <a href='http://globebuzztimes.com' className='downloadnow'><p>Try It Out!</p></a>
                  </div>
                  <nav className='menu' >
                    <ul id='menuList'>
                      <li><NavLink exact='true' to="/signin" className='latest'>Latest</NavLink></li>
                      <li><NavLink exact='true' to="/signin" className='upcoming'>Upcoming</NavLink></li>
                      <li><NavLink exact='true' to="/signin" className='trending'>Trending</NavLink></li>
                    </ul>
                  </nav>
                  <hr className='navbarhr' />
                  <div className='signin-up'>
                      <NavLink exact='true' to="/signin" className='signinN' ><p>Sign in</p></NavLink>
                      <NavLink exact='true' to='/signup' className='signup'>Sign up</NavLink>
                  </div>
                  
              </div>
    );
}


export default Navigation;