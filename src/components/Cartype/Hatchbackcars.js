import React from 'react';
import './Sedancarsstyle.css';
import Navigation_Signin from '../Navigation-signin/Navigation_Signin';
import Footer from '../Footer/Footer';
import { NavLink } from 'react-router-dom';
import verna from '../../Stuff/Images/hyundaiverna.png';
import Carousel from '../Home/Carousel/Carousel';

const Hatchbackcars = () =>{
    return(
        <>
        <Navigation_Signin />
            <div className='carscontent'>
                <p className='hometosedan'>Home - Hatchback Car </p>
                <p className='carsheading'>Hatchback Cars</p>
                <p className='carssubheading'>The top hatchback cars in India include Tata Altroz (₹ 5.84 Lakh), 
                Hyundai i20 (₹ 6.91 Lakh) and Maruti Baleno (₹ 5.97 Lakh). To see the latest price in your city, offers,
                variants, specifications, pictures, mileage and reviews of the best hatchback cars.</p>
            </div>

            <div className='firstsedancars'>
                <div className='cars01'>
                    <NavLink exact='true' to='home' ><img src={verna} alt='verna' className='img01'/></NavLink>
                    <div className='carstext'>
                        <p className='carname'>Hyundai Verna</p>
                        <p className='carprice'>₹ 9.58 Lakh <span className='carpricespan'>(Avg. Ex-Showroom price)</span><span className='carincityspan'>Show price in my city</span></p>
                    </div>
                </div>
                <div className='cars02'>
                <NavLink exact='true' to='home' ><img src={verna} alt='verna' className='img02'/></NavLink>
                <div className='carstext'>
                    <p className='carname'>Honda City</p>
                    <p className='carprice'>₹ 9.58 Lakh <span className='carpricespan'>(Avg. Ex-Showroom price)</span><span className='carincityspan'>Show price in my city</span></p>
                </div>
                </div>
            </div>

            <div className='firstsedancars'>
                <div className='cars01'>
                    <NavLink exact='true' to='home' ><img src={verna} alt='verna' className='img01'/></NavLink>
                    <div className='carstext'>
                        <p className='carname'>Hyundai Verna</p>
                        <p className='carprice'>₹ 9.58 Lakh <span className='carpricespan'>(Avg. Ex-Showroom price)</span><span className='carincityspan'>Show price in my city</span></p>
                    </div>
                </div>
                <div className='cars02'>
                <NavLink exact='true' to='home' ><img src={verna} alt='verna' className='img02'/></NavLink>
                <div className='carstext'>
                    <p className='carname'>Hyundai Verna</p>
                    <p className='carprice'>₹ 9.58 Lakh <span className='carpricespan'>(Avg. Ex-Showroom price)</span><span className='carincityspan'>Show price in my city</span></p>
                </div>
                </div>
            </div>

            <div className='firstsedancars'>
                <div className='cars01'>
                    <NavLink exact='true' to='home' ><img src={verna} alt='verna' className='img01'/></NavLink>
                    <div className='carstext'>
                        <p className='carname'>Hyundai Verna</p>
                        <p className='carprice'>₹ 9.58 Lakh <span className='carpricespan'>(Avg. Ex-Showroom price)</span><span className='carincityspan'>Show price in my city</span></p>
                    </div>
                </div>
                <div className='cars02'>
                <NavLink exact='true' to='home' ><img src={verna} alt='verna' className='img02'/></NavLink>
                <div className='carstext'>
                    <p className='carname'>Hyundai Verna</p>
                    <p className='carprice'>₹ 9.58 Lakh <span className='carpricespan'>(Avg. Ex-Showroom price)</span><span className='carincityspan'>Show price in my city</span></p>
                </div>
                </div>
            </div>

            <div className='firstsedancars'>
                <div className='cars01'>
                    <NavLink exact='true' to='home' ><img src={verna} alt='verna' className='img01'/></NavLink>
                    <div className='carstext'>
                        <p className='carname'>Hyundai Verna</p>
                        <p className='carprice'>₹ 9.58 Lakh <span className='carpricespan'>(Avg. Ex-Showroom price)</span><span className='carincityspan'>Show price in my city</span></p>
                    </div>
                </div>
                <div className='cars02'>
                <NavLink exact='true' to='home' ><img src={verna} alt='verna' className='img02'/></NavLink>
                <div className='carstext'>
                    <p className='carname'>Hyundai Verna</p>
                    <p className='carprice'>₹ 9.58 Lakh <span className='carpricespan'>(Avg. Ex-Showroom price)</span><span className='carincityspan'>Show price in my city</span></p>
                </div>
                </div>
            </div>

            <div className='firstsedancars'>
                <div className='cars01'>
                    <NavLink exact='true' to='home' ><img src={verna} alt='verna' className='img01'/></NavLink>
                    <div className='carstext'>
                        <p className='carname'>Hyundai Verna</p>
                        <p className='carprice'>₹ 9.58 Lakh <span className='carpricespan'>(Avg. Ex-Showroom price)</span><span className='carincityspan'>Show price in my city</span></p>
                    </div>
                </div>
                <div className='cars02'>
                <NavLink exact='true' to='home' ><img src={verna} alt='verna' className='img02'/></NavLink>
                <div className='carstext'>
                    <p className='carname'>Hyundai Verna</p>
                    <p className='carprice'>₹ 9.58 Lakh <span className='carpricespan'>(Avg. Ex-Showroom price)</span><span className='carincityspan'>Show price in my city</span></p>
                </div>
                </div>
            </div>

            <Carousel id='sedancarousel' />

        <Footer />
        </>
    );
}

export default Hatchbackcars;