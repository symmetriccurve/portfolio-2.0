import React from "react";

export default () => {
  return (
    <div className="p-cards__p-card">
      <div className="p-card__date">
        <span className="p-card__date-text">April 2020 to Present</span>
      </div>
      <div className="p-card__body">
        <div className="p-card__title">
          <span className="p-card__title-text">Microsoft, Washington</span>
        </div>
        <div className="p-card__title">
          <span className="p-card__title-text">
            Project -{" "}
            <span className="p-card__title-text--project-name">
              MyHub(Employee Mobile App/Website)
            </span>
          </span>
        </div>
        <div className="p-card__description">
          <span className="p-card__description-text">
            <ul>
              <li>
                Build a responsive UX component library to accommodate portrait,
                landscape, notch and non notch devices with accessibility
                features.
              </li>
              <li>
                Implement automation testing using the detox library on iOS and
                android cloud devices for E2E testing.
              </li>
              <li>
                Worked with android accessibility suite and xcode accessibility
                tools to debug issues related to navigation flow for
                accessibility users.
              </li>
              <li>
                Enhance the user experience by adding landscape mode to the
                existing screens and add safe areas for notch devices.
              </li>
              <li>
                Design a testing strategy and document the guidelines for
                testing functionality over the implementation details.
              </li>
              <li>
                Build accessibility wrapper around iOS horizontal scrollviews to
                navigate the scroll content in the order of stacking.
              </li>
              <li>
                Fix flaky unit test cases and add more robust environment
                independent test cases to overcome random failures.{" "}
              </li>
              <li>
                Implemented pre-commit hooks to lint, test and do preliminary
                checks before the remote push to catch early bugs and save time
                on code reviews.
              </li>
              <li>
                Implemented Telemetry to track user events/page loads/platform
                permissions for better feature road map and learn current
                feature usage behavior.
              </li>
              <li>
                Created Dynamic Text components that are capable of adapting to
                different accessibility font scaling factors on iOS and Android.
              </li>
            </ul>
          </span>
        </div>
        <div className="p-card__tech-stack">
          <div className="tech-stack__title">Technical Stack</div>
          <div className="tech-stack__body">
            Reactjs, React-Native, typescript, detox, Azure devops, ES6, babel,
            TSX, Redux, react testing library, styled components, nodejs, husky.
          </div>
        </div>
      </div>
    </div>
  );
};
