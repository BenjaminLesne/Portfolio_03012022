import "../styles/Skills.css";
import { v4 as uuidv4 } from "uuid";
import React from "react";

const Skills = ({ language, textContent }) => {
  return (
    <section className="Skills" id="skills">
      <h2 className="Skills__heading section-heading">
        {textContent.heading[language]}
      </h2>
      <div className="Skills__subSections">
        {textContent.subSections.map((item) => {
          return (
            <section className="Skills__subSection" key={uuidv4()}>
              <h3 className="Skills__subHeading">{item.heading[language]}:</h3>
              <ul className="Skills__items">
                {item.content.map((item) => {
                  const itemValue = item.name[language]
                    ? item.name[language]
                    : item.name;

                  return (
                    <li key={uuidv4()} className="Skills__item">
                      <div className="Skills__logo-wrapper">
                        <img
                          className="Skills__logo"
                          src={item.logo}
                          alt={itemValue + " logo"}
                        />
                      </div>
                      <div className="Skills__name">{itemValue}</div>
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
