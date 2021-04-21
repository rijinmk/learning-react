import { useState } from 'react';

const useForm = (validate) => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        favoriteColor: '',
        date: ''
    }); 

    const [errors, setErrors] = useState({}); 

    const handleChange = (e) => {
        let {name, value} = e.target; 
        
        console.log({
            ...values,
            [name]: value
        });

        setValues({
            ...values, 
            [name]: value
        }); 
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        setErrors(validate(values));
        console.log(validate(values)); 
    }

    return {
        handleChange, 
        handleSubmit,
        values, 
        errors, 
    }
}

export default useForm; 