import React from "react";
import videoBc from "../../assets/video5.mp4"
import { Navbar } from "../../components/navbars/Navbar";
import './dashBoardPage.css'

export const DashBoardPage = () => {
    return ( 
        <div className="app-container" >
            <video autoPlay loop muted playsInline className="background-video">
                <source src={videoBc} type="video/mp4"/>
            </video> 

            <div className="app-content">
                <Navbar/>
                <div className="app-content-container">
                   
                </div>
                </div>
        </div>


        
        
    )
}