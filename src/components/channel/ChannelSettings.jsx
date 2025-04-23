import { useState } from "react";

import {
    validateUserName,
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
        type: 'text'
    },
    {
        field: 'title',
        label: 'Title',
        validationMessage: validaTtileMessage,
        type: 'text'
    },
    {
        field: 'avatarUrl',
        label: 'Avatar Url',
        validationMessage: avatarUrlValidationMessage,
        type: 'text'
    },
    {
        field: 'description',
        label: 'Descripción',
        validationMessage: descriptionValidateMessage,
        type: 'text'
    }
]

export const ChannelSettings = ({ settings, saveSettings }) => {
    const [formState, setFormState] = useState({
        username: {
            isValid: validateUserName(settings.username),
            showError: false,
            value: settings.username
        },
        title: {
            isValid: validaTtitle(settings.title || ""),
            showError: false,
            value: settings.title
        },
        avatarUrl: {
            isValid: validationAvatarURL(settings.avatarUrl),
            showError: false,
            value: settings.avatarUrl
        },
        description: {
            isValid: validateDescription(settings.description || ""),
            showError: false,
            value: settings.description
        }
    })

    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value
            }
        }))
    }

    const handleInputValidationOnBlur = (value, field) => {

        let isValid = false

        switch(field) {
            case 'username':
                isValid = validateUserName(value)
                break;
            case 'title':
                isValid = validaTtitle(value)
                break;
            case 'avatarUrl':
                isValid = validationAvatarURL(value)
                break;
            case 'description':
                isValid = validateDescription(value)
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
        event.preventDefault();

        saveSettings({
            username: formState.username.value,
            title: formState.title.value,
            avatarUrl: formState.avatarUrl.value,
            description: formState.description.value
        })
    }

    const isSubmitButtonDisabled = !formState.username.isValid ||
        !formState.title.isValid ||
        !formState.avatarUrl.isValid ||
        !formState.description.isValid

    return (
        <form className="settings-form">
            {inputs.map((input) => (
                <Input 
                    key={input.field}
                    field={input.field}
                    label={input.label}
                    value={formState[input.field].value}
                    onChangeHandler={handleInputValueChange}
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState[input.field].showError}
                    validationMessage={input.validationMessage}
                    type={input.type}
                    textarea={input.textarea}
                />
            ))}
            <button onClick={handleFormSubmit} disabled={isSubmitButtonDisabled}>
                Update
            </button>
        </form>
    )
}



