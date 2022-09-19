import './password.card.styles.scss';


import {Visibility,VisibilityOff,FileCopy,MoreHoriz} from '@material-ui/icons';

import { useState } from 'react';

const PasswordCard = ({items})=>{

    const [isPasswordVisible,setPasswordVisibility] = useState(false)
    const {username,password,website} = items;

    const setPasswordVisibilityHandeler = () => {
        setPasswordVisibility(!isPasswordVisible)
    }



    return(
        <div className="password-card-container">
            <div className='card-head-container'>
                <img alt='logo'/>
                <button>
                    <MoreHoriz />
                </button>
            </div>

            <p>{username}</p>
            <div className='password-block'>
            <button onClick={()=>{
                    navigator.clipboard.writeText(password);
                    alert("Password copied to clipboard");
                }}>
                    <FileCopy />
                </button>
                <p>{isPasswordVisible ? (password) : ('**********')}</p>
                <button onClick={setPasswordVisibilityHandeler}>
                    {isPasswordVisible ? <VisibilityOff /> : <Visibility />}
                </button>

            </div>

        </div> 
    );
};

export default PasswordCard;