const validateInfo = (values) => {
    let errors = {}; 

    // Username
    if(!values.username.trim()){
        errors.username = "Username Required"; 
    }

    // Email
    if (!values.email.trim()){
        errors.email = "Email Required"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email Invalid"
    }

    // Password
    if (!values.password.trim()) {
        errors.password = "Password Required"
    } else if (values.password.length < 6) {
        errors.password = "Password not long enough"
    }

    // Password 2
    if (!values.password2.trim()) {
        errors.password2 = "Enter Confirm Password"
    } else if (values.password !== values.password2) {
        errors.password2 = "Passwords dont match"
    }

    return errors; 
}

export default validateInfo; 