import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import data from "../../utils/data";
import Footer from "./";

test("renders french text and my picture", async () => {
  render(<Footer textContent={data.footer} language="FR" />);

  const backToTopText = screen.getByText(/retour en haut de page/i);
  expect(backToTopText).toBeInTheDocument();

  const copyrights = screen.getByText(/tous droits réservés/i);
  expect(copyrights).toBeInTheDocument();
});

test("renders english text", async () => {
  render(<Footer textContent={data.footer} language="EN" />);

  const backToTopText = screen.getByText(/back to top/i);
  expect(backToTopText).toBeInTheDocument();

  const copyrights = screen.getByText(/all rights reserved/i);
  expect(copyrights).toBeInTheDocument();
});

test("go back to top when we click on 'back to top' button", async () => {
  render(<Footer textContent={data.footer} language="EN" />);

  const backToTopText = screen.getByText(/back to top/i);
  expect(backToTopText).toBeInTheDocument();

  userEvent.click(backToTopText);

  const scrollTop = document.documentElement.scrollTop;
  expect(scrollTop).toBe(0);
});
