import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders header, footer and 3 sections", () => {
  render(<App />);
  // header
  const headerTextContent = screen.getByText(/About me/i);
  const languageButton = screen.getByTestId("LanguageSelectorButton");
  expect(headerTextContent).toBeInTheDocument();
  expect(languageButton).toBeInTheDocument();

  // hero
  const heroTextContent = screen.getByText(/Hi my name is/i);
  expect(heroTextContent).toBeInTheDocument();

  // about me

  // skills section

  // my projects

  // footer
});

test("render text content related to language selected", async () => {
  render(<App />);
  const languageButton = screen.getByTestId("LanguageSelectorButton");

  userEvent.click(languageButton);
  // header
  const headerTextContent = await screen.findByText(/Qui suis-je/i);
  expect(headerTextContent).toBeInTheDocument();

  // hero
  const heroTextContent = screen.getByText(/Bonjour, je suis/i);
  expect(heroTextContent).toBeInTheDocument();

  // about me

  // skills section

  // my projects

  // footer
});
