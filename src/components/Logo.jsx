import logoImg from '../assets/nba.webp'


export const Logo = ({text}) => {
    return (
        <div className='auth-form-logo-container' >
            <img src={logoImg} alt='Logo Nba Cast'  width={100} style={{textAlign: 'center'}}/>
            <span >{text} </span>
            </div>
    )
}