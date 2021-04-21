import { Component } from 'react';
import Account from '../components/Account/Account';

class User extends Component {
    render() {
        return <Account user={this.props.match.params.id} />;
    }
}
export default User;
