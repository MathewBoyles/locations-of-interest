import * as React from "react";

import "./searchShoutout.scss";

export interface ISearchShoutoutProps {
  hideCopy?: boolean;
}

export const SearchShoutout: React.FunctionComponent<ISearchShoutoutProps> = ({ hideCopy }) => {
  return (
    <section className="searchShoutout">
      <h1 className="searchShoutout__title">{"Locations of Interest in Aotearoa New Zealand"}</h1>

      {
        !hideCopy &&
        <>
          <p className="searchShoutout__text">{"Places and times where the New Zealand public may have been exposed to COVID-19."}</p>
          <p className="searchShoutout__text">{"If you’ve attended one of these locations during the relevant times please follow the directions for that location."}</p>
          <p className="searchShoutout__text">
            {"Data provided by the "}
            <a href="https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-health-advice-public/contact-tracing-covid-19/covid-19-contact-tracing-locations-interest" target="_blank" rel="noopener" className="searchShoutout__text__link">
              {"Ministry of Health"}
            </a>
            {". The data source is expected to update hourly. Locations are removed after 14 days."}</p>
          <div className="searchShoutout__banner">
            <h2 className="searchShoutout__title">{"Locations of Interest During Omicron Phase 3"}</h2>
            <p className="searchShoutout__text">{"The Ministry of Health is not currently publishing new locations of interest. Case investigations are instead focused on high-risk locations and household contacts."}</p>
            <p className="searchShoutout__text">
            {"For more information, please visit the "}
            <a href="https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-health-advice-public/contact-tracing-covid-19/covid-19-contact-tracing-locations-interest" target="_blank" rel="noopener" className="searchShoutout__text__link">
              {"Ministry of Health"}
            </a>
            {" website."}</p>
          </div>
        </>
      }
    </section>
  );
}
