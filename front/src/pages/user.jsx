import Account from '../components/Account/Account';

const User = () => {
    // Беремо ім'я користувача з посилання
    const user = window.location.pathname.slice(
        window.location.pathname.lastIndexOf('/') + 1
    );
    return <Account user={user} />;
};

export default User;
