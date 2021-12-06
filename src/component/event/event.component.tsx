import * as React from "react";
import { ExposureType } from "../../interface/IApiResponse.interface";
import { ILocationOfInterest } from "../../interface/ILocationOfInterest.interface";
import { displayDate } from "../../service/displayDate.service";

import "./event.scss";

export interface IEventProps {
  location: ILocationOfInterest;
  onBackClick: () => void;
}

export const Event: React.FunctionComponent<IEventProps> = ({ location, onBackClick }) => {
  const closeContact = location.properties.Exposure === ExposureType.Close;

  return (
    <section className="event">
      <div className={["event__header", closeContact && "event__header--alert"].filter((c) => !!c).join(" ")}>
        <h2 className="event__header__title" title={location.properties.Event}>{location.properties.Event}</h2>
        {closeContact && <span className="event__header__alert">{"Close contact"}</span>}
      </div>

      <div className="event__info">
        <div className="event__info__item">
          <p className="event__info__item__title">Address:</p>
          <p className="event__info__item__info">{location.properties.Location}</p>
        </div>

        <div className="event__info__item">
          <p className="event__info__item__title">Day and time:</p>
          <p className="event__info__item__info">{displayDate(location.properties.Start)} – {displayDate(location.properties.End, "h:mm a")}</p>
        </div>

        <div className="event__info__item">
          <p className="event__info__item__title">Exposure type:</p>
          <p className="event__info__item__info">{location.properties.Exposure}</p>
        </div>

        <div className="event__info__item">
          <p className="event__info__item__title">Ministry of Health advice:</p>
          <p className="event__info__item__info">{location.properties.Advice}</p>
        </div>

        <div className="event__info__item">
          <p className="event__info__item__info event__info__item__info--muted">Updated at {displayDate(location.properties.Added)}</p>
        </div>
      </div>

      <div className="event__footer">
        {
          location.properties.WebForm &&
          <a
            className="event__footer__button event__footer__button--dark"
            href={`https://tracing.covid19.govt.nz/loi?eventId=${location.properties.id}&ref=locationsofinterest.co.nz`}
            target="_blank">Notify Contact Tracers</a>
        }

        <button type="button" className="event__footer__button" onClick={onBackClick}>Go back</button>
      </div>
    </section>
  );
}
