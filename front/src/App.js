import './App.css';


import { Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Catalog from './components/Catalog/Catalog';
import Room from './pages/room';
import User from './pages/user';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Filmpage from './pages/filmpage/filmpage';
import Registration from './components/Registration/Registration';
import Authorization from './components/Authorization/Authorization';

function App() {
    return (
        <div className="App">
            <Header />
            <div className="content">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/catalog/:id" component={Filmpage} />
                    <Route path="/catalog" component={Catalog} />
                    <Route path="/room/:id" component={Room} />
                    <Route path="/user/:id" component={User} />
                    <Route path="/registration" component={Registration} />
                    <Route path="/login" component={Authorization} />
                </Switch>
            </div>
            <Footer />
        </div>
    );
}

export default App;
