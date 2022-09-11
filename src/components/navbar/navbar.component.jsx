import './navbar.styles.scss'

import { Outlet } from 'react-router-dom'

import Logo from '../../assets/Logo.png'
import profile from '../../assets/profile.png'

const NavBar =() =>{
    return(
        <div>

            <div className="nav-contanier">
                <div className='button-container'>
                    <img alt="logo" className="button" src={Logo}/>
                </div>
                <div className="nav-buttons">
                    <h3>Vault</h3>
                    <h3>Password Generator</h3>
                </div>
                <div className='button-container'>
                    <img alt="profile button" className="button" src={profile}/>
                </div>
            </div>
            <Outlet />
        </div>
    )
};

export default NavBar;