export const getUserData = (setUser, username) => {
    fetch('https://movieplazaback.herokuapp.com/profile/' + username.user)
        .then((res) => res.json())
        .then((res) => {
            setUser(res);
        });
};

export const getLogin = (setIsLogin) => {
    fetch('https://movieplazaback.herokuapp.com/', {
        withCredentials: true,
        credentials: 'include',
    })
        .then((res) => res.json())
        .then((res) => {
            setIsLogin(res.name);
        });
};

export const setProfileInfo = (isLogin) => {
    fetch('https://movieplazaback.herokuapp.com/updateprofile', {
        method: 'post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
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
