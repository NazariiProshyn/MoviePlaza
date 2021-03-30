import Filter from '../Filter/Filter';
import Films from '../Films/Films';
import all_films from '../../staticStorage/all_films';
import c from './Catalog.module.css';

function Catalog() {
    return (
        <div className="Catalog">
            <Filter />
            <div className={c.container}>
                {all_films.map((film) => (
                    <Films key={film.id} work={film} />
                ))}
            </div>
        </div>
    );
}
export default Catalog;
