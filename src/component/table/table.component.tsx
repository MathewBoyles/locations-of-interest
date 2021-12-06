import * as React from "react";
import { ExposureType } from "../../interface/IApiResponse.interface";

import { ILocationOfInterest } from "../../interface/ILocationOfInterest.interface";
import { displayDate } from "../../service/displayDate.service";

import "./table.scss";

export interface ITableProps {
  locations: ILocationOfInterest[];
  searchTerm: string;
}

export const Table: React.FunctionComponent<ITableProps> = ({ locations, searchTerm }) => {
  const healthlinePhone = "0800611116";

  const displayWithSeachTerm = (input: string) => {
    const offsetOfText = input.toLowerCase().indexOf(searchTerm.toLowerCase());
    if (!searchTerm || offsetOfText === -1) return input;

    const textPriorToIndex = input.substring(0, offsetOfText);
    const matchedText = input.substring(offsetOfText, offsetOfText + searchTerm.length);
    const textAfterIndex = input.substring(offsetOfText + searchTerm.length);

    return <>{textPriorToIndex}<span className="table__highlight">{matchedText}</span>{textAfterIndex}</>;
  };

  return (
    <section className="table">
      <table className="table__table">
        <thead>
          <tr className="table__table__header">
            <th>Location</th>
            <th>Day &amp; Time</th>
            <th>What to Do</th>
            <th>Updated</th>
          </tr>
        </thead>

        <tbody>
          {
            locations.map((location) =>
              <tr key={location.properties.id} className={[
                "table__table__item",
                location.properties.Exposure === ExposureType.Close && "table__table__item--alert",
              ].filter((c) => !!c).join(" ")}>
                <td className="table__table__item__name">
                  {
                    location.properties.Exposure === ExposureType.Close &&
                    <>
                      <span className="table__table__item__name__alert">{"Close contact"}</span>
                      <br />
                    </>
                  }
                  <span className="table__table__item__name__event">{displayWithSeachTerm(location.properties.Event)}</span>
                  <br />
                  <span className="table__table__item__name__location">{displayWithSeachTerm(location.properties.Location)}</span>
                </td>
                <td>{displayDate(location.properties.Start)} – {displayDate(location.properties.End, "h:mm a")}</td>
                <td>
                  <span dangerouslySetInnerHTML={{
                  __html:
                    location.properties.Advice
                    .replace("Call Healthline", `<a href="tel:${healthlinePhone}" class="table__table__item__healthline">Call Healthline</a>`)
                    .replace("Self-isolate", `<strong>Self-isolate</strong>`)
                    .replace("Isolate", `<strong>Isolate</strong>`)
                    .replace("isolate", `<strong>isolate</strong>`),
                  }}></span>

                  {
                    location.properties.WebForm &&
                    <>
                      <br />
                      <a
                        className="table__table__item__contact"
                        href={`https://tracing.covid19.govt.nz/loi?eventId=${location.properties.id}&ref=locationsofinterest.co.nz`}
                        target="_blank">Notify Contact Tracers</a>
                    </>
                  }
                </td>
                <td>{displayDate(location.properties.Added, "DD MMM h:mm a")}</td>
              </tr>)
          }
        </tbody>
      </table>
    </section>
  );
}
