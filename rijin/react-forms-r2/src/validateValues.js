const validateValues = (values) => {
    let error = {}; 

    let username = values.username.trim(); 
    if (!username){
        error.username = "Please enter username"; 
    } else if(username.length < 3){
        error.username = "Username needs 3 chars atleast";
    }

    let email = values.email.trim();
    if (!email) {
        error.email = "Please enter email";
    } else if (email.length < 3) {
        error.email = "Pmail needs 3 chars atleast";
    }

    return error; 

}

export default validateValues;