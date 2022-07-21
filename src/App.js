import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, HashRouter, Route, Switch, useHistory} from 'react-router-dom';
import LeagueStats from './LeagueStats';
import Table from './Table';
import TeamStats from './TeamStats';
import PlayerStats from "./PlayerStats";
import PlayerStatPage from "./PlayerStatPage";
import SearchLanding from "./SearchLanding"

function App() {
  return (
    <HashRouter>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route exact path="/LeagueStats">
            <LeagueStats />
          </Route>
          <Route exact path="/PlayerStats">
            <PlayerStats />
          </Route>
          <Route exact path="/PlayerStatPage/:id">
            <PlayerStatPage/>
          </Route>
          <Route exact path="/SearchLanding/:first?/:last?">
            <SearchLanding/>
          </Route>
          <Route exact path="/TeamStats">
            <TeamStats />
          </Route>
        </Switch>
      </div>
    </div>
    </HashRouter>
    
  );
}

export default App;
