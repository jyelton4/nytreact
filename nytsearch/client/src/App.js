import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import SavedArticles from "./pages/SavedArticles/SavedArticles";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/" component={Home} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved" component={SavedArticles} />
        {/* <Route exact path="/books/:id" component={Detail} /> */}
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </div>
  </Router>
);

export default App;
