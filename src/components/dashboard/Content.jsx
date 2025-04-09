import { Route, Routes } from "react-router-dom";
import {Channel} from '../channel/Channels.jsx  '
import { Channels } from "../channel/Channels";


export const Content = {{channels}} => {
    return (
        <div className="content-container">
            <Routes>
                <Route path='channels' element = {<Channel channels={channels} />}/>
            </Routes>
        </div>
    )
}