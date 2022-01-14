import { render, screen } from "@testing-library/react";

import data from "../../utils/data";
import AboutMe from "./";

test("renders french text", async () => {
  render(<AboutMe textContent={data.aboutMeSection} language="FR" />);

  const aboutMeSection = await screen.findByText(/Qui suis-je/i);
  expect(aboutMeSection).toBeInTheDocument();

  const myPicture = screen.queryByAltText(
    /EN:website Author Benjamin Lesne \/ FR:créateur du site Benjamin Lesne/i
  );
  expect(myPicture).toBeInTheDocument();
});
