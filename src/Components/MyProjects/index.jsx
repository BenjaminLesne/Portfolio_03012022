import "./MyProjects.css";

import { v4 as uuidv4 } from "uuid";
import React, { useEffect, useState } from "react";

import Project from "../Project";

const MyProjects = ({ language, textContent }) => {
  const allProjectsSorted = textContent.projects.sort(
    (a, b) => (a.rate - b.rate) * -1
  );
  const [projects, setProjects] = useState(allProjectsSorted);
  const [activeFilter, setActiveFilter] = useState();
  const [previousFilter, setPreviousFilter] = useState();

  function filterProjects(array, query) {
    const newArray = array.filter((project) => project.tags.includes(query));

    return newArray;
  }

  async function filterManager(e, projectsArray) {
    const query = e.target.innerText.toLowerCase();

    if (query === "tous" || query === "all") {
      setProjects(projectsArray);
    } else {
      setProjects(filterProjects(projectsArray, query));
    }
    setPreviousFilter(activeFilter);
    setActiveFilter(parseInt(e.target.dataset.index));
  }

  useEffect(() => {
    if (activeFilter) {
      const activeFilterElement =
        document.getElementsByClassName("MyProjects__filter")[activeFilter];

      const previousFilterElement =
        document.getElementsByClassName("MyProjects__filter")[previousFilter];

      // document.getElementsByClassName("active")[0].classList.remove("active");
      previousFilterElement.style.transition = "0s";
      previousFilterElement.classList.add("active");
      previousFilter.removeAttribute("style");
      previousFilterElement.classList.remove("active");

      activeFilterElement.classList.add("active");
    } else {
      document
        .getElementsByClassName("MyProjects__filter")[0]
        .classList.add("active");
    }
  }, [activeFilter]);

  return (
    <section className="MyProjects" id="my-projects" data-testid="myProjects">
      <h2 className="MyProjects__heading section-heading">
        {textContent.heading[language]}
      </h2>
      <div className="MyProjects__showcase-wrapper">
        <div className="MyProjects__showcase">
          <ul className="MyProjects__filters">
            {/* <li
              onClick={(e) => filterManager(e, allProjectsSorted)}
              data-index={index}
              key={uuidv4()}
              className={`MyProjects__filter active`}
            >
              {language === "EN" ? "all" : "tous"}
            </li> */}
            {textContent.filters.map((filter, index) => {
              const filterValue = filter[language] ? filter[language] : filter;

              return (
                <li
                  onClick={(e) => filterManager(e, allProjectsSorted)}
                  // data-index={index}
                  key={uuidv4()}
                  className={`MyProjects__filter`}
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
