import { useState } from 'react';
import { useContext } from 'react';

import { ListContext } from '../../context/password-list-context/password-list.context';
import {FormContext} from '../../context/password-form-context/password-from.context'

import FormInput from '../form-input/form-input.component';

import { Cancel } from '@material-ui/icons';

import './add-password-form.styles.scss';


const AddPasswordForm = () =>{

    const defaultFormFields = {
        website:'',
        username:'',
        password:'',
    };

    const [formFields,setFormFields] = useState(defaultFormFields)
    const {addItemToList} = useContext(ListContext);
    const {setIsFormOpen} = useContext(FormContext)

    const formOnChange = (event) => {
        const {name,value} = event.target;
        setFormFields({...formFields,[name]:value})
    };


    const handleSubmit = (event)=>{
        event.preventDefault();
        const newItem = formFields;
        
        addItemToList(newItem);
        resetFields();
        setIsFormOpen(false);
        
        
    };

    const  resetFields = () => {
        setFormFields(defaultFormFields);
    };


    return (
        <div className='form-container'>
            <div className='button-container'>
                <button className='close-button' onClick={()=>{
                    setIsFormOpen(false)
                }}>
                    <Cancel />
                </button>
            </div>
            <form>
                <FormInput label={"Website"} type="text" name="website" onChange={formOnChange} required/>
                <FormInput label={"Enter Username"} type="text" name="username" onChange={formOnChange} required/>
                <FormInput label={"Password"} type="password" name="password" onChange={formOnChange} required/>
            </form>
            <button className='submit-button' onClick={handleSubmit}>Submit</button>
            
        </div>
    );
};

export default AddPasswordForm;

