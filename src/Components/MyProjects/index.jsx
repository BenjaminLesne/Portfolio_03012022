import "./MyProjects.css";

import { v4 as uuidv4 } from "uuid";
import React from "react";

import Project from "../Project";

const MyProjects = ({ language, textContent }) => {
  function filterManager(e) {
    document.getElementsByClassName("active")[0]?.classList.remove("active");
    e.target.classList.add("active");
  }
  return (
    <section className="MyProjects" id="my-projects" data-testid="myProjects">
      <h2 className="MyProjects__heading section-heading">
        {textContent.heading[language]}
      </h2>
      <div className="MyProjects__showcase-wrapper">
        <div className="MyProjects__showcase">
          <ul className="MyProjects__filters">
            {textContent.filters.map((filter) => {
              const filterValue = filter[language] ? filter[language] : filter;

              return (
                <li
                  onClick={(e) => filterManager(e)}
                  key={uuidv4()}
                  className="MyProjects__filter"
                >
                  {filterValue}
                </li>
              );
            })}
          </ul>
          <ol className="MyProjects__projects">
            {textContent.projects.map((project) => {
              const description = project.description[language]
                ? project.description[language]
                : project.description;
              const name = project.name[language]
                ? project.name[language]
                : project.name;

              return (
                <li className="MyProjects__project" key={uuidv4()}>
                  <Project
                    name={name}
                    description={description}
                    favorite={project.favorite}
                    sourceCodeUrl={project.sourceCodeUrl}
                    websiteUrl={project.websiteUrl}
                    language={language}
                  />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
