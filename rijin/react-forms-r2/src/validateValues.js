const validateValues = (values) => {
    let errors = {}; 

    let username = values.username.trim();
    if(!username){
        errors.username = "Please enter username"; 
    }else if(username.length < 3){
        errors.username = "Please enter valid username";
    }

    let email = values.email.trim();
    if (!email) {
        errors.email = "Please enter email";
    }

    let password = values.password.trim();
    if (!password) {
        errors.password = "Please enter password";
    } else if (password.length < 6) {
        errors.password = "Password should be 6 chars long";
    }

    let confirmPassword = values.confirmPassword.trim();
    if (!confirmPassword) {
        errors.confirmPassword = "Please enter confirmPassword";
    } else if (confirmPassword !== password) {
        errors.confirmPassword = "Passwords dont match";
    }

    return errors; 

}

export default validateValues; 