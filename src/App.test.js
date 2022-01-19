import { render, screen } from "@testing-library/react";

import App from "./App";
import userEvent from "@testing-library/user-event";

test("app lang attribute match default language, here fr", async () => {
  render(<App />);

  const AppElement = screen.getByTestId("App");
  expect(AppElement).toHaveAttribute("lang", "fr");
});

test("app lang attribute match language selected, here en", async () => {
  render(<App />);

  const languageButton = screen.getByTestId("LanguageSelectorButton");

  userEvent.click(languageButton);

  const AppElement = screen.getByTestId("App");
  expect(AppElement).toHaveAttribute("lang", "en");
});
