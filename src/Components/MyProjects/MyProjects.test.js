import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import data from "../../utils/data";
import MyProjects from "./";

test("renders french text", async () => {
  render(<MyProjects textContent={data.myProjects} language={"FR"} />);

  const myProjects = screen.getByText(/mes projets/i);
  expect(myProjects).toBeInTheDocument();

  data.myProjects.filters.forEach((item) => {
    const filterName = item["FR"] ? item["FR"] : item;
    const filter = screen.getByText(filterName);
    expect(filter).toBeInTheDocument();
  });

  data.myProjects.projects.forEach((item) => {
    const projectName = item.name["FR"] ? item.name["FR"] : item.name;
    const project = screen.getByText(projectName);
    expect(project).toBeInTheDocument();
  });
});

test("renders projects related to filter clicked", async () => {
  render(<MyProjects textContent={data.myProjects} language={"FR"} />);

  data.myProjects.filters.forEach(async (item) => {
    const filterName = item["FR"] ? item["FR"] : item;
    const filter = screen.getByText(filterName);

    expect(filter).toBeInTheDocument();

    userEvent.click(filter);
    expect(screen.getByText(/sass/i)).toBeInTheDocument();

    const filteredProjects = data.myProjects.projects.filter((project) =>
      project.tags.includes(filterName)
    );

    //check if projects related to filter clicked are displayed
    filteredProjects.forEach((project) => {
      const projectName = screen.getByText(project.name);

      expect(projectName).toBeInTheDocument();
    });
  });

  data.myProjects.projects.forEach((item) => {
    const projectName = item.name["FR"] ? item.name["FR"] : item.name;
    const project = screen.getByText(projectName);
    expect(project).toBeInTheDocument();
  });
});

test("renders english version", async () => {
  render(<MyProjects textContent={data.myProjects} language={"EN"} />);

  //heading
  const myProjectsHeading = screen.getByText(/my projects/i);
  expect(myProjectsHeading).toBeInTheDocument();

  //filters
  data.myProjects.filters.forEach((item) => {
    const filterName = item["EN"] ? item["EN"] : item;
    const filter = screen.getByText(filterName);
    expect(filter).toBeInTheDocument();
  });

  //projects
  data.myProjects.projects.forEach((item) => {
    const projectName = item.name["EN"] ? item.name["EN"] : item.name;

    const project = screen.getByText(projectName);
    expect(project).toBeInTheDocument();
  });
});
