import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Provider } from "./context";

import Navbar from "./components/layout/Navbar.js";
import Index from "./components/layout/Index.js";
import Lyrics from "./components/tracks/Lyrics";

class App extends React.Component {
  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/lyrics/track/:id" component={Lyrics} />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
