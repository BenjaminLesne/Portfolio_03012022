import { render, screen } from "@testing-library/react";

import data from "../../utils/data";
import AboutMe from "./";

test("renders french text and my picture", async () => {
  render(<AboutMe textContent={data.aboutMe} language="FR" />);

  const aboutMeSection = screen.getByText(/Qui suis-je/i);
  expect(aboutMeSection).toBeInTheDocument();

  const myPicture = screen.queryByAltText(
    /EN:website Author Benjamin Lesne \/ FR:créateur du site Benjamin Lesne/i
  );
  expect(myPicture).toBeInTheDocument();
});

test("renders english text", async () => {
  render(<AboutMe textContent={data.aboutMe} language="EN" />);

  const aboutMeSection = screen.getByText(/my story/i);
  expect(aboutMeSection).toBeInTheDocument();
});
