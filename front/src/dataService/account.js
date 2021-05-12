export const getUserData = (setUser, username) => {
    fetch('http://localhost:3001/profile/' + username.user)
        .then((res) => res.json())
        .then((res) => {
            setUser(res);
        });
};

export const getLogin = (setIsLogin) => {
    fetch('http://localhost:3001/', {
        withCredentials: true,
        credentials: 'include',
    })
        .then((res) => res.json())
        .then((res) => {
            setIsLogin(res.name);
        });
};

export const setProfileInfo = (isLogin) => {
    fetch('http://localhost:3001/updateprofile', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstname: document.getElementById('name').value,
            secondname: document.getElementById('surname').value,
            bdate: document.getElementById('bdate').value,
            favourgenre: document.getElementById('filter-genre').value,
            login: isLogin,
        }),
    });
};

const methods = { getUserData, getLogin, setProfileInfo };
export default methods;
