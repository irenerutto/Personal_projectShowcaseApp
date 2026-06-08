import { render, screen } from "@testing-library/react";
import ProductCard from "../components/ProductCard";

test("renders product information", () => {
  const product = {
    id: 1,
    name: "Vanilla Bean",
    description: "Medium Roast",
    origin: "Colombia",
    price: 10,
  };

  render(<ProductCard product={product} />);

  expect(screen.getByText("Vanilla Bean")).toBeInTheDocument();
  expect(screen.getByText("Medium Roast")).toBeInTheDocument();
  expect(screen.getByText(/origin:\s*colombia/i)).toBeInTheDocument();
  expect(screen.getByText(/\$10/)).toBeInTheDocument();
});