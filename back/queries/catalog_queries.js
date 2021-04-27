const client = require('./client');
const isInvalid = (value) => {
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
    let values =
    [(isInvalid(year_from) ? 0 : year_from),
        (isInvalid(year_to) ? 9999 : year_to),
        (isInvalid(len_from) ? 0 : len_from),
        (isInvalid(len_to) ? 9999 : len_to),
        (isInvalid(price_from) ? 0 : price_from),
        (isInvalid(price_to) ? 9999 : price_to),
        (isInvalid(rate_from) ? 0 : rate_from),
        (isInvalid(rate_to) ? 10 : rate_to)];
    if (isInvalid(genre) == false && genre != 'Жанр') {
        const querystr =
            'SELECT * FROM SortFilms($1, $2, $3, $4, $5, $6, $7, $8, $9)';
        values.push((isInvalid(genre) ? '' : genre));

        client.query(querystr,values, (error, results) => {
            if (error) {
                throw error;
            }
            reply.send(results.rows);
        });
    } else {
        const querystr =
            'SELECT * FROM SortFilmsWithoutGenreWithNAME($1, $2, $3, $4, $5, $6, $7, $8, $9)';
        values.push('%'+filmname+'%');
        console.log(values);
        client.query(
            querystr, values,
            //`SortFilmsWithoutGenreWithNAME(${year_from}, ${year_to}, ${len_from}, ${len_to}, ${price_from}, ${price_to}, ${rate_from}, ${rate_to}, '%${filmname}%')`,
            (error, results) => {
                if (error) {
                    throw error;
                }
                console.log(results.row);
                reply.send(results.rows);

            }
        );
    }
};

module.exports = { getCatalog };
