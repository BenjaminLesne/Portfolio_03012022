import { render, screen, within } from "@testing-library/react";

import data from "../../utils/data";
import Skills from "./";

test("renders french text", async () => {
  render(<Skills textContent={data.skills} language={"FR"} />);

  const skillsSectionHeading = screen.getByText(/compétences/i);
  expect(skillsSectionHeading).toBeInTheDocument();

  const subSectionUsingNow = screen.getByText(/j'utilise/i);
  expect(subSectionUsingNow).toBeInTheDocument();

  const subSectionLearning = screen.getByText(/j'apprends/i);
  expect(subSectionLearning).toBeInTheDocument();

  const subSectionWhatIspeak = screen.getByText(/je parle/i);
  expect(subSectionWhatIspeak).toBeInTheDocument();

  data.skills.subSections.forEach((subSection) => {
    subSection.content.forEach((item) => {
      const skillName = item.name["FR"] ? item.name["FR"] : item.name;
      const skillsSection = screen.getByTestId("skills");
      const skill = screen.getByText(skillName);
      expect(skill).toBeInTheDocument();
    });
  });
});

test("renders english text", async () => {
  render(<Skills textContent={data.skills} language={"EN"} />);

  const skillsSectionHeading = screen.getByText(/skills/i);
  expect(skillsSectionHeading).toBeInTheDocument();

  //subSections heading
  const subSectionUsingNow = screen.getByText(/using now/i);
  expect(subSectionUsingNow).toBeInTheDocument();

  const subSectionLearning = screen.getByText(/learning/i);
  expect(subSectionLearning).toBeInTheDocument();

  const subSectionWhatIspeak = screen.getByText(/what I speak/i);
  expect(subSectionWhatIspeak).toBeInTheDocument();

  //subSections items
  data.skills.subSections.forEach((subSection) => {
    subSection.content.forEach((item) => {
      const skillName = item.name["EN"] ? item.name["EN"] : item.name;
      const skill = screen.getByText(skillName);
      expect(skill).toBeInTheDocument();
    });
  });
});
