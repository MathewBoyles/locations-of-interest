import * as React from "react";
import { useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";

import { ILocationOfInterest } from "../../interface/ILocationOfInterest.interface";
import { ISearchCriteria, OrderBy } from "../../interface/ISearchCriteria.interface";

import "./searchCriteria.scss";

export interface ISearchCriteriaFunctions {
  reset: () => void;
}

export interface ISearchCriteriaProps {
  locations: ILocationOfInterest[];
  onChange: (opts: ISearchCriteria) => void;
}

export const SearchCriteria =
  React.forwardRef<ISearchCriteriaFunctions, ISearchCriteriaProps>(({ locations, onChange }, ref) => {
    const dateFormat = "dddd DD MMMM";

    const searchUpdateTimeout = React.useRef<any>(null);

    function getSearchCriteriaFromCache<T> (
      key: string,
      fallback: T,
      formatter?: (value: string) => T): T {
      if (!("localStorage" in window)) return fallback;
      const localStorageValue = localStorage.getItem("search-criteria");

      if (localStorageValue) {
        try {
          const cacheItems = JSON.parse(localStorageValue);
          const cacheItem = cacheItems[key];
          if (!cacheItem) return fallback;
          if (!formatter) return cacheItem;
          return formatter(cacheItem);
        } catch (e) {
          return fallback;
        }
      }

      return fallback;
    };

    const [searchTermInput, setSearchTermInput] = useState<string>("");
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [orderBy, setOrderBy] = useState<OrderBy>(getSearchCriteriaFromCache("orderBy", OrderBy.DateAdded));
    const [regions, setRegions] = useState<string[]>(getSearchCriteriaFromCache("regions", []));

    const [eventDateFrom, setEventDateFrom] = useState<moment.Moment>(moment("01/08/2021", "DD/MM/YYYY").startOf("month"));
    const [eventDateTo, setEventDateTo] = useState<moment.Moment>(moment());

    const [addedDateFrom, setAddedDateFrom] = useState<moment.Moment>(moment("01/08/2021", "DD/MM/YYYY").startOf("month"));
    const [addedDateTo, setAddedDateTo] = useState<moment.Moment>(moment());

    React.useImperativeHandle(ref, () => ({
      reset: () => {
        setSearchTerm("");
        setSearchTermInput("");
        setOrderBy(OrderBy.DateAdded);
        setRegions([]);
        setEventDateFrom(moment("01/08/2021", "DD/MM/YYYY").startOf("month"));
        setEventDateTo(moment());
        setAddedDateFrom(moment("01/08/2021", "DD/MM/YYYY").startOf("month"));
        setAddedDateTo(moment());
      },
    }), []);

    React.useEffect(() => {
      const searchCriteria = {
        searchTerm,
        orderBy,
        regions,
        eventDateFrom,
        eventDateTo,
        addedDateFrom,
        addedDateTo,
      };

      onChange(searchCriteria);

      if ("localStorage" in window) {
        localStorage.setItem("search-criteria", JSON.stringify(searchCriteria));
      }
    }, [
      searchTerm,
      orderBy,
      regions,
      eventDateFrom,
      eventDateTo,
      addedDateFrom,
      addedDateTo,
    ]);

    React.useEffect(() => {
      if (searchUpdateTimeout.current) {
        clearTimeout(searchUpdateTimeout.current);
      }

      searchUpdateTimeout.current = setTimeout(() => {
        setSearchTerm(searchTermInput);
      }, 300);
    }, [searchTermInput]);

    const orderByOptions = [
      {
        label: "Date added (newest first)",
        value: OrderBy.DateAdded,
      },
      {
        label: "Date added (oldest first)",
        value: OrderBy.DateAddedReversed,
      },

      {
        label: "Event date (newest first)",
        value: OrderBy.EventDate,
      },
      {
        label: "Event date (oldest first)",
        value: OrderBy.EventDateReversed,
      },
    ];

    const regionList =
      locations
        .map((region) => region.properties.City).filter((v, i, l) => l.indexOf(v) === i && v)
        .sort((rA, rB) => {
          if (rA > rB) return 1;
          if (rA < rB) return -1;
          return 0;
        });

    const regionsList = regionList.map((region) => ({
      label: region,
      value: region,
    }));

    return (
      <section className="searchCriteria">
        <div className="searchCriteria__list">
          <div className="searchCriteria__list__item searchCriteria__list__item--search-term">
            <label
              htmlFor="searchCriteria__search-term"
              className="searchCriteria__list__item__label">Search term</label>

            <input
              type="text"
              name="search-term"
              className="searchCriteria__list__item__input"
              id="searchCriteria__search-term"
              value={searchTermInput}
              onChange={(ev) => setSearchTermInput(ev.target.value)} />
          </div>

          <div className="searchCriteria__list__item searchCriteria__list__item--order-by">
            <label
              htmlFor="searchCriteria__order-by"
              className="searchCriteria__list__item__label">Order by</label>

            <select
              className="searchCriteria__list__item__input"
              placeholder="Order by"
              name="order-by"
              id="searchCriteria__order-by"
              onChange={(v) => setOrderBy((v.target ? v.target.value : OrderBy.DateAdded) as OrderBy)}
              value={orderBy}>
                {
                  orderByOptions.map((o) =>
                    <option value={o.value}>{o.label}</option>
                  )
                }
              </select>
          </div>

          <div className="searchCriteria__list__item searchCriteria__list__item--regions">
            <label
              htmlFor="searchCriteria__regions"
              className="searchCriteria__list__item__label">Select regions</label>

            <Select
              classNamePrefix="searchCriteria__list__item__select"
              className="searchCriteria__list__item__select"
              placeholder="Select regions"
              name="regions"
              inputId="searchCriteria__regions"
              isMulti
              isClearable={false}
              onChange={(val) => setRegions(val ? val.map((v) => v.value) : [])}
              options={regionsList}
              value={regions.map((region) => ({
                label: region,
                value: region,
              }))}
              noOptionsMessage={() => "Region not found. Please check your spelling. The region select only includes those with reported locations of interest."} />
          </div>

          <div className="searchCriteria__list__item searchCriteria__list__item--event-date">
            <span className="searchCriteria__list__item__label" id="searchCriteria__event-date">Date of exposure event</span>

            <div className="searchCriteria__list__item__split">
              <div className="searchCriteria__list__item__split__item">
                <label
                  htmlFor="searchCriteria__event-date-from"
                  className="searchCriteria__list__item__label searchCriteria__list__item__label--muted">From</label>

                <DatePicker
                  name="event-date-from"
                  className="searchCriteria__list__item__input"
                  id="searchCriteria__event-date-from"
                  dateFormat={dateFormat}
                  value={eventDateFrom.format(dateFormat)}
                  onChange={(val: Date) => setEventDateFrom(moment(val))}
                  placeholderText="Date of exposure event – from" />
              </div>

              <div className="searchCriteria__list__item__split__item">
                <label
                  htmlFor="searchCriteria__event-date-to"
                  className="searchCriteria__list__item__label searchCriteria__list__item__label--muted">To</label>

                <DatePicker
                  name="event-date-to"
                  className="searchCriteria__list__item__input"
                  id="searchCriteria__event-date-to"
                  dateFormat={dateFormat}
                  value={eventDateTo.format(dateFormat)}
                  onChange={(val: Date) => setEventDateTo(moment(val))}
                  placeholderText="Date of exposure event – to" />
              </div>
            </div>
          </div>

          <div className="searchCriteria__list__item searchCriteria__list__item--added-date">
            <span className="searchCriteria__list__item__label">Date location of interest added to list</span>

            <div className="searchCriteria__list__item__split">
              <div className="searchCriteria__list__item__split__item">
                <label
                  htmlFor="searchCriteria__added-date-from"
                  className="searchCriteria__list__item__label searchCriteria__list__item__label--muted">From</label>

                <DatePicker
                  name="added-date-from"
                  className="searchCriteria__list__item__input"
                  id="searchCriteria__added-date-from"
                  dateFormat={dateFormat}
                  value={addedDateFrom.format(dateFormat)}
                  onChange={(val: Date) => setAddedDateFrom(moment(val))}
                  placeholderText="Date location of interest added to list – from" />
              </div>

              <div className="searchCriteria__list__item__split__item">
                <label
                  htmlFor="searchCriteria__added-date-to"
                  className="searchCriteria__list__item__label searchCriteria__list__item__label--muted">To</label>

                <DatePicker
                  name="added-date-to"
                  className="searchCriteria__list__item__input"
                  id="searchCriteria__added-date-to"
                  dateFormat={dateFormat}
                  value={addedDateTo.format(dateFormat)}
                  onChange={(val: Date) => setAddedDateTo(moment(val))}
                  placeholderText="Date location of interest added to list – to" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  });
