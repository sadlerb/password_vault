import { useState } from "react";

import { SearchBox } from "../searchbox/searchbox.component";
import PasswordCardList from "../password-card-list/password-card-list.component";

import './body.styles.scss'

const data = [
    {
        username:'google',
        password:'password',
        key:1
    },
    {
        username:'facebook',
        password:'password1',
        key:2
    },
    {
        username:'instagram',
        password:'password2',
        key:3
    },
    {
        username:'steam',
        password:'password2',
        key:4
    },    {
        username:'riotgames',
        password:'password3',
        key:5
    }
]




const Body = () =>{
    const [testData,setTestData] = useState(data);
    const [searchField,setSearchField] = useState('');

    const filteredPasswordsList = testData.filter((item) =>{
        const searchTerm = item.username;
        return searchTerm.toLowerCase().includes(searchField);
    });


    const onSearchChangeHandeler = (event) =>{
        const value = event.target.value.toLowerCase();
        setSearchField(value);
        return searchField
    }

    const addPassword = ()=>{
        setTestData([...testData,{key:7,username:"newUsername",password:"Password"}])
    }

    

    return(
        <div>
            <SearchBox onChangeHandeler={onSearchChangeHandeler} placeholder={"Search Passwords"}/>
            <div className="password-cards">
               <PasswordCardList list={filteredPasswordsList} />
            </div>
            <button onClick={addPassword}>add</button>
        </div>
    );
};

export default Body