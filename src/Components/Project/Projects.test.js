import { render, screen } from "@testing-library/react";

import Project from "./";

test("renders french text", async () => {
  render(
    <Project
      name="name HRnet test"
      description="description HRnet test"
      favorite={true}
      sourceCodeUrl="Hrnet link to srouce code test"
      websiteUrl="HRnet link to website test"
      language={"FR"}
    />
  );

  const name = screen.getByText(/name HRnet test/i);
  const description = screen.getByText(/description HRnet test/i);
  const favorite = screen.getByText(/favoris/i);
  const sourceCodeLink = screen.getByText(/code source/i);
  const websiteLink = screen.getByText(/site web/i);

  expect(name).toBeInTheDocument();
  expect(description).toBeInTheDocument();
  expect(favorite).toBeInTheDocument();
  expect(sourceCodeLink).toBeInTheDocument();
  expect(websiteLink).toBeInTheDocument();
});
