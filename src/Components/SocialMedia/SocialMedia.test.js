import { render, screen } from "@testing-library/react";

import SocialMedia from "./";
import data from "../../utils/data";

test("renders french text", async () => {
  render(<SocialMedia language="FR" data={data.socialMedia} />);

  const asideNavigation = screen.getByTestId("SocialMedia");
  expect(asideNavigation).toBeInTheDocument();
});
