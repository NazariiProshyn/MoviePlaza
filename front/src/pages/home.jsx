import Slider from '../components/Slider/Slider';
import Films from '../components/Films/Films';
import c from '../components/Catalog/Catalog.module.css';

import {
    getfilms,
    getLocalStorageFilms,
    setLocalStorageFilms,
} from '../dataService/getfilms';
import useInterval from '../dataService/useInterval';

import { useEffect, useState } from 'react';

function Home() {
    // Зберігаємо інформацію про нові фільми у змінній filmsData
    const [filmsData, setFilmsData] = useState([]);

    // В залежності від наявності фільмів у локальному сховищі відправляємо запит на сервер
    const checkFilms = () => {
        const raw = getLocalStorageFilms();
        if (raw === null) {
            // Змінюємо нові фільми за допомогою setFilmsData коли приходить відповідь від сервера
            getfilms(setFilmsData);
        } else {
            setFilmsData(JSON.parse(raw));
        }
    };

    // Кожні 10 хв. відправляємо запит до сервера щодо нових фільмів
    useInterval(() => {
        checkFilms();
    }, 600000);

    // Перевіряємо наявність фільмів у локальному сховищі
    useEffect(() => {
        checkFilms();
    }, []);

    // Після зміни інформації о нових фільмах, додаємо їх до локального сховища
    useEffect(() => {
        setLocalStorageFilms(filmsData);
    }, [filmsData]);

    return (
        <div className="Home">
            <Slider />
            <div className={c.container}>
                {filmsData.map((film) => (
                    <Films key={film.filmname} work={film} />
                ))}
            </div>
        </div>
    );
}

export default Home;
