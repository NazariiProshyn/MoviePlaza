export default function validateInfo(values) {
    let errors = {};

    if (!values.username.trim()) {
        errors.username = 'Username required';
    }

    if (!values.firstName) {
        errors.firstName = 'First name is required';
    }

    if (!values.secondName) {
        errors.secondName = 'Second name is required';
    }

    if (!values.bdate) {
        errors.bdate = 'Birthday is required';
    }

    if (!values.email) {
        errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }
    if (!values.password) {
        errors.password = 'Password is required';
    } else if (values.password.length < 6) {
        errors.password = 'Password needs to be 6 characters or more';
    }

    if (!values.password2) {
        errors.password2 = 'Confirm password is required';
    } else if (values.password2 !== values.password) {
        errors.password2 = 'Passwords do not match';
    }
    return errors;
}
