import * as React from "react";
import moment from "moment";

import { Page } from "../../component/page/page.component";
import { SearchShoutout } from "../../component/searchShoutout/searchShoutout.component";
import { ISearchCriteriaFunctions, SearchCriteria } from "../../component/searchCriteria/searchCriteria.component";
import { SideBySide } from "../../component/sideBySide/sideBySide.component";
import { Map } from "../../component/map/map.component";
import { Table } from "../../component/table/table.component";
import { ISearchCriteria, OrderBy } from "../../interface/ISearchCriteria.interface";
import { Controls } from "../../component/controls/controls.component";
import { GuidelinesCallout } from "../../component/guidelinesCallout/guidelinesCallout.component";
import { Footer } from "../../component/footer/footer.component";
import { ILocationOfInterest } from "../../interface/ILocationOfInterest.interface";
import { Message } from "../../component/message/message.component";
import { Event } from "../../component/event/event.component";
import { ExposureType } from "../../interface/IApiResponse.interface";

export interface ISearchPageProps {
  locations: ILocationOfInterest[];
}

export const SearchPage: React.FunctionComponent<ISearchPageProps> = ({ locations }) => {
  const [searchCriteria, setSearchCriteria] = React.useState<ISearchCriteria | null>();
  const [selectedBlock, setSelectedBlock] = React.useState(0);
  const [searchRef, setSearchRef] = React.useState<ISearchCriteriaFunctions | null>();

  const [selectedLocation, setSelectedLocation] = React.useState<ILocationOfInterest | null>(null);
  const [filteredLocations, setFilteredLocations] = React.useState(locations);

  const formatDate = (input: string): moment.Moment => {
    return moment(input);
  }

  const filterLocations = () => {
    if (!searchCriteria) {
      return locations;
    }

    const filteredBySearchTerm =
      locations.filter((location) =>
        searchCriteria.searchTerm.length === 0 ||
        location.properties.Event.toLowerCase().includes(searchCriteria.searchTerm.toLowerCase()) ||
        location.properties.Location.toLowerCase().includes(searchCriteria.searchTerm.toLowerCase()));

    const filteredByRegion =
      filteredBySearchTerm.filter((location) =>
        searchCriteria.regions.length === 0 ||
        searchCriteria.regions.includes(location.properties.City));

    const filteredByAddedDateFrom =
      filteredByRegion.filter((location) => {
        if (!searchCriteria.addedDateFrom) return true;
        if (!location.properties.Added) return true;

        const dateMoment = formatDate(location.properties.Added);

        return dateMoment.isSameOrAfter(searchCriteria.addedDateFrom, "D");
      });

    const filteredByAddedDateTo =
      filteredByAddedDateFrom.filter((location) => {
        if (!searchCriteria.addedDateFrom) return true;
        if (!location.properties.Added) return true;

        const dateMoment = formatDate(location.properties.Added);

        return dateMoment.isSameOrBefore(searchCriteria.addedDateTo, "D");
      });


    const filteredByEventDateFrom =
      filteredByAddedDateTo.filter((location) => {
        if (!searchCriteria.addedDateFrom) return true;
        if (!location.properties.Start) return true;

        const dateMoment = formatDate(location.properties.Start);

        return dateMoment.isSameOrAfter(searchCriteria.eventDateFrom, "D");
      });

    const filteredByEventDateTo =
      filteredByEventDateFrom.filter((location) => {
        if (!searchCriteria.addedDateFrom) return true;
        if (!location.properties.Added) return true;

        const dateMoment = formatDate(location.properties.Added);

        return dateMoment.isSameOrBefore(searchCriteria.eventDateTo, "D");
      });

    const orderedBy =
      filteredByEventDateTo
        .sort((locationA, locationB) => {
          if (
            searchCriteria.orderBy !== OrderBy.DateAdded &&
            searchCriteria.orderBy !== OrderBy.DateAddedReversed &&
            searchCriteria.orderBy !== OrderBy.ExposureClose &&
            searchCriteria.orderBy !== OrderBy.ExposureCasual) return 0;

          if (!locationA.properties.Added) return 0;

          const dateA = formatDate(locationA.properties.Added);
          const dateB = formatDate(locationB.properties.Added);

          if (dateA.isBefore(dateB)) return searchCriteria.orderBy === OrderBy.DateAdded ? -1 : 1;
          return searchCriteria.orderBy === OrderBy.DateAdded ? 1 : -1;
        })
        .sort((locationA) => {
          if (
            searchCriteria.orderBy !== OrderBy.DateAdded &&
            searchCriteria.orderBy !== OrderBy.DateAddedReversed) return 0;

          if (!locationA.properties.Added) return 1;
          return -1;
        })
      .sort((locationA, locationB) => {
          if (
            searchCriteria.orderBy !== OrderBy.EventDate &&
            searchCriteria.orderBy !== OrderBy.EventDateReversed) return 0;

          const dateA = formatDate(locationA.properties.Start);
          const dateB = formatDate(locationB.properties.Start);

          if (dateA.isBefore(dateB)) return searchCriteria.orderBy === OrderBy.EventDate ? 1 : -1;
          return searchCriteria.orderBy === OrderBy.EventDate ? -1 : 1;
        })
      .sort((locationA, locationB) => {
        if (
          searchCriteria.orderBy !== OrderBy.ExposureClose &&
          searchCriteria.orderBy !== OrderBy.ExposureCasual) return 0;

          const exposureA = locationA.properties.Exposure === ExposureType.Close ? 1 : 0;
          const exposureB = locationB.properties.Exposure === ExposureType.Close ? 1 : 0;

          if (exposureA > exposureB) return searchCriteria.orderBy === OrderBy.ExposureCasual ? 1 : -1;
          return searchCriteria.orderBy === OrderBy.ExposureCasual ? -1 : 1;
      });

      setFilteredLocations(orderedBy);
  };

  const resetFilters = React.useMemo(() => {
    return () => {
      if (!searchRef) return null;
      searchRef.reset();
    }
  }, [searchRef]);

  const viewDetails = (location: ILocationOfInterest) => {
    setSelectedBlock(3);
    setSelectedLocation(location);
  };

  React.useEffect(() => {
    filterLocations();
  }, [searchCriteria]);

  return (
    <Page>
      <SearchShoutout />

      <SearchCriteria locations={locations} onChange={setSearchCriteria} ref={setSearchRef} />

      <Controls
        onSearch={() => {
          filterLocations();

          const sideBySide = document.getElementById("sideBySide");
          if (sideBySide) {
            Array.from(document.querySelectorAll("html,body"))
            .forEach((el) => {
              el.scrollTo(0, sideBySide.offsetTop - 100);
            });
          }
        }}
        onReset={resetFilters}
        onSetelectedBlock={setSelectedBlock}
        selectedBlock={selectedBlock} />

      <SideBySide
        selectedBlock={selectedBlock}
        content1={<Map locations={filteredLocations} onMarkerClick={viewDetails} />}
        content2={
          filteredLocations.length === 0
            ? <Message>{"No locations were found based on your query."}</Message>
            : <Table locations={filteredLocations} searchTerm={searchCriteria && searchCriteria.searchTerm || ""} />
        }
        content3={
          selectedLocation
            ?
              <Event
                location={selectedLocation}
                onBackClick={() => {
                  setSelectedBlock(1);
                  setSelectedLocation(null);
                }} />
            : null
        }
      />

      <GuidelinesCallout />

      <Footer />
    </Page>
  );
}
