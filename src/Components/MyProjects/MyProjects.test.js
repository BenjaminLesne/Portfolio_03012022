import { render, screen } from "@testing-library/react";

import data from "../../utils/data";
import MyProjects from "./";

test("renders french text", async () => {
  render(<MyProjects textContent={data.myProjects} language={"FR"} />);

  const myProjects = screen.getByText(/mes projets/i);
  expect(myProjects).toBeInTheDocument();
});
