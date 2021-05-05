export const getLogin = (setIsLogin, setUserId) => {
    fetch('http://localhost:3001/', {
        withCredentials: true,
        credentials: 'include',
    })
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            setIsLogin(res.name);
            setUserId(res.id);
        });
};

export const setFilmPage = (setFilm,setComments) => {
    fetch('http://localhost:3001' + window.location.pathname)
        .then((res) => res.json())
        .then((res) => {
            setFilm(res);
            setComments(res.comments);
        });
};

export const addNewComment = (comment, userId) => {
    fetch('http://localhost:3001/commentadd', {
        method: 'post',
        body: JSON.stringify({
            comments: comment,
            userid: userId,
            filmid: Number(window.location.pathname.split('/')[2]),
        }),
    });
};

const methods = {getLogin, setFilmPage, addNewComment};
export default methods;