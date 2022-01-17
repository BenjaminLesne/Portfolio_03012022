import "./MyProjects.css";

import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";

import Project from "../Project";
import filterManager from "../../utils/functions/filterManager";

const MyProjects = ({ language, textContent }) => {
  const allProjectsSorted = textContent.projects.sort(
    (a, b) => (a.rate - b.rate) * -1
  );
  const [projects, setProjects] = useState(allProjectsSorted);
  const [filterState, setFilterState] = useState({
    activeFilter: 0,
    previousFilter: undefined,
  });

  function handleClick(e) {
    filterManager(
      e,
      allProjectsSorted,
      setProjects,
      filterState,
      setFilterState
    );
  }

  return (
    <section className="MyProjects" id="my-projects" data-testid="myProjects">
      <h2 className="MyProjects__heading section-heading">
        {textContent.heading[language]}
      </h2>
      <div className="MyProjects__showcase">
        <ul className="MyProjects__filters">
          {textContent.filters.map((filter, index) => {
            const filterValue = filter[language] ? filter[language] : filter;

            const animation =
              filterState.previousFilter === index
                ? "fadeOut"
                : filterState.activeFilter === index
                ? "active"
                : null;
            return (
              <li
                onClick={(e) => handleClick(e)}
                data-index={index}
                key={uuidv4()}
                className={`MyProjects__filter ${animation}`}
              >
                {filterValue}
              </li>
            );
          })}
        </ul>
        <ol className="MyProjects__projects">
          {projects.map((project) => {
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
                  image={project.image}
                  alt={project.alt[language]}
                  colorMask={project.colorMask}
                  language={language}
                />
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default MyProjects;
