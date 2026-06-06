import { render, screen } from "@testing-library/react";
import Shop from "../pages/Shop";

test("renders shop page", () => {
  render(<Shop />);
  expect(screen.getByText(/shop/i)).toBeInTheDocument();
});