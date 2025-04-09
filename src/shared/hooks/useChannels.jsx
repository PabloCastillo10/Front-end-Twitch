import { useState } from "react";
import toast from "react-hot-toast";
import { getChannels as getChannelsRequest, getFollowedChannels } from "../../services/api";

export const useChannels = () => {
    const [channels, setChannels] = useState(null)

    const getChannels = async (isLogged = false) => {
        const channelsData = await getChannelsRequest()

        if(channelsData.error) {
            return toast.error(
                channelsData.e?.response?.data || 'Ocurrio un error al leer los canales'
            )
        }

        if(!isLogged) {
            return setChannels({
                channels: channelsData.data.channels
            })
        }

        const followedChanelsData = await getFollowedChannels();


        if(followedChanelsData.error) {
            return toast.error(
                channelsData.e?.response?.data || 'Ocurrio un error al leer los canales que sigues'
            )
        }

        setChannels({
            channels: channelsData.data.channels,
            followedChanels: channelsData.data.channels.filter(channel =>
                followedChanelsData.data.followedChanels.includes(channel.id)
            )
        })
    }

    return {
        getChannels,
        isFetching: !Boolean(channels),
        allChannels: channels?.channels,
        followedChanels: channels?.followedChanels
    }
}