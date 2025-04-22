import { useState } from "react";
import {
    validatePasswordMessage,
    validatePassword
} from "../../shared/validators"

import { useChangePassword } from "../../shared/hooks";
import {Input} from '../Input'

const inputs = [
    {
        field: 'password',
        label: 'Password',
        validationMessage: validatePasswordMessage,
        type: 'password',
    },
    {
        field: 'newPassword',
        label: 'New Password',
        validationMessage: validatePasswordMessage,
        type: 'password',
    }
]

export const PasswordSettings = () => {
    const [formState, setFormState] = useState({
        password: {
            isValid: false,
            showError: false,
            value: ''
        },
        newPassword: {
            isValid: false,
            showError: false,
            value: ''
        }
    })

    const {changePassword} = useChangePassword()

    const handleInputValueChange = (field, value) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value: value
            }
        }))
    }

    const handleInputValidationOnBlur = (field, isValid) => {
        let isValid = validatePassword(value)

        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid
            }
        }))
    }

    const isSubmitButtonDisabled = !formState.password.isValid || !formState.newPassword.isValid
    const handleFormSubmit = (e) => {
        e.preventDefault()
        changePassword(formState.password.value, formState.newPassword.value)
    }

    return (
        <form className="settings-form">
            {inputs.map((input) => (
                <Input
                    key={input.field}
                    field={input.field}
                    label={input.label}
                    type={input.type}
                    value={formState[input.field].value}
                    onChangeHandler={handleInputValueChange}
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState[input.field].showError}
                    validationMessage={input.validationMessage}
                    textArea={input.textArea}
                />
            ))}
            <button onClick={handleFormSubmit} disabled={isSubmitButtonDisabled}>
                Actualizar Contraseña
                </button>
        </form>
    )
}