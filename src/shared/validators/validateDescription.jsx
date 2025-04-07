export const validateDescription = (description) => {
    return description.lenght >= 10 && description.lenght <= 200;
}

export const descriptionMessage = 'La descripcion debe tener entre 10 y 200 caracteres';