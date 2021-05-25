const getUser = () => {
    return fetch('https://movieplaza.herokuapp.com/', {
        withCredentials: true,
        credentials: 'include',
    }).then((res) => res.json());
};

export default getUser;
