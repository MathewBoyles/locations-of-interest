import * as React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import "normalize.css";

import "../styles/main.scss";

import { Phase3Page } from "../pages/phase3/phase3.page";

export const Phase3View = () => {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route path="/" exact render={() => <Phase3Page />} />
          <Redirect to="/" />
        </Switch>
      </HashRouter>
    </>
  );
}
