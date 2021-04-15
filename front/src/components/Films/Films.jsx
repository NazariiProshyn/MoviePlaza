import f from './Films.module.css';
import { Link } from 'react-router-dom';
//import axios from 'axios';

function Films({ work, iswatchroom=false, watchnow }) {
    const watch = () => {
        watchnow(work.title);

    };
    return (
        <div className={f['film-container']}>
            <Link
                to={`/catalog/${work.id}`}
                className={f['film-item']}
                id={work.id}
                data-item="film"
            >
                <div className={f['item-picture']}>
                    <img
                        className={f['item-picture__img']}
                        src={'http://localhost:3001/images/' + work.screenshot}
                        alt={work.title}
                    />
                </div>
                <div className={f['item-title']}>
                    <p>{work.title}</p>
                </div>
                <div className={f['item-desc']}>
                    <p className={f['catalog_rate']}>Рейтинг фільму:{work.rate}</p>
                    <p>{work.description}</p>
                </div>
            </Link>
            {iswatchroom ? (<button className={f['watch_btn']} onClick={watch}>Дивитись зараз</button>):''}
        </div>
    );
}
export default Films;
