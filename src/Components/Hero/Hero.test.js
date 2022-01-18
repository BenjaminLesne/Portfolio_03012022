import { render, screen } from "@testing-library/react";

import data from "../../utils/data";
import Hero from ".";

test("renders french text", async () => {
  render(<Hero textContent={data.hero} language={"FR"} />);

  const heroTextContent = screen.getByText(/Bonjour, je suis/i);
  expect(heroTextContent).toBeInTheDocument();
});

test("renders english text", async () => {
  render(<Hero textContent={data.hero} language={"EN"} />);

  const heroTextContent = screen.getByText(/Hi, my name is/i);
  expect(heroTextContent).toBeInTheDocument();
});