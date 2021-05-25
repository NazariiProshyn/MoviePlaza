import f from './Films.module.css';
import { Link } from 'react-router-dom';

import { getImage } from '../../dataService/getimage';

function Films({ work, iswatchroom = false, watchnow }) {
    const HOSTNAME = 'https://movieplazaback.herokuapp.com';

    const watch = () => {
        watchnow(work.filmreference);
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
                        src={getImage(HOSTNAME, work.filmimage)}
                        alt={work.filmimage}
                    />
                </div>
                <div className={f['item-content']}>
                    <div className={f['item-title']}>
                        <p>{work.filmname}</p>
                    </div>
                    <div className={f['item-desc']}>
                        Рейтинг фільму:
                        <span className={f['catalog-rate']}> {work.rate}</span>
                        /5
                        {iswatchroom ? (
                            ''
                        ) : (
                            <p className={f['item-about']}>
                                {work.informationaboutfilm}
                            </p>
                        )}
                    </div>
                </div>
            </Link>
            {iswatchroom ? (
                <button
                    className={f['watch-btn']}
                    id={work.filmname}
                    onClick={watch}
                >
                    Дивитись зараз
                </button>
            ) : (
                ''
            )}
        </div>
    );
}
export default Films;
