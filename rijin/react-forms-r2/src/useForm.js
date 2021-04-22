import { useState } from 'react'; 

const useForm = (validate) => {
    const [errors, setErrors] = useState({});

    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        let {name, value} = e.target; 
        console.log({ ...values, [name]: value });
        setValues({...values, [name]: value}); 
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log(validate(values));
        setErrors(validate(values)); 
    }



    return {
        handleChange, 
        handleSubmit, 
        errors
    }
}

export default useForm; 