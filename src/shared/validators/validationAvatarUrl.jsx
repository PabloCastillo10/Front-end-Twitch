export const validationAvatarURL = (url) => {
    const regex = /^(ftp|http|https):\/\/[^ "]+$/;
    return regex.test(url);
}
 
export const avatarUrlValidationMessage = "Esto no es una url valida";