import { useState } from "react";
import { Logo } from "./Logo";
import { Input } from "./Input";
import { 
         validateEmail,
         validatePassword,
         validateConfirmPassword,
         validateUsernameMessage,
         emailValidationMessage,
         validatePasswordMessage,
         passwordConfirmationMessage,
         validateUsername
 } from "../shared/validators";

 import { useRegister } from "../shared/hooks";

 export const Register = ({switchAuthHandler}) => {

    const {register, isRegister} = useRegister()

    const [formState, setFormState] = useState({
        email: {
            value: "",
            isValid: false,
            showError: false
        },

        username: {
            value: "",
            isValid: false,
            showError: false
        },
        password: {
            value: "",
            isValid: false,
            showError: false
        },
        passwordConfir: {
            value: "",
            isValid: false,
            showError: false
        }
    })

    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field] : {
                ...prevState[field],
                value
            }
        }))
    }

    const handleInputValidationOnBlur = (value, field) => {
        let isValid = false
        switch(field) {
            case 'email':
                isValid = validateEmail(value)
                break;
            case 'username':
                isValid = validateUsername(value)
                break
            case 'password' :
                isValid = validatePassword(value)
                break;
                case 'passwordConfir':
                    isValid = validateConfirmPassword(formState.password.value, value)
                    break;
        }

        setFormState((prevState) => ({
            ...prevState,
            [field] : {
                ...prevState[field],
                isValid,
                showError: !isValid
            }
        }))
    }


    const handleRegister = (event) => {
        event.preventDefault()
        register(formState.email.value, formState.username.value, formState.password.value)

    }

    const isSubmitButtonDisable = isRegister ||
    !formState.email.isValid ||
    !formState.username.isValid ||
    !formState.password.isValid ||
    !formState.passwordConfir.isValid;


    return (
        <div className="register-contaier">
            <Logo text={'Nba Cast'}/>
            <form className="auth-form">
            <Input
                field= 'email'
                label= 'Email'
                value={formState.email.value}
                onChangeHandler={handleInputValueChange}
                type= 'text'
                onBlurHandler={handleInputValidationOnBlur}
                showErrorMessage={formState.email.showError}
                validationMessage={emailValidationMessage}
            />
            <Input
                field= 'username'
                label= 'Username'
                value={formState.username.value}
                onChangeHandler={handleInputValueChange}
                type= 'text'
                onBlurHandler={handleInputValidationOnBlur}
                showErrorMessage={formState.username.showError}
                validationMessage={validateUsernameMessage}
            />
            <Input
                field= 'password'
                label= 'Password'
                value={formState.password.value}
                onChangeHandler={handleInputValueChange}
                type= 'password'
                onBlurHandler={handleInputValidationOnBlur}
                showErrorMessage={formState.password.showError}
                validationMessage={validatePasswordMessage}
            />
            <Input
                field= 'passwordConfir'
                label= 'Password Confirmation'
                value={formState.passwordConfir.value}
                onChangeHandler={handleInputValueChange}
                type= 'password'
                onBlurHandler={handleInputValidationOnBlur}
                showErrorMessage={formState.passwordConfir.showError}
                validationMessage={passwordConfirmationMessage}
            />
            <button onClick={handleRegister} disabled={isSubmitButtonDisable}>
                Register
            </button>
        </form>
        <span onClick={switchAuthHandler} className="auth-form-switch-label">
                Already have an account? Sign Up
            </span>
        </div>
    )
 }
