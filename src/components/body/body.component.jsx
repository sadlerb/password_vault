import { useState } from "react";

import { SearchBox } from "../searchbox/searchbox.component";
import PasswordCard from "../password-card/password.card.component";

import './body.styles.scss'

const data = [
    {
        username:'testUsername',
        password:'password',
        key:1
    },
    {
        username:'testUsername1',
        password:'password1',
        key:2
    },
    {
        username:'testUsername2',
        password:'password2',
        key:3
    },
    {
        username:'testUsername2',
        password:'password2',
        key:4
    },    {
        username:'testUsername3',
        password:'password3',
        key:5
    }
]


const Body = () =>{
    const [testData,setTestData] = useState(data)


    const addPassword = ()=>{
        setTestData([...testData,{key:7,username:"newUsername",password:"Password"}])
    }
    return(
        <div>
            <SearchBox />
            <div className="password-cards">
                {testData.map(data=>{
                    return(
                        <PasswordCard items={data} key={data.key}/>
                        )})}
            </div>
            <button onClick={addPassword}>add</button>
        </div>
    );
};

export default Body