import React, { useState } from 'react';
// import  { useContext } from 'react';
// import {useEffect}from 'react';
// import { Navigate } from "react-router-dom";
import Topbar from './layout/Topbar';
import Registration from './Registration';
// import axios from 'axios';

const Dashboard = () => {

    /*const [isAuthenticated, setIsAuthenticated] = useState(false); // Initial false state
  
    useEffect(() => {
      const storedValue = localStorage.getItem("authenticated"); // Get localStorage value
  
      // Handle potential errors and invalid values
      try {
        const parsedValue = JSON.parse(storedValue); // Parse stored value (if valid JSON)
        setIsAuthenticated(parsedValue !== null ? parsedValue : false); // Set based on parsed value or default to false
      } catch (error) {
        console.error("Error parsing localStorage value:", error);
        setIsAuthenticated(false); // Set to false on parsing error
      }
    }, []); // Empty dependency array for initial retrieval
  
    console.log("isAuthenticated:", isAuthenticated);
  
    if (!isAuthenticated) {
      return <Navigate replace to="/Login" />;
    } else {}*/

    // const coinData = [
    //     { symbol: "BTC", name: "Bitcoin", price: "69,547", rank: 1, change: "11.72%" },
    //     { symbol: "ETH", name: "Ethereum", price: "2,500", rank: 2, change: "5.32%" },
    //     { symbol: "LTC", name: "Litecoin", price: "150", rank: 3, change: "2.45%" }
    //     // Add more coin data as needed
    // ]; 
    const coinData = [
        {
            symbol: "ADA", name: "Cardano", price: "0.395069", rank: 10, change: "1.57%"
        },
        {
            symbol: "BCH", name: "Bitcoin Cash", price: "383.00928", rank: 16, change: "-4.96%"
        },
        {
            symbol: "BNB", name: "BNB", price: "572.450898", rank: 4, change: "-0.81%"
        },
        {
            symbol: "BTC", name: "Bitcoin", price: "60900.9322", rank: 1, change: "-0.90%"
        },
        {
            symbol: "DOGE", name: "Dogecoin", price: "0.123838" , rank: 9, change: "-2.466%"
        },
        {
            symbol: "DOT", name: "Polkadot", price: "6.13487365", rank: 14, change: "-3.127%"
        },
        {
            symbol: "EOS", name: "EOS", price: "6.134", rank: 50, change: "-3.12%"
        },
        {
            symbol: "ETH", name: "Ethereum", price: "3391.42669", rank: 2, change: "-1.496%"
        },
        {
            symbol: "LINK", name: "Chainlink", price: "13.8374", rank: 15, change: "-3.5143%"
        },
        {
            symbol: "LTC", name: "Litecoin", price: "74.139301", rank: 17, change:" -0.38948%"
        },
        {
            symbol: "MATIC", name: "Polygon", price: "0.558891", rank: 18, change: "-1.71954%"
        },
        {
            symbol: "SOL", name: "Solana", price: "142.53269", rank: 5, change: "-1.842%"
        },
        {
            symbol: "UNI", name: "Uniswap", price: "8.958731", rank: 21, change: "-4.9350%"
        },
        {
            symbol: "USDT", name: "Tether USDt", price:" 0.998507", rank: 3, change: "-0.0356%"
        },
        {
            symbol: "XLM", name: "Stellar", price: "0.091087", rank: 32, change: "-1.751%"
        },
        {
            symbol: "XRP", name: "XRP", price: "0.475878", rank: 7, change: "-0.7504%"
        }


    ]
    



    const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);




    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const searchTerms = searchInput.split(',').map(term => term.trim().toLowerCase());
        const results = coinData.filter((coin) =>
            searchTerms.includes(coin.symbol.toLowerCase())
        );
        setSearchResults(results); // Update state here
        console.log();
    };


    return (
        <div className='Main_Container'>
            <div className="Topbar" >
                {/* Render RegistrationForm and pass handleUsernameUpdate function */}
                <Topbar />

            </div>
            <div className='d-flex flex-column main-dashboard '> {/* align-items-center */}
                <h1>Search</h1>
                <div className="search col-md-10 offset-md-1 d-flex flex-column">
                    <div className='col-lg-5 offset-lg-4 col-md-6 offset-md-3  col-sm-12 d-flex justify-content-center '>
                        <form className="input-group search-form d-flex justify-content-center align-items-center p-5" onSubmit={handleFormSubmit}>
                            <input
                                className='form-control col-lg-4 col-md-4 col-sm-12'
                                type="text"
                                placeholder="Enter Coin symbol"
                                value={searchInput} style={{ textTransform: "capitalize" }}
                                onChange={handleInputChange}
                            />
                            <input type="submit" value="Search" className='btn btn-dark' />
                        </form>
                    </div>
                    <div className='d-flex justify-content-center'>
                        {searchResults.length > 0 ? (
                            <div className="d-flex col-md-8 col-lg-8 justify-content-center ">
                                {searchResults.map((coin, index) => (
                                    <div key={index} className="col-lg-4 col-md-4 col-sm-10  mx-3">
                                        <div className="card">
                                            <div className="card-header d-flex justify-content-between">
                                                <span className='fw-bold'>{coin.name} ({coin.symbol})</span>
                                                <span className="change" style={{ color: coin.change.startsWith('-') ? 'red' : 'green' }}>
                                                    {coin.change}
                                                </span>
                                            </div>
                                            <div className="card-body  " style={{ padding: "10px 20px" }}>
                                                <div className='p-1 custom-card-body row'>
                                                    <div className='col' >
                                                        <div>Price:</div>
                                                        <div>${coin.price}</div>
                                                    </div>
                                                    <div className='col'>
                                                        <div>Rank:</div>
                                                        <div>{coin.rank}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p>No results found</p>
                        )}


                    </div>
                </div>
            </div>
        </div>
    );

};

export default Dashboard;
