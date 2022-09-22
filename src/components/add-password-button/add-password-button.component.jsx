import { useContext } from 'react';

import { FormContext } from '../../context/password-form-context/password-form.context';

import './add-password-button.styles.scss';


const AddPasswordButton = () => {
    const {setIsFormOpen,isFormOpen} = useContext(FormContext);

    return(
        <div className='password-button-container'>
            <button onClick={()=>{
                setIsFormOpen(!isFormOpen)
            }}>
                +
            </button>
        </div>
    );

};

export default AddPasswordButton;
