import * as React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import "normalize.css";

import "../styles/main.scss";

import { ILocationOfInterest } from "../interface/ILocationOfInterest.interface";
import { IApiResponse } from "../interface/IApiResponse.interface";

import { SearchPage } from "../pages/search/search.page";
import { LoadingPage } from "../pages/loading/loading.page";
import { ErrorPage } from "../pages/error/error.page";

export const MainView = () => {
  const [locations, setLocations] = React.useState<ILocationOfInterest[]>([]);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.integration.covid19.health.nz/locations/v1/current-locations-of-interest?_=${Date.now()}`, true);
    xhr.responseType = "json";

    xhr.onload = () => {
      const status = xhr.status;
      const response = xhr.response as IApiResponse;

      if (status === 200) {
        setLocations(
          response.items.map((item) => ({
            type: "Location",
            properties: {
              id: item.eventId,
              Event: item.eventName,
              Exposure: item.exposureType,
              Location: item.location.address,
              City: item.location.city,
              WebForm: item.visibleInWebform,
              Start: item.startDateTime,
              End: item.endDateTime,
              Advice: item.publicAdvice,
              Added: item.updatedAt || item.publishedAt,
            },
            geometry: {
              type: "Location",
              coordinates: [
                item.location.longitude,
                item.location.latitude,
              ],
            }
          })),
        );
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
