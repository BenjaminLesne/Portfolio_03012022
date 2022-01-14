import { render, screen } from "@testing-library/react";

import data from "../../utils/data";
import Header from "./";

test("renders navigation and language button", async () => {
  render(
    <Header
      textContent={data.headerNavItems}
      language={"FR"}
      setLanguage={() => false}
    />
  );

  const headerTextContent = await screen.findAllByText(/Qui suis-je/i);
  expect(headerTextContent[0]).toBeInTheDocument();

  const languageButton = screen.getByTestId("LanguageSelectorButton");
  expect(languageButton).toBeInTheDocument();
});
