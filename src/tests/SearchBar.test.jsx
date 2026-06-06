import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../components/SearchBar";

test("updates search input", () => {
  const setSearch = jest.fn();

  render(<SearchBar search="" setSearch={setSearch} />);

  const input = screen.getByPlaceholderText("Search coffee...");

  fireEvent.change(input, {
    target: { value: "vanilla" },
  });

  expect(setSearch).toHaveBeenCalledWith("vanilla");
});