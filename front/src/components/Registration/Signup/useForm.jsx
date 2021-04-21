import { useState, useEffect } from 'react';
import axios from 'axios';
const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        username: '',
        firstname: '',
        lastname: '',
        bdate: '',
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
        if (window.location.pathname === '/login'){
            axios('http://localhost:3001/login', {
                method: 'post',
                withCredentials: true,
                data: {
                    username: e.target.username.value,
                    password: e.target.password.value,
                },
            }).then(function (response) {
                console.log(response);
                window.location.pathname = '/user/'+values.username;
            });
        }
        else{
            
            axios('http://localhost:3001/registration', {
                method: 'post',
                withCredentials: true,
                data: {
                    username: e.target.username.value,
                    firstname: e.target.firstname.value,
                    lastname: e.target.lastname.value,
                    dateofbirthday: e.target.bdate.value,
                    password: e.target.password.value,
                },
            }).then(function (response) {
                console.log(response);
                if (response.data!==''){
                    setIsSubmitting(true);
                    e.preventDefault();
                    setErrors(validate(values));
                    window.location.pathname = '/user/'+values.username;
                }
                else{
                    alert('Користувач з таким імям вже існує');
                }  
            });
            
        }
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
