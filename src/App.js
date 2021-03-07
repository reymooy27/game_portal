import './App.css';
import Content from './Component/Content';
import Header from './Component/Header';
import Navbar from './Component/Navbar';
import Sidebar from './Component/Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Leagues from './Component/Leagues'
import League from './Component/League';
import Series from './Component/Series';
import Tournament from './Component/Tournament';
import Team from './Component/Team';
import Match from './Component/Match';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/match/:game/:id'>
            <Sidebar/>
            <div className='main--menu'>
              <Navbar/>
              <Match/>
            </div>
          </Route>
          <Route path='/team/:game/:id'>
            <Sidebar/>
            <div className='main--menu'>
              <Navbar/>
              <Team/>
            </div>
          </Route>
          <Route path='/tournament/:game/:id'>
            <Sidebar/>
            <div className='main--menu'>
              <Navbar/>
              <Tournament/>
            </div>
          </Route>
          <Route path='/series/:game/:id'>
            <Sidebar/>
            <div className='main--menu'>
              <Navbar/>
              <Series/>
            </div>
          </Route>
          <Route path='/league/:game/:id'>
            <Sidebar/>
            <div className='main--menu'>
              <Navbar/>
              <League/>
            </div>
          </Route>
          <Route path='/leagues'>
            <Sidebar/>
            <div className='main--menu'>
              <Navbar/>
              <Leagues/>
            </div>
          </Route>
          <Route path='/'>
            <Sidebar/>
            <div className='main--menu'>
              <Navbar noBack={true}/>
              <Header/>
              <Content/>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
