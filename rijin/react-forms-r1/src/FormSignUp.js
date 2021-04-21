import React from 'react'
import useForm from './useForm';
import validate from './validateValues'; 

const FormSignUp = () => {

    const { handleChange, handleSubmit, values, errors } = useForm(validate);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">username</label>
                <input type="text" name="username" onChange={handleChange} placeholder="username"/>
                {errors.username && errors.username}
                <br/>

                <label htmlFor="">email</label>
                <input type="text" name="email" onChange={handleChange} placeholder="email"/>
                {errors.email && errors.email}
                <br/>

                <label htmlFor="">password</label>
                <input type="text" name="password" onChange={handleChange} placeholder="password"/>
                {errors.password && errors.password}
                <br/>

                <label htmlFor="">confirm password</label>
                <input type="text" name="confirmPassword" onChange={handleChange} placeholder="confirm password"/>
                {errors.confirmPassword && errors.confirmPassword}
                <br/>

                <label htmlFor="">favorite color</label>
                <input type="color" name="favoriteColor" onChange={handleChange} placeholder="favorite color" />
                {errors.favoriteColor && errors.favoriteColor}
                <br />

                <label htmlFor="">date of birth</label>
                <input type="date" name="date" onChange={handleChange} placeholder="date" />
                {errors.date && errors.date}
                <br />

                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default FormSignUp
