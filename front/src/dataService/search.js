export const search = (
    setFilms,
    searchValue,
    genre = null,
    year_from = null,
    year_to = null,
    len_from = null,
    len_to = null,
    price_from = null,
    price_to = null,
    rate_from = null,
    rate_to = null
) => {
    fetch(
        `http://localhost:3001/catalog?value=${searchValue}&genre=${genre}&yearfrom=${year_from}&yearto=${year_to}&lenfrom=${len_from}&lento=${len_to}&pricefrom=${price_from}&priceto=${price_to}&ratefrom=${rate_from}&rateto=${rate_to}`
    )
        .then((res) => {
            return res.json();
        })
        .then((res) => setFilms(res));
};

export const getfilms = (setFilms) => {
    fetch('http://localhost:3001/catalog')
        .then((res) => {
            return res.json();
        })
        .then((res) => setFilms(res));
};

const methods = { getfilms, search };
export default methods;
