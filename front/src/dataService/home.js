export const getfilms = (setData) => {
    fetch('https://movieplaza.herokuapp.com/newfilms', {
        withCredentials: true,
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => setData(data));
};

export const setLocalStorageFilms = (films) => {
    return localStorage.setItem('films', JSON.stringify(films));
};

export const getLocalStorageFilms = () => {
    return localStorage.getItem('films');
};

const methods = { getfilms, setLocalStorageFilms, getLocalStorageFilms };
export default methods;
