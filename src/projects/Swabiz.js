import React from "react";

export default () => {
  return (
    <div className="p-cards__p-card">
      <div className="p-card__date">
        <span className="p-card__date-text">Nov 2019 to Mar 2020</span>
      </div>
      <div className="p-card__body">
        <div className="p-card__title">
          <span className="p-card__title-text">Southwest, Texas</span>
        </div>
        <div className="p-card__title">
          <span className="p-card__title-text">
            Project -{" "}
            <span className="p-card__title-text--project-name">
              Swabiz (Reservation Change Flow)
            </span>
          </span>
        </div>
        <div className="p-card__description">
          <span className="p-card__description-text">
            <ul>
              <li>
                Extensively worked on company travel manager change flows and
                introduced multiple features to enhance user experience.
              </li>
              <li>
                Update the UI stack to accommodate latest ES6 features and
                configure build and testing tools to leverage ES6 features.
              </li>
              <li>
                Built a Chrome Plugin to automate workflows and ease the auto
                filling of information on the UI during testing to save
                developer time.
              </li>
              <li>
                Contributes into multiple private npm packages which are
                integrated into multiple SPA, managing the version updates and
                deployments.
              </li>
              <li>
                Majorly contributed in UI flows which involved partial or
                complete API failures.{" "}
              </li>
              <li>
                Contribute towards non functional requirements to boost UI
                response times and locate code blocks to improve and react
                components to optimize .
              </li>
              <li>
                Extensively involved in defect analysis and introduce code
                changes with minimum impact to the business and adding feature
                toggles.
              </li>
              <li>
                Collaborate with Product Owner to discuss possible impact areas
                and make strategic decisions and introduce code merges as
                required.{" "}
              </li>
              <li>
                Actively contributed to Sprint refinement, Sprint retrospective
                meetings to bring in valuable feedback and better ways to
                increase the team velocity and address developer pain points.
              </li>
              <li>
                Collaborate with the UX team(Design Team) to validate the
                implementation and propose possible solutions to accommodate the
                design requirements.
              </li>
              <li>
                Contribute into Data masking respecting the GDPR guidelines.
              </li>
              <li>
                Collaborate with cross functional teams on impact analysis and
                streamline code merges and version upgrades and downgrades.
              </li>
            </ul>
          </span>
        </div>
        <div className="p-card__tech-stack">
          <div className="tech-stack__title">Technical Stack</div>
          <div className="tech-stack__body">
            Reactjs, ES6, babel, JSX, Flux, Redux, gulp, react test utils, Chai,
            karma, Mocha, sass, Bootstrap, nexus, nodejs, husky, Run deck,
            jenkins, react-intl, oracle siebel.
          </div>
        </div>
      </div>
    </div>
  );
};
