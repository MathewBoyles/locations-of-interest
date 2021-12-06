import * as React from "react";

import "./about.scss";

export const About: React.FunctionComponent = () => {
  return (
    <section className="about">
      <div className="about__intro">
        <p>During Level 4 lockdown, we built something that would be useful to ourselves and many others and plug a gap in our COVID-19 response. We found it difficult to find relevant locations of interest in the collection of hundreds. We could search, but as Wellingtonians we often got tired of sifting through "Mount Wellington" locations.</p>
        <p>Locations of Interest is a site aimed to help you find the important COVID exposure information you need to know, faster.</p>
        <p>Using the Ministry of Health's locations of interest data, this tool allows you to better search, filter and sort for what's relevant to you, all neatly tied into a side-by-side map and table view.</p>
        <p>The site automatically updates with new locations of interest data from an API maintained and updated by the Ministry of Health. The data source is expected to update hourly. Locations are removed after 14 days.</p>
        <p>This project is made by two Wellingtonians and is not affiliated with the Ministry of Health or Unite Against COVID - just a fun project to help our fellow Kiwis. 💛</p>
      </div>

      <h3 className="about__title about__title--first">The Team</h3>

      <div className="about__profile">
        <div className="about__profile__name">
          <img src="/assets/cool-matty.png" className="about__profile__name__image" />
          <h4
            className="about__profile__name__name">
            Mathew Boyles
            {" "}
            <i className="about__profile__name__name__role">– Developer</i>
          </h4>
        </div>

        <ul className="about__profile__links">
          <li className="about__profile__links__item">
            <a
              href="https://www.linkedin.com/in/mathewboyles/"
              target="_blank"
              rel="noopener"
              className="about__profile__links__item__link">LinkedIn</a>
          </li>
        </ul>
      </div>

      <div className="about__profile">
        <div className="about__profile__name">
          <img src="/assets/cool-chandler.png" className="about__profile__name__image" />
          <h4
            className="about__profile__name__name">
            Chandler Heath
            {" "}
            <i className="about__profile__name__name__role">– Designer</i>
          </h4>
        </div>

        <ul className="about__profile__links">
          <li className="about__profile__links__item">
            <a
              href="https://www.chandlerheath.nz/"
              target="_blank"
              rel="noopener"
              className="about__profile__links__item__link">Website</a>
          </li>

          <li className="about__profile__links__item">
            <a
              href="https://www.linkedin.com/in/chandler-heath/"
              target="_blank"
              rel="noopener"
              className="about__profile__links__item__link">LinkedIn</a>
          </li>
        </ul>
      </div>

      <div className="about__profile">
        <div className="about__profile__name">
          <span className="about__profile__name__image">🇳🇿</span>
          <h4
            className="about__profile__name__name">
            Team of 5 Million
          </h4>
        </div>
      </div>

      <div className="about__profile">
        <div className="about__profile__name">
          <img src="/assets/chris-hipkins.png" className="about__profile__name__image" />
          <h4
            className="about__profile__name__name">
            Chris Hipkins
            {" "}
            <i className="about__profile__name__name__role">– Legs Spreader</i>
          </h4>
        </div>

        <ul className="about__profile__links">
          <li className="about__profile__links__item">
            <a
              href="https://www.tiktok.com/@georgefmnz/video/7000296257285639426"
              target="_blank"
              rel="noopener"
              className="about__profile__links__item__link">Remix</a>
          </li>
        </ul>
      </div>

      <h3 className="about__title">Contact Us</h3>
      <ul className="about__profile__links">
        <li className="about__profile__links__item">
          <a
            href="mailto:hello@locationsofinterest.co.nz"
            target="_top"
            className="about__profile__links__item__link">
            hello@locationsofinterest.co.nz
          </a>
        </li>
      </ul>

      <div className="about__repo">
        <a
          href="https://github.com/MathewBoyles/locations-of-interest"
          target="_blank"
          rel="noopener"
          className="about__repo__link">View GitHub repo</a>
      </div>
    </section>
  )
}
