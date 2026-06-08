import { render, screen } from "@testing-library/react";
import Shop from "../pages/Shop";

test("renders shop loading state", () => {
  render(<Shop />);

  expect(
    screen.getByText(/loading products/i)
  ).toBeInTheDocument();
});