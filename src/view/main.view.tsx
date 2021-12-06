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
  const [mapReady, setMapReady] = React.useState((window as any).MAPS_READY);

  React.useEffect(() => {
    document.addEventListener("MapsReady", () => {
      setMapReady(true);
    });
  }, []);

  React.useEffect(() => {
    if (mapReady) {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", `https://api.integration.covid19.health.nz/locations/v1/current-locations-of-interest?__=${Date.now()}`, true);
      xhr.responseType = "json";

      xhr.onload = async () => {
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
              },
              marker: new google.maps.Marker({
                position: new google.maps.LatLng(item.location.latitude, item.location.longitude),
              })
            })),
          );
        } else {
          setError(true);
        }
      };
      xhr.send();
    }
  }, [mapReady]);

  if (error) {
    return <ErrorPage />;
  }

  if (locations.length === 0 || !mapReady) {
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
