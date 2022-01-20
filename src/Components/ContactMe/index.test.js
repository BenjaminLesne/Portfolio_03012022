import { render, screen } from "@testing-library/react";

import data from "../../utils/data";
import ContactMe from "./";

test("renders french text", async () => {
  render(<ContactMe textContent={data.contactMe} language="FR" />);

  const contactSectionHeading = screen.getByText(/me contacter/i);
  expect(contactSectionHeading).toBeInTheDocument();

  const myEmail = screen.getByText(/benjamin.lesne@outlook.fr/i);
  expect(myEmail).toBeInTheDocument();
});

test("renders english text", async () => {
  render(<ContactMe textContent={data.contactMe} language="EN" />);

  const contactSectionHeading = screen.getByText(/contact me/i);
  expect(contactSectionHeading).toBeInTheDocument();

  const myEmail = screen.getByText(/benjamin.lesne@outlook.fr/i);
  expect(myEmail).toBeInTheDocument();
});
