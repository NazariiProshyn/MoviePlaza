import filmimg from './../images/film.png';
import userImg from './../images/user.png';
const films = [
    {
        id: 'film-1',
        title: 'FilmName1',
        screenshot: filmimg,
        rate: 9.1,
        price: 5.7,
        comment: [
            { id: '1', nickname: 'user1', avatar: userImg, comment: '1' },
            { id: '2', nickname: 'user2', avatar: userImg, comment: '2' },
            {
                id: '3',
                nickname: 'user2',
                avatar: userImg,
                comment: 'fsdsddskdksk',
            },
            { id: '4', nickname: 'user1', avatar: userImg, comment: '46753' },
            { id: '5', nickname: 'user3', avatar: userImg, comment: 'spam' },
        ],
        description:
            'Description-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        link: '#',
    },
    {
        id: 'film-2',
        title: 'FilmName2',
        screenshot: filmimg,
        rate: 5.1,
        price: 3,
        comment: [
            { id: '1', nickname: 'user1', avatar: userImg, comment: '1' },
            { id: '2', nickname: 'user2', avatar: userImg, comment: '2' },
            {
                id: '3',
                nickname: 'user2',
                avatar: userImg,
                comment:
                    'fsdsddskdkskdsssssssssssssssssssssssssasasasasa asasasjasj ajsaj sjasjca cjs cajs js ajs jas js jadsjdjsdjsjdjsdsdsd sjds djs djs jd sjdjsd sdj asajsjasjajsjajsjajsjasasaj sj',
            },
            { id: '4', nickname: 'user1', avatar: userImg, comment: '46753' },
            { id: '5', nickname: 'user3', avatar: userImg, comment: 'spam' },
        ],
        description:
            'Description-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        link: '#',
    },
    {
        id: 'film-3',
        title: 'FilmName3',
        screenshot: filmimg,
        rate: 9.4,
        price: 6,
        comment: [
            { id: '1', nickname: 'user1', avatar: userImg, comment: '1' },
            { id: '2', nickname: 'user2', avatar: userImg, comment: '2' },
            {
                id: '3',
                nickname: 'user2',
                avatar: userImg,
                comment: 'fsdsddskdksk',
            },
            { id: '4', nickname: 'user1', avatar: userImg, comment: '46753' },
            { id: '5', nickname: 'user3', avatar: userImg, comment: 'spam' },
        ],
        description:
            'Description-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        link: '#',
    },
    {
        id: 'film-4',
        title: 'FilmName4',
        screenshot: filmimg,
        rate: 7.1,
        price: 19,
        comment: [
            { id: '1', nickname: 'user1', avatar: userImg, comment: '1' },
            { id: '2', nickname: 'user2', avatar: userImg, comment: '2' },
            {
                id: '3',
                nickname: 'user2',
                avatar: userImg,
                comment: 'fsdsddskdksk',
            },
            { id: '4', nickname: 'user1', avatar: userImg, comment: '46753' },
            { id: '5', nickname: 'user3', avatar: userImg, comment: 'spam' },
        ],
        description:
            'Description-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        link: '#',
    },
    {
        id: 'film-5',
        title: 'FilmName5',
        screenshot: filmimg,
        rate: 8.1,
        price: 16,
        comment: [
            { id: '1', nickname: 'user1', avatar: userImg, comment: '1' },
            { id: '2', nickname: 'user2', avatar: userImg, comment: '2' },
            {
                id: '3',
                nickname: 'user2',
                avatar: userImg,
                comment: 'fsdsddskdksk',
            },
            { id: '4', nickname: 'user1', avatar: userImg, comment: '46753' },
            { id: '5', nickname: 'user3', avatar: userImg, comment: 'spam' },
        ],
        description:
            'Description-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        link: '#',
    },

    {
        id: 'film-6',
        title: 'FilmName6',
        screenshot: filmimg,
        rate: 9.1,
        price: 13,
        comment: [
            { id: '1', nickname: 'user1', avatar: userImg, comment: '1' },
            { id: '2', nickname: 'user2', avatar: userImg, comment: '2' },
            {
                id: '3',
                nickname: 'user2',
                avatar: userImg,
                comment: 'fsdsddskdksk',
            },
            { id: '4', nickname: 'user1', avatar: userImg, comment: '46753' },
            { id: '5', nickname: 'user3', avatar: userImg, comment: 'spam' },
        ],
        description:
            'Description-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        link: '#',
    },
    {
        id: 'film-7',
        title: 'FilmName7',
        screenshot: filmimg,
        rate: 9.8,
        price: 10,
        comment: [
            { id: '1', nickname: 'user1', avatar: userImg, comment: '1' },
            { id: '2', nickname: 'user2', avatar: userImg, comment: '2' },
            {
                id: '3',
                nickname: 'user2',
                avatar: userImg,
                comment: 'fsdsddskdksk',
            },
            { id: '4', nickname: 'user1', avatar: userImg, comment: '46753' },
            { id: '5', nickname: 'user3', avatar: userImg, comment: 'spam' },
        ],
        description:
            'Description-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        link: '#',
    },
    {
        id: 'film-8',
        title: 'FilmName8',
        screenshot: filmimg,
        rate: 9.6,
        price: 5,
        comment: [
            { id: '1', nickname: 'user1', avatar: userImg, comment: '1' },
            { id: '2', nickname: 'user2', avatar: userImg, comment: '2' },
            {
                id: '3',
                nickname: 'user2',
                avatar: userImg,
                comment: 'fsdsddskdksk',
            },
            { id: '4', nickname: 'user1', avatar: userImg, comment: '46753' },
            { id: '5', nickname: 'user3', avatar: userImg, comment: 'spam' },
        ],
        description:
            'Description-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        link: '#',
    },
    {
        id: 'film-9',
        title: 'FilmName9',
        screenshot: filmimg,
        rate: 9.1,
        price: 0,
        comment: [
            { id: '1', nickname: 'user1', avatar: userImg, comment: '1' },
            { id: '2', nickname: 'user2', avatar: userImg, comment: '2' },
            {
                id: '3',
                nickname: 'user2',
                avatar: userImg,
                comment: 'fsdsddskdksk',
            },
            { id: '4', nickname: 'user1', avatar: userImg, comment: '46753' },
            { id: '5', nickname: 'user3', avatar: userImg, comment: 'spam' },
        ],
        description:
            'Description-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        link: '#',
    },
];

export default films;
