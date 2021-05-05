const getUser = () => {
    return fetch('http://localhost:3001/', {
        withCredentials: true,
        credentials: 'include',
    }).then((res) => res.json());
};

export default getUser;
