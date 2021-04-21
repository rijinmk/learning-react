const validateValues = (values) => {

    let errors = {}; 

    let username = values.username.trim();
    if (!username){
        errors.username = "Please Enter Valid Username"; 
    } else if (username.length < 3){
        errors.username = "Username has to be more than 3 letters";
    } else if (/[!@#$%^&*\(\)]/gi.test(username)){
        errors.username = "Username shouldn't have special chars"
    }

    let email = values.email.trim();
    console.log(/^\S+@\S+\.\S+$/gi.test(email));
    if (!email) {
        errors.email = "Email input is empty";
    } else if (!/^\S+@\S+\.\S+$/gi.test(email)) {
        errors.email = "Enter a valid email address";
    }

    let password = values.password.trim();
    if (!password) {
        errors.password = "Password input is empty";
    } else if (password.length < 6) {
        errors.password = "Password length is less than 6";
    }

    let confirmPassword = values.confirmPassword.trim();
    if (!confirmPassword) {
        errors.confirmPassword = "Confirm Password input is empty";
    } else if (confirmPassword !== password) {
        errors.confirmPassword = "Passwords don't match";
    }

    let favoriteColor = values.favoriteColor.trim();
    if (favoriteColor !== "#ff0000") {
        errors.favoriteColor = "Color is not red";
    }

    let date = values.date.trim();
    if (new Date() > new Date(date)) {
        errors.date = "Pick a date later than today";
    }

    return errors; 

}

export default validateValues; 