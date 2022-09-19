import { useState } from "react";
import { createContext } from "react";


const INITIAL_STATE = [
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
];


export const ListContext = createContext({
    listItems:[],
    addItemToList: () => {}

});



export const ListProvider = ({ children }) => {
    const [listItems,setListItems] = useState(INITIAL_STATE);

    const addItemToList = (listItemToAdd) => {
        const newListItems = [...listItems,{...listItemToAdd}];
         setListItems(newListItems);
    }


    const value = {listItems,setListItems,addItemToList};





    return <ListContext.Provider value={value}>{children}</ListContext.Provider>
};