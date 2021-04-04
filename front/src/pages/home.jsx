import Slider from '../components/Slider/Slider';

import Films from '../components/Films/Films';
import all_films from '../staticStorage/all_films';
import c from '../components/Catalog/Catalog.module.css';

function Home() {
    return (
        <div className="Home">
            <Slider/>
            <div className={c.container}>
                {all_films.map((film) => (
                    <Films key={film.id} work={film} />
                ))}
            </div>
        </div>
    );
}
export default Home;
