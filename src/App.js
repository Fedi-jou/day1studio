import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages";
import Signinpage from "./pages/signin";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Signinpage} />
      </Switch>
    </Router>
  );
}

export default App;
