import React from "react";
import './Navigation_Signin.css';
import Navigationuserimage from '../../Stuff/Images/Navigation_Signin.svg';
import Ios from '../../Stuff/Images/navigation-ios.svg';
import hamburger from '../../Stuff/Images/hamburger.ico';
import { NavLink } from 'react-router-dom';


const Navigation_Signin = () =>{



    return(
              <div className='navbar'>
                <img src={hamburger} alt='ico'  className='hamburger'  />
                  <div className='logo-text'>
                    <NavLink exact='true' to='/home' className='text-logo'><p>Olengines</p></NavLink>
                  </div>
                  <div className='ios-app'>
                    <img className='ios-svg' src={Ios} alt='ios-img'/>
                    <p className='text1'>Advertise on Olengines</p>
                    <a href='http://globebuzztimes.com' className='downloadnow'><p>Try It Out!</p></a>
                  </div>
                  <nav className='menu' >
                    <ul id='menuList'>
                      <li><NavLink exact='true' to="/latestcars" className='latest'>Latest</NavLink></li>
                      <li><NavLink exact='true' to="/upcomingcars" className='upcoming'>Upcoming</NavLink></li>
                      <li><NavLink exact='true' to="/trendingcars" className='trending'>Trending</NavLink></li>
                      <li><NavLink exact='true' to="/search" className='search011'>Search..</NavLink></li>
                    </ul>
                  </nav>
                  <hr className='navbarhr' />
                  <div className='signin-up'>
                      <img className='userimage' src={Navigationuserimage} alt='useriamge' />
                      <div class="dropdown">
                        <button class="dropbtn">Priyavart V.</button>
                        <div class="dropdown-content">
                          <NavLink className='dropdownsetting' exact='true' to='/'>Setting</NavLink>
                          <NavLink className='dropdownlogout' exact='true' to='/'>Log out</NavLink>
                        </div>
                      </div>
                  </div>
                  
              </div>
    );
}


export default Navigation_Signin;