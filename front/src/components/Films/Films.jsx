import f from './Films.module.css';
import { Link } from 'react-router-dom';

function Films({ work }) {
    return (
        <Link to={`/catalog/${work.id}`} className={f['film-item']} id={work.id}>
            <div className={f['item-picture']}>
                <img className={f['item-picture__img']} src={work.screenshot} alt={work.title}/>
            </div>
            <div className={f['item-title']}>
                <p>{work.title}</p>
            </div>
            <div className={f['item-desc']}>
                <p className={f['catalog_rate']}>Рейтинг фільму:{work.rate}</p>
                <p>{work.description}</p>
            </div>
        </Link>
    );
}
export default Films;
