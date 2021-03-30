import Slider from '../components/Slider/Slider';
import new_films from '../staticStorage/new_films';
import Films from '../components/Films/Films';

function Home() {
    return (
        <div className="Home">
            <Slider></Slider>
            <div className="newcatalog">
                <div className="container">
                    {new_films.map((film) => (
                        <Films key={film.id} work={film} />
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Home;
