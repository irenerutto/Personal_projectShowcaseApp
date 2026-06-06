import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";

test("renders coffee house title", () => {
  render(<Home />);

  expect(
    screen.getByText(/Rene's Coffee House/i)
  ).toBeInTheDocument();
});