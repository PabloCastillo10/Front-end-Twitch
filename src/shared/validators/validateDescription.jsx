export const validateDescription = (description) => {
    return description.lenght >= 10 && description.lenght <= 200;
}

export const descriptionValidateMessage = 'La descripcion debe tener entre 10 y 200 caracteres';