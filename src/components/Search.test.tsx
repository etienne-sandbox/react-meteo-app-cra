import { Search } from "./Search";
import { render, screen } from "@testing-library/react";
import userEvents from "@testing-library/user-event";
import type { Place } from "./App";

test("Search then select place", async () => {
  const places: Place[] = [];

  const onToggle = jest.fn();

  render(<Search places={places} onToggle={onToggle} />);

  const inputElem = screen.getByPlaceholderText("Rechercher un lieu");
  userEvents.type(inputElem, "Lyon");

  userEvents.type(inputElem, "{enter}");

  await screen.findByAltText("Espagne flag");

  const lyonElem = screen.getByText("Lyon");
  userEvents.click(lyonElem);

  expect(onToggle).toHaveBeenCalledTimes(1);
});
