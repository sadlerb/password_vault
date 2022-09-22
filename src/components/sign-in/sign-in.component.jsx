import './sign-in.styles.scss';

import { useState } from 'react';

import FormInput from "../form-input/form-input.component";


function SignInForm (){
    const defualtFormFields = {
        username:'',
        password:'',

        
    };

    const [formFields,setFormFields] = useState(defualtFormFields);
    const {username,password} = formFields;





    async function handelSubmit(event) {
        event.preventDefault()
 
    };
    


    
    function handleChange(event) {
        const {name,value} = event.target;
        setFormFields({...formFields,[name]:value})
    };

    function resetFields(){
        setFormFields(defualtFormFields)
    };


    
    return(
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form>
                <FormInput label="Username" type="text" required onChange={handleChange} name='username' value={username}/>
                <FormInput required label="Password" type='password' onChange={handleChange} name='password' value={password}/>

            </form>
            <div className="buttons-container">
                <button type="submit" onClick={handelSubmit}>Sign In</button>

            </div>
        </div>
    )
};

export default SignInForm;