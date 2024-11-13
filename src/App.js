import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Signin from "./components/Signin";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
        </Switch>
        {/* <Signin /> */}
      </div>
    </Router>
  );
}

export default App;
