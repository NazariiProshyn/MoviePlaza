import Slider from '../components/Slider/Slider';
import newfilm from '../staticStorage/newfilm';
import Films from '../components/Films/Films';
function Home() {
    return (
        <div className="Home">
            <Slider></Slider>
            <div className="newcatalog">
                <div className="container">
                    {newfilm.map((work) => (
                        <Films key={work.id} work={work} />
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Home;
