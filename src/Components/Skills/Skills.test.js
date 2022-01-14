import { render, screen } from "@testing-library/react";

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

  // working on it
  data.skills.subSections.forEach((subSection) => {
    subSection.content.forEach((item) => {
      expect(
        screen.getByTestId("skills").getByText(item.name)
      ).toBeInTheDocument();
    });
  });
});
