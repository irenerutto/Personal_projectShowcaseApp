import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";

test("renders coffee house title", () => {
  render(<Home />);

  expect(
    screen.getByRole("heading", { name: /rene's coffee house/i })
  ).toBeInTheDocument();
});