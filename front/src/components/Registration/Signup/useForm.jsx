import { useState, useEffect } from 'react';

import { handleSignup } from '../../../dataService/useForm';

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
        handleSignup(e, setIsSubmitting, setErrors, validate, values);
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    }, [callback, errors, isSubmitting]);

    return { handleChange, handleSubmit, values, errors };
};

export default useForm;
