import useForm from './useForm';
import validate from './validateValues'; 

const FormSignUp = () => {

    const { handleChange, handleSubmit, errors } = useForm(validate); 

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>username</label>
                <input type="text" name="username" onChange={handleChange} placeholder="username"/> <br/>
                {errors.username && errors.username} <br/>
                
                <label>email</label>
                <input type="text" name="email" onChange={handleChange} placeholder="email"/> <br/>
                {errors.email && errors.email} <br/>

                <label>password</label>
                <input type="text" name="password" onChange={handleChange} placeholder="password"/> <br/>
                {errors.password && errors.password} <br/>

                <label>confirmPassword</label>
                <input type="text" name="confirmPassword" onChange={handleChange} placeholder="confirmPassword"/> <br/>
                {errors.confirmPassword && errors.confirmPassword} <br/>

                <button types="submit">Sign Up</button>
            </form>
        </div>
    ); 
}

export default FormSignUp; 