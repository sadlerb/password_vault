import './navbar.styles.scss'

import Logo from '../../assets/Logo.png'
import profile from '../../assets/profile.png'

export const NavBar =() =>{
    return(
        <div className="nav-contanier">
            <img alt="logo" className="logo" src={Logo}/>
            <div className="nav-buttons">
                <h3>Vault</h3>
                <h3>Password Generator</h3>
            </div>
            <img alt="profile button" className="profile-container" src={profile}/>
        </div>
    )
}