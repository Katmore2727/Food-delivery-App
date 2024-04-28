import React from "react";
import Navbar from "./Navbar";
import './Page1.css'
import M from '../Assets/M.jpg';
import c from '../Assets/c.jpg';
import h from '../Assets/h.jpg';
import r from '../Assets/r.jpg';


export default function Page1() {

    return(
        <div>
        <Navbar></Navbar>
        <div className="container1">
       

            <div className="container2">
                <img src={M} alt="backgroundI" className="bg1" />                
            </div>
            


            <div className="container3">
            <img src={c} alt="backgroundI" className="bg2" />                

            </div>

            <div className="container4">
            <img src={h} alt="backgroundI" className="bg3" />                

            </div>

            <div className="container5">
            <img src={r} alt="backgroundI" className="bg4" />                

            </div>

            <div className="container6">
                <h1 className="word">Our <br></br>
                 Delicious <br></br> Food On <br></br> Your <br></br> Doorstep  
                </h1>
            </div>
        </div>
        </div>
    )
} 