import { render, screen } from "@testing-library/react";

import SocialMedia from "./";

test("renders french text", async () => {
  render(<SocialMedia language="FR" />);

  const asideNavigation = screen.getByTestId("SocialMedia");
  expect(asideNavigation).toBeInTheDocument();
});
