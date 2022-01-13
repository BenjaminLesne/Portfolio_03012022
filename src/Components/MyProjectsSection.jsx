import "../styles/MyProjectsSection.css";

import { v4 as uuidv4 } from "uuid";
import React from "react";

import Project from "./Project";

const MyProjectsSection = ({ language, textContent }) => {
  function filterManager(e) {
    console.log(e.target);
    document.getElementsByClassName("active")[0].classList.remove("active");
    e.target.classList.add("active");
  }
  return (
    <section className="MyProjectsSection defaultSection" id="my-projects">
      <h2 className="MyProjectsSection__heading section-heading">
        {textContent.heading[language]}
      </h2>
      <div className="MyProjectsSection__showcase">
        <ul className="MyProjectsSection__filters">
          {textContent.filters.map((filter) => {
            const filterValue = filter[language] ? filter[language] : filter;

            return (
              <li
                onClick={(e) => filterManager(e)}
                key={uuidv4()}
                className="MyProjectsSection__filter"
              >
                {filterValue}
              </li>
            );
          })}
        </ul>
        {textContent.projects.map((project) => {
          const description = project.description[language]
            ? project.description[language]
            : project.description;
          const name = project.name[language]
            ? project.name[language]
            : project.name;

          return (
            <React.Fragment key={uuidv4()}>
              <Project
                name={name}
                description={description}
                favorite={project.favorite}
                sourceCodeUrl={project.sourceCodeUrl}
                websiteUrl={project.websiteUrl}
                language={language}
              />
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default MyProjectsSection;
