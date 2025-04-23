import { Route, Routes } from "react-router-dom";
import {Channels} from '../channel/Channels.jsx'
import { Settings } from "../settings/Setting.jsx";
import { ChannelView } from "../channel/ChannelView.jsx";
import { getChannels } from "../../services/api.jsx";


export const Content = ({channels}) => {
    return (
        <div className="content-container">
            <Routes>
                <Route path='channels' element = {<Channels channels={channels} />}/>
                <Route path= 'settings' element={<Settings/>}/>
                <Route path="channel/:id" element= {<ChannelView getChannels={getChannels}/>}/>
            </Routes>
        </div>
    )
}