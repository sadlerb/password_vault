import { useState, useContext } from "react";

import  FormInput  from '../form-input/form-input.component'

import './sign-up.styles.scss'

const defualtFormFields = {
    username:'',
    email:'',
    password:'',
    confirm_password:''
}



function SignUpForm() {
    const [formFields,setFormFields] = useState(defualtFormFields);
    const {username,email,password,confirm_password} = formFields;


    function handleChange(event){
        const {name,value} = event.target;
        setFormFields({...formFields,[name]:value})
    }

    function resetFields(){
        setFormFields(defualtFormFields)
    }

    
    async function handleSubmit(event){
        event.preventDefault()
        if (password !== confirm_password){
            alert("passwords do not match");
            return;
        };



        }

    
    return (
        <div className="sign-up-container">
            <h2>Don't have and account?</h2>
            <span>Sign up email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Username" type="text" required onChange={handleChange} name='displayName' value={username}/>
                

                <FormInput required label="Email" type='email' onChange={handleChange} name='email' value={email}/>


                <FormInput required label="Password" type="password" onChange={handleChange} name='password' value={password}/>


                <FormInput required label="Confirm Password" type="password" onChange={handleChange} name='confirmPassword' value={confirm_password}/>

                <button type="submit">Sign Up</button>

            </form>
        </div>
    );


}
export default SignUpForm