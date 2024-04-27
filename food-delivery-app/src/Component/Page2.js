import React from "react";
// import Header from "./navbar/Header";
import Navbar from "./Navbar";
import './Page2.css';
import Cart from './Cart';

function Menu(){
    return(
        <>
        <div>
            <Navbar></Navbar>
            <header>
                <div className="main1">
                <h1>Find Your Best Food </h1>
                <p>Order And Eat</p>
                <a><button>Check out menu</button></a>
                </div>
            </header>
            <h1 className="menuOrder">ORDER ONLINE ORDER ONLINE ORDER ONLINE</h1>
            <h1 className="menuOrder1">Order Your Favorite Food</h1>
            
            <div className="main2">
            <div className="blur">
                <div className="gridarea">
                <div className="m1" >
                    <div className="menuopacity">
                    <p className="food">North Indian</p>
                    <button className="foodbtn">Order Now</button>
                    </div>
                </div>
                <div className="m2" >
                    <div className="menuopacity">
                <p className="food" style={{fontSize:'35px',left:'0px'}}>South Indian</p>
                <button className="foodbtn">Order Now</button>
                </div>
                </div>
                

                <div className="m3" >
                    <div className="menuopacity">
                <p className="food" style={{fontSize:'40px',left:'0px'}}>Veg Thali Special</p>
                <button className="foodbtn">Order Now</button>
                </div>
                </div>
                <div className="m4" >
                    <div className="menuopacity1">
                <h1 className="food" >Biryani</h1>
                <button className="foodbtn">Order Now</button>
                </div>
                </div>
                <div className="m5" >
                    
                <p className="food" style={{fontSize:'40px',left:'0px'}}></p>
                <button className="foodbtn">Order Now</button>
                
                </div>
                <div className="m6" >
                    <div className="menuopacity1">
                <p className="food" >Street Food</p>
                <button className="foodbtn">Order Now</button>
                </div>
                </div>
                <div className="m7" >
                    <div className="menuopacity1">
                <p className="food" style={{color:'black',fontSize:'40px',left:'0px'}}>Non Veg Delights</p>
                <button className="foodbtn">Order Now</button>
                </div>
                </div>
                <div className="m8" >
                    <div className="menuopacity1">
                <p className="food" >Rajasthani</p>
                <button className="foodbtn">Order Now</button>
                </div>
                </div>
                <div className="m9" >
                    <div className="menuopacity1">
                <p className="food" style={{color:'black',fontSize:'40px',left:'0px'}}>Chennai</p>
                <button className="foodbtn">Order Now</button>
                </div>
                </div>
                {/* <div className="m0" ></div> */}
                </div>
                </div>

            </div>
        </div>

        </>  
    )
}
export default Menu;