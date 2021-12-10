import React,{useState} from "react";
import './Searchpage.css';
// import Navigation_Signin from "../Navigation-signin/Navigation_Signin";

const Searchpage = () => {
    const [cars, setName] = useState("");
    const [car, setCars] = useState([]);

    const onSubmitSearch =async (event)  =>{
        event.preventDefault();
        try {
            const response = await fetch(`http://localhost:4000/search/?cars=${cars}`);
            const parseResponse = await response.json();
            console.log(parseResponse);
            setCars(parseResponse);
        } catch (err) {
            console.error(err.message);
        }
    }


    return(
        <div className='searchpagediv'>
            <p className='headtextsearch'>Search your dream car</p>
            <form onSubmit={onSubmitSearch} className='formsearchchange'>
            <input className='searchfieldinput' type='text' name='search' placeholder='Search Car' value={cars} onChange={(event)=>setName(event.target.value)} />
            <button className='searchpagebutton'>Search</button>
            </form>
            <table className="tablesearchpage">
                <thead>
                    <tr>
                    <th className='tablenamecarname'>Search Result</th>
                    </tr>
                </thead>
                <tbody>
                    {car.map(care => (
                    <tr key={care.company_name}>
                        <td>{care.car_name}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Searchpage;
