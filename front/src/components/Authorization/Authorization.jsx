import React from 'react';
import validate from '../Registration/Signup/validateInfo';
import useForm from '../Registration/Signup/useForm';
import a from './Authorization.module.css';

const Authorization = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validate
    );

    return (
        <div className={a.Authorization}>
            <div className={a['form-container']}>
                <div className={a['form-content']}>
                    <form onSubmit={handleSubmit} className={a.form} noValidate>
                        <div className={a['form-inputs']}>
                            <label className={a['form-label']}>Username</label>
                            <input
                                className={a['form-input']}
                                type="text"
                                name="username"
                                placeholder="Enter your username"
                                value={values.username}
                                onChange={handleChange}
                            />
                            {errors.username && <p>{errors.username}</p>}
                        </div>
                        <div className={a['form-inputs']}>
                            <label className={a['form-label']}>Password</label>
                            <input
                                className={a['form-input']}
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                value={values.password}
                                onChange={handleChange}
                            />
                            {errors.password && <p>{errors.password}</p>}
                        </div>
                        <button className={a['form-input-btn']} type="submit">
                            Login
                        </button>
                        <span className={a['form-input-login']}>
                            Don't have an account? Register{' '}
                            <a href="/registration">here</a>
                        </span>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Authorization;
