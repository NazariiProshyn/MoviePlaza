import Filter from '../components/Filter/Filter';
import all_films from '../staticStorage/all_films';
import Films from '../components/Films/Films';

function Catalog() {
    return (
        <div className="Catalog">
            <Filter />
            <div className="newcatalog">
                <div className="container">
                    {all_films.map((film) => (
                        <Films key={film.id} work={film} />
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Catalog;
