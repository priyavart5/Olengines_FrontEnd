import React, { useState } from "react";
import './Compare.css';
import { NavLink } from "react-router-dom";
import Footer from '../Footer/Footer';
import Navigation_Signin from "../Navigation-signin/Navigation_Signin";

const Compare = () =>{

    const [cars1, setName] = useState("");
    const [cars2, setName1] = useState("");
    const [car1, setCars] = useState([]);
    const [car2, setCars1] = useState([]);

    const onSubmitComapre =async (event)  =>{
        event.preventDefault();
        try {
        const response = await fetch(`http://localhost:4000/compare/?cars=${cars1}`);
        const response1 = await fetch(`http://localhost:4000/compare/?cars=${cars2}`);
        console.log(response);
        console.log(response1);
        const parseResponse = await response.json();
        const parseResponse1 = await response1.json();
        console.log(parseResponse);
        console.log(parseResponse1);
        setCars(parseResponse);
        setCars1(parseResponse1);
        } catch (err) {
        console.error(err.message);
        }
    }
    return(
        <>
        <Navigation_Signin/>
        <div className='content-page'>
            <div>
                <NavLink exact='true' to='home' className='homepage'>Home <span className='homepagespan'>Compare</span></NavLink>
                <p className='carsheading'>Compare Cars</p>
                <p className='carssubheading'>Are you confused between multiple cars to choose from? Not sure what to look for in comparison? Don't worry
                , car comparison was never so easy. Hence, Olengines brings you an amazing.</p>
            </div>

            <div className='comparefields'>
                <form className='compareform' onSubmit={onSubmitComapre}>
                    <div className='selectcar01div'>
                        <input className='selectcar01' type='text' name='search' placeholder='Search Car 01' value={cars1} onChange={(event)=>setName(event.target.value)} />
                    </div>
                    <div className='selectcar02div'>
                        <input className='selectcar02' type='text' name='search' placeholder='Search Car 02' value={cars2} onChange={(event)=>setName1(event.target.value)} />
                    </div>
                    <button className='compare-button'>Compare</button>
                </form>
            </div>

            <div className='tables'>
                <table className='onlynames'>
                            <tr className='carname'>Car Name</tr>
                            <tr>Company</tr>
                            <tr>Price</tr>
                            <tr>Engine</tr>
                            <tr>Fuel Type</tr>
                            <tr>Transmission</tr>
                            <tr>Seating Capacity</tr>
                            <tr>Car Type</tr>
                </table>

                <table className='car01table'>
                    {car1.map(car1 => (
                        <>
                            <tr className='carnametable'>{car1.car_name}</tr>
                            <tr>{car1.company_name}</tr>
                            <tr>{car1.price}</tr>
                            <tr>{car1.engine}</tr>
                            <tr>{car1.fuel_type}</tr>
                            <tr>{car1.transmission}</tr>
                            <tr>{car1.seating_capacity}</tr>
                            <tr>{car1.vehicle_type}</tr>
                        </>
                    ))}
                </table>
                

                <table className='car02table'>
                    {car2.map(car2 => (
                        <>
                            <tr className='carnametable'>{car2.car_name}</tr>
                            <tr>{car2.company_name}</tr>
                            <tr>{car2.price}</tr>
                            <tr>{car2.engine}</tr>
                            <tr>{car2.fuel_type}</tr>
                            <tr>{car2.transmission}</tr>
                            <tr>{car2.seating_capacity}</tr>
                            <tr>{car2.vehicle_type}</tr>
                        </>
                    ))}
                </table>
            </div>
        </div>

        <Footer />
        </>
    );
}



export default Compare;

