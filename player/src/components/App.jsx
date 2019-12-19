import React from "react";
import Login from "./Login";
import Selection from "./Selection";
import Add from "./Add";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "../css/App.css";

function App() {
  return (
    <div className="App App-header">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path="/selection" component={Selection} />
          <Route path="/add" component={Add} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
