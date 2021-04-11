import { Component } from 'react';
import Account from '../components/Account/Account';
import users from '../staticStorage/users';

class User extends Component {
    render() {
        const id = this.props.match.params.id;
        const user = users.find((user) => user.id === id);
        return <Account user={user} />;
    }
}
export default User;
