export const setLogin = (setIsLogin) => {
    fetch('http://localhost:3001/', {
        withCredentials: true,
        credentials: 'include',
    })
        .then((res) => res.json())
        .then((res) => {
            setIsLogin(res.name);
        });
};

export const Logout = () => {
    fetch('http://localhost:3001/logout', {
        withCredentials: true,
        credentials: 'include',
    });
};

const methods = { setLogin, Logout };
export default methods;
