import useForm from "./useForm";
import validateValues from "./validateValues";

const FormSignUp = () => {

    let { handleChange, handleSubmit, errors } = useForm(validateValues);

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">username</label>
                <input type="text" onChange={handleChange} name="username"/>
                    {errors.username && errors.username}
                <br/>
                <label htmlFor="">email</label>
                <input type="text" onChange={handleChange} name="email"/>
                    {errors.email && errors.email}
                <br/>
                <label htmlFor="">password</label>
                <input type="text" onChange={handleChange} name="password"/>
                    {errors.password && errors.password}
                <br/>
                <label htmlFor="">confirmPassword</label>
                <input type="text" onChange={handleChange} name="confirmPassword"/>
                    {errors.confirmPassword && errors.confirmPassword}
                <br/>
                <button type="submit">sign up</button>
            </form>
        </div>        
    );
}


export default FormSignUp; 