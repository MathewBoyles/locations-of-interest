import * as React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import "normalize.css";

import "../styles/main.scss";

import { ILocationOfInterest } from "../interface/ILocationOfInterest.interface";

import { SearchPage } from "../pages/search/search.page";
import { LoadingPage } from "../pages/loading/loading.page";
import { ErrorPage } from "../pages/error/error.page";

export const MainView = () => {
  const [locations, setLocations] = React.useState<ILocationOfInterest[]>([]);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `https://raw.githubusercontent.com/minhealthnz/nz-covid-data/main/locations-of-interest/august-2021/locations-of-interest.geojson?_=${Date.now()}`, true);
    xhr.responseType = "json";

    xhr.onload = () => {
      const status = xhr.status;
      if (status === 200) {
        setLocations(xhr.response.features);
      } else {
        setError(true);
      }
    };
    xhr.send();
  }, []);

  if (error) {
    return <ErrorPage />;
  }

  if (locations.length === 0) {
    return <LoadingPage />;
  }

  return (
    <>
      <HashRouter>
        <Switch>
          <Route path="/" exact render={() => <SearchPage locations={locations} />} />
          <Redirect to="/" />
        </Switch>
      </HashRouter>
    </>
  );
}
