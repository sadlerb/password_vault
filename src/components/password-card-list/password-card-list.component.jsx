import PasswordCard from "../password-card/password.card.component";

import './password-card-list.styles.scss';

const PasswordCardList = ({list}) => {
    return (
        <div className="password-cards">
        {list.map(data=>{
            return(
                <PasswordCard items={data} key={data.key}/>
                )})};
    </div>
    )
};

export default PasswordCardList;