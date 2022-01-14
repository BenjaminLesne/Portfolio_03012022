import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

import data from "./utils/data";

test("renders header, footer, aside and 3 sections", async () => {
  render(<App />);
  // header

  // const headerTextContent = await screen.findAllByText(/Qui suis-je/i);
  // expect(headerTextContent[0]).toBeInTheDocument();

  // const languageButton = screen.getByTestId("LanguageSelectorButton");
  // expect(languageButton).toBeInTheDocument();

  // hero
  // const heroTextContent = screen.getByText(/Bonjour, je suis/i);
  // expect(heroTextContent).toBeInTheDocument();

  // aside
  // const asideNavigation = screen.getByTestId("SocialMedia");
  // expect(asideNavigation).toBeInTheDocument();

  // about me
  // const aboutMeSection = await screen.findAllByText(/Qui suis-je/i);
  // expect(aboutMeSection[1]).toBeInTheDocument();

  // const myPicture = screen.queryByAltText(
  //   /EN:website Author Benjamin Lesne \/ FR:créateur du site Benjamin Lesne/i
  // );
  // expect(myPicture).toBeInTheDocument();

  // skills section
  // const skillsSectionHeading = screen.getAllByText(/compétences/i);
  // expect(skillsSectionHeading.length).toBe(2);

  // const subSectionUsingNow = screen.getByText(/j'utilise/i);
  // expect(subSectionUsingNow).toBeInTheDocument();

  //   const skills = document.querySelector('#app')
  // const inputNode2 = getByLabelText(container, 'Username')

  // data.skillsSection.subSections.forEach((subSection) => {
  //   subSection.content.forEach((item) => {
  //     expect(
  //       screen.getByTestId("skills").getByText(item.name)
  //     ).toBeInTheDocument();
  //   });
  });

  // expect(subSectionUsingNow.findAllBy("")).toBeInTheDocument();

  // const subSectionLearning = screen.getByText(/j'apprends/i);
  // expect(subSectionLearning).toBeInTheDocument();

  // const subSectionWhatIspeak = screen.getByText(/je parle/i);
  // expect(subSectionWhatIspeak).toBeInTheDocument();

  // my projects
  // const myProjectsSection = screen.getByText(/mes projets/i);
  // expect(myProjectsSection).toBeInTheDocument();
  // footer
});

test("render text content related to language selected", async () => {
  render(<App />);
  const languageButton = screen.getByTestId("LanguageSelectorButton");

  userEvent.click(languageButton);
  // header
  const headerTextContent = screen.getByText(/About me/i);
  expect(headerTextContent).toBeInTheDocument();

  // hero
  const heroTextContent = screen.getByText(/Hi, my name is/i);
  expect(heroTextContent).toBeInTheDocument();

  // about me
  const aboutMeSection = await screen.findByText(/My story/i);
  expect(aboutMeSection).toBeInTheDocument();

  // skills section
  const skillsSection = await screen.findAllByText(/skills/i);
  expect(skillsSection[1]).toBeInTheDocument();

  // my projects

  // footer
});
