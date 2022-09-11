import './password.card.styles.scss'


const PasswordCard = ({items})=>{
    const {username,password} = items;
    return(
        <div className="password-card-container">
            <img alt='logo'/>
            <p>{username}</p>
            <p>{password}</p>
        </div> 
    );
}

export default PasswordCard