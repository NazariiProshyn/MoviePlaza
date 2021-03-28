import './App.css';

import { Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Catalog from './pages/catalog';
import Room from './pages/room';
import User from './pages/user';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Filmpage from './pages/filmpage';

function App() {
    return (
        <div className="App">
            <Header />
            <div className="content">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/catalog/:id" component={Filmpage} />
                    <Route path="/catalog" component={Catalog} />
                    <Route path="/room" component={Room} />
                    <Route path="/user" component={User} />
                </Switch>
            </div>
            <Footer />
        </div>
    );
}

export default App;
