import React from 'react'
import useForm from './useForm'; 
import validate from './validateInfo'; 

const FormSignUp = () => {
    const { handleChange, values, handleSubmit, errors } = useForm(validate);

    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Get Started with us today!</h1>
                {/* USERNAME */}
                <div className="form-input">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" name='username' className="form-input" placeholder="Enter your username"
                         onChange={handleChange}/>
                    {errors.username && errors.username}
                </div>

                {/* EMAIL */}
                <div className="form-input">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="text" name='email' className="form-input" placeholder="Enter your email" 
                         onChange={handleChange}/>
                    {errors.email && errors.email}
                </div>

                {/* PASSWORD */}
                <div className="form-input">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="text" name='password' className="form-input" placeholder="Enter your password" 
                         onChange={handleChange}/>
                    {errors.password && errors.password}
                </div>

                {/* CONFIRM PASSWORD */}
                <div className="form-input">
                    <label htmlFor="password" className="form-label">Confirm Password</label>
                    <input type="text" name='password2' className="form-input" placeholder="Confirm Password" 
                         onChange={handleChange}/>
                    {errors.password2 && errors.password2}
                </div>

                <button className="form-input-btn" type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default FormSignUp
