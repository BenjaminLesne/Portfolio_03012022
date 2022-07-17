import "./MyProjects.css";

import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import { Transition } from "react-transition-group";

import Project from "../Project";
import handleFilterOnClick from "../../utils/functions/handleFilterOnClick";

const MyProjects = ({ language, textContent }) => {
  const allProjectsSorted = textContent.projects.sort(
    (a, b) => (a.rate - b.rate) * -1
  );
  const [projects, setProjects] = useState(allProjectsSorted);
  const [filterState, setFilterState] = useState({
    activeFilter: 0,
    previousFilter: undefined,
  });
  const [animationVariables, setAnimationVariables] = useState({
    previousHeight: undefined,
    currentHeight: undefined,
    shouldAnimate: false,
  });

  const animation = {
    defaultStyle: {
      transition: `${500}ms ease-in-out`,
      height: animationVariables.previousHeight,
    },
    transitionStyles: {
      entering: { height: animationVariables.previousHeight },
      entered: { height: animationVariables.currentHeight },
      exiting: {},
      exited: {},
    },
    shouldAnimate: animationVariables.shouldAnimate,
  };

  return (
    <Transition in={animation.shouldAnimate} timeout={0}>
      {(state) => (
        <section
          className="MyProjects"
          id="my-projects"
          data-testid="myProjects"
          style={{
            ...animation.defaultStyle,
            ...animation.transitionStyles[state],
          }}
        >
          <h2 className="MyProjects__heading section-heading">
            {textContent.heading[language]}
          </h2>
          <div className="MyProjects__showcase">
            <ul className="MyProjects__filters">
              {textContent.filters.map((filter, index) => {
                const filterValue = filter[language]
                  ? filter[language]
                  : filter;

                const animation =
                  filterState.previousFilter === index
                    ? "fadeOut"
                    : filterState.activeFilter === index
                    ? "active"
                    : null;
                return (
                  <li
                    onClick={(e) =>
                      handleFilterOnClick(
                        e,
                        allProjectsSorted,
                        setProjects,
                        filterState,
                        setFilterState,
                        setAnimationVariables,
                        animationVariables
                      )
                    }
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
                const id = uuidv4();
                return (
                  <li
                    className="MyProjects__project"
                    key={id}
                    id={id}
                    onClick={
                      () =>
                        document
                          .getElementById(id)
                          .firstChild.classList.toggle("show") // makes mobile devices trigger the hover style
                    }
                  >
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
      )}
    </Transition>
  );
};

export default MyProjects;
