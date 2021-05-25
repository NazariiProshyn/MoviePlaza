const getUser = () => {
    return fetch('https://movieplazaback.herokuapp.com/', {
        withCredentials: true,
        credentials: 'include',
    }).then((res) => res.json());
};

export default getUser;
