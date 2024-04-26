import React from "react";
import Navbar from "./Navbar"
import './Contact.css';

export default function Contact() {
    return(
       <div>
        <Navbar></Navbar>
        {/* <div className="back"></div> */}
        <div className="box">
            <div className="box1"></div>
            <div className="box2"></div>
            <div className="box3"></div>

            <h1 className="text"> Food Ordering & <br></br> Delivery App Development</h1>
            <h2 className="text1"> We have designed a custom <br></br> on-demand food delivery app <br></br>
                          that streamlines your food <br></br> ordering business </h2>
            <h2 className="text2"> Contact us to scale it up for your business.</h2>   

            <div className="contact">
                <h1> Let's Talk </h1>
                <ul>
                    <li>
                <i class="fa-solid fa-phone"></i> <span>+91 98566553471</span>
                </li>
                <li>
                <i class="fa-solid fa-envelope"></i> <span>food123@gmail.com</span>
                </li>
                <li>
                <i class="fa-solid fa-globe"></i> <span>www.fdelivery.com</span>
                </li>
                </ul>           
            </div>
        </div>
       </div>
       
    )
} 