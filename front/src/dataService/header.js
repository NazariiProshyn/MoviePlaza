export const setLogin = (setIsLogin) => {
    fetch('https://movieplaza.herokuapp.com/', {
        withCredentials: true,
        credentials: 'include',
    })
        .then((res) => res.json())
        .then((res) => {
            setIsLogin(res.name);
        });
};

export const Logout = () => {
    fetch('https://movieplaza.herokuapp.com/logout', {
        withCredentials: true,
        credentials: 'include',
    });
};

const methods = { setLogin, Logout };
export default methods;
