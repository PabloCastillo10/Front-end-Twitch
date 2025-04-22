import React from "react";
import videoBc from "../../assets/video5.mp4"
import { Navbar } from "../../components/navbars/Navbar";
import './dashBoardPage.css'
import { useEffect } from "react";
import {LoadingSpinner} from "../../components/LoadingSpinner.jsx"
import {Content} from "../../components/dashboard/Content.jsx"
import { Sidebar } from "../../components/navbars/Sidebar.jsx";
import {useChannels} from "../../shared/hooks/useChannels.jsx"
import { useUserDetails } from "../../shared/hooks/useUserDetails";

export const DashBoardPage = () => {

    const {getChannels, allChannels, isFetching, followedChannels} = useChannels()
    const {isLogged} = useUserDetails()

    useEffect(() => {
        getChannels(isLogged)
      }, []);
    
    if(isFetching) {
        return <LoadingSpinner/>
    }
    return ( 
        <div className="dashboard-container" >
            <video autoPlay loop muted playsInline className="background-video">
                <source src={videoBc} type="video/mp4"/>
            </video> 
                <Navbar/>
                <Content channels= {allChannels} getChannels= {getChannels}/>
                <Sidebar channels={followedChannels}/>
                

     
        </div>


        
        
    )
}