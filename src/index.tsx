import "reflect-metadata";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router } from "react-router";
import { histroyInit } from "./service/historyInit.service";
import { Phase3View } from "./view/phase3.view";

class Main {
  public init() {
    // moment.tz.setDefault("Pacific/Auckland");
    const browserHistory = histroyInit();

    ReactDOM.render(
      <Router history={browserHistory}>
        <Phase3View />
      </Router>,
      document.getElementById("appRoot")
    );
  }
}

new Main().init();
