import { PlaceItem } from "./PlaceItem";
import { render, screen } from "@testing-library/react";
import userEvents from "@testing-library/user-event";

test("Should render PlaceItem correctly", () => {
  render(<PlaceItem name="Lyon" onClick={() => {}} />);

  expect(screen.getByText("Lyon")).toBeInTheDocument();
  const imgElem = screen.queryByRole("img");
  expect(imgElem).toBeNull();
});

test("Should render PlaceItem with country", () => {
  const onClick = jest.fn();

  render(
    <PlaceItem
      name="Lyon"
      onClick={onClick}
      country="France"
      country_code="FR"
    />
  );

  expect(screen.getByText("France")).toBeInTheDocument();
  const imgElem = screen.getByAltText("France flag");
  expect(imgElem).toBeInTheDocument();
  userEvents.click(imgElem);
  expect(onClick).toHaveBeenCalled();
});
