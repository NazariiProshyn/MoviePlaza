export const handleSignup = (e, setIsSubmitting, setErrors, validate, values) => {
  

    if (window.location.pathname === '/login') {
        fetch('http://localhost:3001/login', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            withCredentials: true,
            credentials: 'include',
            body: JSON.stringify({
                username: e.target.username.value,
                password: e.target.password.value,
            }),
        })
            .then((response) => {
                return response.json();
            })
            .then(function (response, request) {
                console.log(response);
                if (response.success === 'false') {
                    alert('Неправильний логін або пароль');
                } else {
                    window.location.pathname =
                        '/profile/' + values.username;
                }
            });
    } else {
        if (values.username === '' || values.firstname === '' || values.lastname === '' || values.bdate === '' || values.password === '' || values.password2 === '') {
            alert('Всі поля повинні бути заповнені!');
        } else {
            fetch('http://localhost:3001/registration', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                withCredentials: true,
                credentials: 'include',
                body: JSON.stringify({
                    username: e.target.username.value,
                    firstname: e.target.firstname.value,
                    lastname: e.target.lastname.value,
                    dateofbirthday: e.target.bdate.value,
                    password: e.target.password.value,
                }),
            })
                .then((response) => {
                    return response.json();
                })
                .then(function (response) {
                    console.log(response);
                    if (response.success === 'false') {
                        alert('Користувач вже існує');
                    } else {
                        setIsSubmitting(true);
                        e.preventDefault();
                        setErrors(validate(values));
                        window.location.pathname =
                            '/profile/' + values.username;
                    }
                });
        }
        
    }

    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
};

const methods = { handleSignup};
export default methods;
