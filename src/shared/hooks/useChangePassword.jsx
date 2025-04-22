import toast from "react-hot-toast"
import { changePassword as changePasswordRequest } from "../../services"


export const useChangePassword = () => {
    const changePassword = async (password, newPaswword) => {
        const responseData = await changePasswordRequest({ password, newPaswword })
        if (responseData.error) {
            toast.error("No fue Posible cambiar la contraseña")
            return
        }
        toast.success("Contraseña cambiada con exito")
    }

    return { changePassword }
}