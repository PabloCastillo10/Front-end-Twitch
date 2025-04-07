import logoImg from '../assets/NBA-Logo.png'


export const logo = ({text}) => {
    return (
        <div className='auth-form-logo-container'>
            <img src={logoImg} alt='Logo Nba Cast'/>
            <span>{text}</span>
            </div>
    )
}