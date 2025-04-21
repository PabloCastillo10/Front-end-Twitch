import { Route, Routes } from "react-router-dom";
import {Channels} from '../channel/Channels.jsx'


export const Content = ({channels}) => {
    return (
        <div className="content-container">
            <Routes>
                <Route path='channels' element = {<Channels channels={channels} />}/>
            </Routes>
        </div>
    )
}