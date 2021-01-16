import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import PlayerOverview from "./pages/PlayerOverview";
import TeamOverview from "./pages/TeamOverview";
import Team from "./pages/Team";
import Player from "./pages/Player";

import './App.css';
import Footer from "./components/organisms/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/players" component={PlayerOverview} />
          <Route exact path="/players/:playerId" component={Player} />
          <Route exact path="/teams" component={TeamOverview} />
          <Route exact path="/teams/:teamId" component={Team} />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
