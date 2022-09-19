import { useState,useContext } from "react";

import { FormContext } from "../../context/password-form-context/password-from.context";
import { ListContext } from "../../context/password-list-context/password-list.context";

import { SearchBox } from "../searchbox/searchbox.component";
import PasswordCardList from "../password-card-list/password-card-list.component";
import AddPasswordButton from "../add-password-button/add-password-button.component";
import AddPasswordForm from "../add-password-form/add-password-form.component";

import './body.styles.scss';




const Body = () =>{

    const [searchField,setSearchField] = useState('');

    const {isFormOpen} = useContext(FormContext);
    const {listItems} = useContext(ListContext);

    const filteredPasswordsList = listItems.filter((item) =>{
        const searchTerm = item.username;
        return searchTerm.toLowerCase().includes(searchField);
    });


    const onSearchChangeHandeler = (event) =>{
        const value = event.target.value.toLowerCase();
        setSearchField(value);
        return searchField
    }


    

    return(
        <div>
            <div className={isFormOpen && 'dim'}>
                <SearchBox onChangeHandeler={onSearchChangeHandeler} placeholder={"Search Passwords"}/>
                <div className="password-cards">
                    <PasswordCardList list={filteredPasswordsList} />
                </div>
                <AddPasswordButton />
            </div>
            {isFormOpen && <AddPasswordForm />}
        </div>
    );
};

export default Body;