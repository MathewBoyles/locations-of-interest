import "reflect-metadata";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router } from "react-router";
import { histroyInit } from "./service/historyInit.service";
import { MainView } from "./view/main.view";
import moment from "moment";

class Main {
  public init() {
    moment.tz.setDefault("Pacific/Auckland");
    const browserHistory = histroyInit();

    ReactDOM.render(
      <Router history={browserHistory}>
        <MainView />
      </Router>,
      document.getElementById("appRoot")
    );
  }
}

new Main().init();
