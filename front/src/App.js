import './App.css';

import { Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Catalog from './pages/catalog';
import Room from './pages/room';
import User from './pages/user';
import Header from './components/Header/Header';
function App() {
    return (
        <div className="App">
            <Header></Header>
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
