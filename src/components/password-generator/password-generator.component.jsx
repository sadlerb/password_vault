import FormInput from "../form-input/form-input.component"

const PasswordGenerator = ({passwordGen,...props}) =>{

    return (


        <div>
            <FormInput {...props}/>
            <button onClick={passwordGen}>GeneratePassword</button>
            {/* <input type='radio' name="password-generate"/>
            <input type='radio' name="passphrase-generate" /> */}
        </div>
    )
};

export default PasswordGenerator;