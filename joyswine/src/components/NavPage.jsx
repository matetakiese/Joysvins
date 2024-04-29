import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./page/Home";
import { Vins } from "./page/Vins";
import { Biere } from "./page/Biere";
import { Champagnes } from "./page/Champagne";
import { Contact } from "./page/Contact";
import { About } from "./page/About";

function NavPage() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/vin" component={Vins} />
          <Route path="/grands" component={Biere} />
          <Route path="/biere" component={Champagnes} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default NavPage;
