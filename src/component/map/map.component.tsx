import * as React from "react";

import { ILocationOfInterest } from "../../interface/ILocationOfInterest.interface";
import { Message } from "../message/message.component";

import "./map.scss";

const DISABLE_MAP = window.location.hostname === "localhost";

export interface IMapProps {
  filteredLocations: ILocationOfInterest[];
  locations: ILocationOfInterest[];
}

export const Map: React.FunctionComponent<IMapProps> = ({ locations, filteredLocations }) => {
  if (DISABLE_MAP) {
    return <Message>Map temporarily disabled.</Message>;
  }

  const [ref, setRef] = React.useState<HTMLElement | null>(null);
  const [map, setMap] = React.useState<google.maps.Map>();

  const center = {
    lat: -41.42149185194225,
    lng: -187.52520963795772,
  };

  const renderMap = () => {
    const newMap = new google.maps.Map(document.getElementById("map") as HTMLElement, {
      center,
      zoom: 5,
      fullscreenControl: false,
    });

    setMap(newMap);
  }

  React.useEffect(() => {
    if (ref) {
      renderMap();
    }
  }, [ref]);

  React.useEffect(() => {
    if (map) {
      locations.map((location) => {
        const filteredItem = filteredLocations.find((f) => f.properties.id === location.properties.id);

        if (location.marker) {
          location.marker.setMap(filteredItem ? map : null);
        }
      });
    }
  }, [map, locations, filteredLocations])

  return (
    <section className="map" id="map" ref={setRef}></section>
  );
}
