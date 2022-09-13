import './password.card.styles.scss';

import VisibilityOnIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import CopyContentIcon from '@material-ui/icons/FileCopy';

import { useState } from 'react';

const PasswordCard = ({items})=>{

    const [isPasswordVisible,setPasswordVisibility] = useState(false)
    const {username,password} = items;

    const setPasswordVisibilityHandeler = () => {
        setPasswordVisibility(!isPasswordVisible)
    }



    return(
        <div className="password-card-container">
            <img alt='logo'/>
            <p>{username}</p>
            <p>{isPasswordVisible ? (password) : ('**********')}</p>
            <button onClick={setPasswordVisibilityHandeler}>
                {isPasswordVisible ? <VisibilityOffIcon /> : <VisibilityOnIcon />}
            </button>
            <button onClick={()=>{
                alert("Copy Content Button Clicked")
            }}>
                <CopyContentIcon />
            </button>

        </div> 
    );
};

export default PasswordCard;