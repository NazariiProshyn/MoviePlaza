export const getLogin = (setIsLogin, setUserId) => {
    fetch('https://movieplaza.herokuapp.com/', {
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

export const setFilmPage = (setFilm) => {
    fetch('https://movieplaza.herokuapp.com' + window.location.pathname)
        .then((res) => res.json())
        .then((res) => {
            setFilm(res);
        });
};

export const setFilmComments = (setComments) => {
    fetch('https://movieplaza.herokuapp.com' + window.location.pathname)
        .then((res) => res.json())
        .then((res) => {
            setComments(res.comments);
        });
};

export const addNewComment = (comment, userId) => {
    fetch('https://movieplaza.herokuapp.com/commentadd', {
        method: 'post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            comments: comment,
            userid: userId,
            filmid: Number(window.location.pathname.split('/')[2]),
        }),
    });
};

const methods = { getLogin, setFilmPage, addNewComment, setFilmComments };
export default methods;
