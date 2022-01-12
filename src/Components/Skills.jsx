import "../styles/Skills.css";
import { v4 as uuidv4 } from "uuid";
import React from "react";

const Skills = ({ language, textContent }) => {
  return (
    <section className="Skills" id="skills">
      <h2 className="Skills__heading section-heading">
        {textContent[language].skills.heading}
      </h2>
      <div className="Skills__subSections">
        {textContent[language].skills.subSections.map((item) => {
          return (
            <section className="Skills__subSection" key={uuidv4()}>
              <h3 className="Skills__subHeading">{item.heading}:</h3>
              <ul className="Skills__items">
                {item.content.map((item) => {
                  return (
                    <li key={uuidv4()} className="Skills__item">
                      <div className="Skills__logo-wrapper">
                        <img
                          className="Skills__logo"
                          src={item.logo}
                          alt={item.name + " logo"}
                        />
                      </div>
                      <div className="Skills__name">{item.name}</div>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
