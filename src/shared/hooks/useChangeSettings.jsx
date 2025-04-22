import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import { getChannelSettings, updateChannelSettings } from "../../services";


export const useChangeSettings = () => {

    const [channelSettings, setChannelSettings] = useState({});
    
    const fetchChannelSettings = async () => {
        const response = await getChannelSettings();


        if(response.error) {
            return toast.error(
                response.e?.response?.data || 'Ocurrrio un error al obtener los datos del canal'
            )
        }
        setChannelSettings({
            username: response.data.username,
            title: response.data.title,
            description: response.data.description,
            avatarUrl: response.data.avatarUrl,
            streamKey: response.data.streamKey,
        })
    }

    const saveChannelSettings = async (data) => {
        const response = await updateChannelSettings(data)

        if(response.error) {
            return toast.error(
                response.e?.response?.data || 'Ocurrrio un error al guardar los datos del canal'
            )
        }
        toast.success('Datos guardados con exito')
    }

    useEffect(() => {
        fetchChannelSettings()
    }, [])

    return {
        isFetching: !channelSettings,
        channelSettings,
        saveChannelSettings,
    }


}