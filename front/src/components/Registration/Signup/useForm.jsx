import { useState, useEffect } from 'react';
import axios from 'axios';
const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: '',
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        axios('http://localhost:3001/login',{
            method: 'post',
            withCredentials: true,
            data:{
                'username': e.target.username.value,
                'password': e.target.password.value
            }
        }).then(function (response){
            console.log(response);
        });
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    }, [callback, errors, isSubmitting]);

    return { handleChange, handleSubmit, values, errors };
};

export default useForm;
