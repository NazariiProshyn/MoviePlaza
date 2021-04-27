const client = require('./client');

const isValid = (value) => {
    if (
        value != null &&
        value != undefined &&
        value != 'null' &&
        value != '' &&
        value != false
    ) {
        return false;
    } else {
        return true;
    }
};
const getCatalog = (
    request,
    reply,
    filmname = '',
    genre,
    year_from,
    year_to,
    len_from,
    len_to,
    price_from,
    price_to,
    rate_from,
    rate_to
) => {
    if (isValid(genre) == false && genre != 'Жанр') {
        const querystr =
            'SELECT * FROM SortFilms(' +
            (isValid(year_from) ? '' : `minyear=>${year_from}, `) +
            (isValid(year_to) ? '' : `maxyear=>${year_to}, `) +
            (isValid(len_from) ? '' : `minduration=>${len_from}, `) +
            (isValid(len_to) ? '' : `maxduration=>${len_to},`) +
            (isValid(price_from) ? '' : `minprice=>${price_from}, `) +
            (isValid(price_to) ? '' : `maxprice=>${price_to}, `) +
            (isValid(rate_from) ? '' : `minrate=>${rate_from}, `) +
            (isValid(rate_to) ? '' : `maxrate=>${rate_to}, `) +
            (isValid(genre) ? '' : `genre=>'${genre}'` + ') ');
        console.log(querystr);

        client.query(querystr, (error, results) => {
            if (error) {
                throw error;
            }
            reply.send(results.rows);
        });
    } else {
        const querystr =
            'SELECT * FROM SortFilmsWithoutGenreWithNAME(' +
            (isValid(year_from) ? '' : `minyear=>${year_from}, `) +
            (isValid(year_to) ? '' : `maxyear=>${year_to}, `) +
            (isValid(len_from) ? '' : `minduration=>${len_from}, `) +
            (isValid(len_to) ? '' : `maxduration=>${len_to},`) +
            (isValid(price_from) ? '' : `minprice=>${price_from}, `) +
            (isValid(price_to) ? '' : `maxprice=>${price_to}, `) +
            (isValid(rate_from) ? '' : `minrate=>${rate_from}, `) +
            (isValid(rate_to) ? '' : `maxrate=>${rate_to}, `) +
            `nameofilm=>'%${filmname}%'` +
            ')';
        console.log(querystr);
        client.query(
            querystr,
            //`SortFilmsWithoutGenreWithNAME(${year_from}, ${year_to}, ${len_from}, ${len_to}, ${price_from}, ${price_to}, ${rate_from}, ${rate_to}, '%${filmname}%')`,
            (error, results) => {
                if (error) {
                    throw error;
                }
                reply.send(results.rows);
            }
        );
    }
};

module.exports = { getCatalog };
