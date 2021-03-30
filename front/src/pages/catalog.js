import Filter from '../components/Filter/Filter';
import allfilm from '../staticStorage/allfilm';
import Films from '../components/Films/Films';
function Catalog() {
    return (
        <div className="Catalog">
            <Filter />
            <div className="newcatalog">
                <div className="container">
                    {allfilm.map((film) => (
                        <Films key={film.id} work={film} />
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Catalog;
