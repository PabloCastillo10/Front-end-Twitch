import { useState } from "react";

import {
    validateUsername,
    validateUsernameMessage,
    validationAvatarURL,
    avatarUrlValidationMessage,
    validateDescription,
    descriptionValidateMessage,
    validaTtitle,
    validaTtileMessage
} from "../../shared/validators"
import { Input } from "../Input";

const inputs = [
    {
        field: 'username',
        label: 'Username',
        validationMessage: validateUsernameMessage,
        type: 'text',
    },
    {
        field: 'avatarURL',
        label: 'Avatar URL',
        validationMessage: avatarUrlValidationMessage,
        type: 'text',
    },
    {
        field: 'description',
        label: 'Description',
        validationMessage: descriptionValidateMessage,
        type: 'text',
    },
    {
        field: 'title',
        label: 'Title',
        validationMessage: validaTtileMessage,
        type: 'text',
    }
]

export const ChannelSettings = ({settings, saveSettings}) => {
    const [formState, setFormState] = useState({
        username: {
            isValid: false,
            showError: false,
            value: settings.username
        },
        avatarURL: {
            isValid: false,
            showError: false,
            value: settings.avatarURL
        },
        description: {
            isValid: false,
            showError: false,
            value: settings.description
        },
        title: {
            isValid: false,
            showError: false,
            value: settings.title
        }
    })


    const handleInputValidationOnBlur = (field, isValid) => {
        let isValid = true

        switch (field) {
            case 'username':
                isValid = validateUsername(value)
                break;
            case 'avatarURL':
                isValid = validationAvatarURL(value)
                break;
            case 'description':
                isValid = validateDescription(value)
                break;
            case 'title':
                isValid = validaTtitle(value)
                break;
            default:
                break;
        }

        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid
            }
        }))
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        saveSettings({
            username: formState.username.value, 
            title: formState.title.value,
            avatarURL: formState.avatarURL.value,
            description: formState.description.value 
           })
    }

    
}