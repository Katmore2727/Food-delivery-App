import React from "react";
import Navbar from "./Navbar"
import './Home.css'
import f2 from '../Assets/f2.jpg'
import f3 from '../Assets/f3.jpg'

export default function Home() {
    return(
        
        <div className="home-container">
            <Navbar />
            
            <div className="background-image-container">
                <img src={f2} alt="background" className="background-image" />
            </div>
            <h1 className="text">Oder Your <br></br> Favourite Foods <br></br> & Easy Pickup</h1>
            {/* <h2 className="user">20M+</h2> */}
            
            <div className="users">
                <div className="review">
                    <h1> (4.2) Ratings <br></br> 1cr Reviews(!)</h1>
                </div>
                <div className="user">
                    <h1> (2cr+) <br></br> Downloads</h1>
                </div>
            </div>
            

        </div>       
    );
} 