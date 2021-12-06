import * as React from "react";
import { ReactNode } from "react";

import "./searchShoutout.scss";

import { AppComponent } from "../appComponent/appComponent.component";

export class SearchShoutout extends AppComponent {
  public render(): ReactNode {
    return (
      <section className="searchShoutout">
        <h1 className="searchShoutout__title">{"Locations of Interest in Aotearoa New Zealand"}</h1>
        <p className="searchShoutout__text">{"Places and times where the New Zealand public may have been exposed to COVID-19."}</p>
        <p className="searchShoutout__text">{"If you’ve attended one of these locations during the relevant times please follow the directions for that location."}</p>
        <p className="searchShoutout__text">{"Low-risk locations of interest will not always be published for regions that are Red under the COVID-19 Protection Framework. High-risk locations of interest are published for all regions."}</p>
        <p className="searchShoutout__text">
          {"Data provided by the "}
          <a href="https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-health-advice-public/contact-tracing-covid-19/covid-19-contact-tracing-locations-interest" target="_blank" rel="noopener" className="searchShoutout__text__link">
            {"Ministry of Health"}
          </a>
          {". The data source is expected to update hourly. Locations are removed after 14 days."}</p>
      </section>
    );
  }
}
