import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import SearchBar from "../components/SearchBar";

test("updates search input", () => {
  const setSearch = vi.fn();

  render(<SearchBar search="" setSearch={setSearch} />);

  const input = screen.getByPlaceholderText("Search coffee...");

  fireEvent.change(input, {
    target: { value: "vanilla" },
  });

  expect(setSearch).toHaveBeenCalledWith("vanilla");
});