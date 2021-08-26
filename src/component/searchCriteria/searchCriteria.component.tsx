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

    const [searchTermInput, setSearchTermInput] = useState<string>("");
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [orderBy, setOrderBy] = useState<OrderBy>(OrderBy.DateAdded);
    const [regions, setRegions] = useState<string[]>([]);

    const [eventDateFrom, setEventDateFrom] = useState<moment.Moment>(moment().startOf("month"));
    const [eventDateTo, setEventDateTo] = useState<moment.Moment>(moment());

    const [addedDateFrom, setAddedDateFrom] = useState<moment.Moment>(moment().startOf("month"));
    const [addedDateTo, setAddedDateTo] = useState<moment.Moment>(moment());

    React.useImperativeHandle(ref, () => ({
      reset: () => {
        setSearchTerm("");
        setSearchTermInput("");
        setOrderBy(OrderBy.DateAdded);
        setRegions([]);
        setEventDateFrom(moment().startOf("month"));
        setEventDateTo(moment());
        setAddedDateFrom(moment().startOf("month"));
        setAddedDateTo(moment());
      },
    }), []);

    React.useEffect(() => {
      onChange({
        searchTerm,
        orderBy,
        regions,
        eventDateFrom,
        eventDateTo,
        addedDateFrom,
        addedDateTo,
      });
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
        label: "Date added",
        value: OrderBy.DateAdded,
      },
      {
        label: "Date added (oldest first)",
        value: OrderBy.DateAddedReversed,
      },

      {
        label: "Event date",
        value: OrderBy.EventDate,
      },
      {
        label: "Event date (oldest first)",
        value: OrderBy.EventDateReversed,
      },
    ];

    const regionList = locations.map((region) => region.properties.City).filter((v, i, l) => l.indexOf(v) === i && v);
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

            <Select
              classNamePrefix="searchCriteria__list__item__select"
              className="searchCriteria__list__item__select"
              placeholder="Order by"
              name="order-by"
              inputId="searchCriteria__order-by"
              onChange={(v) => setOrderBy(v ? v.value : OrderBy.DateAdded as OrderBy)}
              options={orderByOptions}
              value={orderByOptions.find((o) => o.value === orderBy)} />
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
              }))} />
          </div>

          <div className="searchCriteria__list__item searchCriteria__list__item--event-date">
            <span className="searchCriteria__list__item__label">Time of exposure event</span>

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
                  onChange={(val: Date) => setEventDateFrom(moment(val))} />
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
                  onChange={(val: Date) => setEventDateTo(moment(val))} />
              </div>
            </div>
          </div>

          <div className="searchCriteria__list__item searchCriteria__list__item--added-date">
            <span className="searchCriteria__list__item__label">Time location of interest added to list</span>

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
                  onChange={(val: Date) => setAddedDateFrom(moment(val))} />
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
                  onChange={(val: Date) => setAddedDateTo(moment(val))} />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  });
