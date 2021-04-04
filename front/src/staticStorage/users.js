import userImg from './../images/user.png';

const users = [
    {
        id: 'user-1',
        username: 'bogdan',
        about: 'cool dude bogdan',
        profile_picture: userImg,
        favourites: {
            genre: 'Комедия',
            producer: 'Эдгар Райт',
            actor: 'Брендан Глисон',
            film: 'Залечь на дно в Брюгге'
        }
    },
    {
        id: 'user-2',
        username: 'nazar',
        about: 'cool dude nazar',
        profile_picture: userImg,
        favourites: {
            genre: 'Трагедия',
            producer: 'Виталий Козловский',
            actor: 'Джейсон Стетхем',
            film: 'Хатико'
        }
    },
    {
        id: 'user-3',
        username: 'dima',
        about: 'cool dude dima',
        profile_picture: userImg,
        favourites: {
            genre: 'Боевик',
            producer: 'Кристофер Нолан',
            actor: 'Александр Курицын',
            film: 'Терминатор'
        }
    }
];

export default users;
