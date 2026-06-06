import { render, screen } from "@testing-library/react";
import ProductForm from "../components/ProductForm";

test("renders product form fields", () => {
  render(<ProductForm onSubmit={() => {}} />);

  expect(screen.getByPlaceholderText("Name")).toBeInTheDocument();

  expect(
    screen.getByPlaceholderText("Description")
  ).toBeInTheDocument();

  expect(
    screen.getByPlaceholderText("Origin")
  ).toBeInTheDocument();

  expect(
    screen.getByPlaceholderText("Price")
  ).toBeInTheDocument();
});