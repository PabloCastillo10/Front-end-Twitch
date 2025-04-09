import { useNavigate } from "react-router-dom";
import logo from '../../assets/nba.webp'
import { useUserDetails } from "../../shared/hooks/useUserDetails";
import './navbar.css'



const NavLogo = () => {
    return (
        <div className="nav-logo-container">
            <img
                className="nav-logo"
                
                src={logo}
                alt="Escudo Kinal"
            />
            
        </div>
    )
}


const NavButton = ({text, onClickHandler}) => {
    return (
        <span className="nav-button" onClick={onClickHandler}>
            {text}
        </span>
    )
}

export const Navbar = () => {
    const {isLogged, logout} = useUserDetails()

    const navigate = useNavigate()

    const handleNavigateToAuthPage = () => {
        navigate('/auth')
    }

    const handleNavigateToSettingPage = () => {
        navigate('/settings')
    }

    const handleNavigateChannelpage = () => {
        navigate('/channels')
    }

    const hanleLogout = () => {
        logout()
    }

    return (
            <div className="nav-container">
                <NavLogo />
                <div className="nav-buttons-container">
                    <NavButton text="Browse" onClickHandler={handleNavigateChannelpage} />
                    {!isLogged ? (
                        <NavButton text="Login" onClickHandler={handleNavigateToAuthPage}/>
                ) : (
                <div>
                    <NavButton text="My Account" onClickHandler={handleNavigateToSettingPage}/>
                    <NavButton text="Logout" onClickHandler={hanleLogout}/>
                </div>
        )}
            </div>
        </div>
    )
}