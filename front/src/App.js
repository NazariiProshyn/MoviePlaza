import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import Home from './pages/home';
import Catalog from './pages/catalog';
import Room from './pages/room';
import User from './pages/user';
function App() {
    return (
        <div className="App">
            <ul className="header">
                <li>
                    <Link to="/">MoviePlaza</Link>
                </li>
                <li>
                    <Link to="/catalog">Фільми</Link>
                </li>
                <li>
                    <Link to="/room">Створити кімнату</Link>
                </li>
                <li>
                    <input type="search" placeholder="Пошук фільму"></input>
                    <input type="submit"></input>
                </li>
                <li>
                    <Link to="/user">
                        money
                        <img src="../images/user.png" alt="user"></img>
                    </Link>
                </li>
            </ul>
            <div className="content">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/catalog" component={Catalog} />
                    <Route path="/room" component={Room} />
                    <Route path="/user" component={User} />
                </Switch>
            </div>
        </div>
    );
}

export default App;
