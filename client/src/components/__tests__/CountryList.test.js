import { CountryList } from "../CountryList";
import { DUMMY_NAV, DUMMY_SELECTED_DATA } from "./data_test";
import { render, fireEvent } from "@testing-library/react";

let mock;
let mock2;

beforeEach(() => {
  mock = jest.fn(() => {});
  mock2 = jest.fn(() => {});
});

test("Matches CountryList component snapshot", () => {
  const tree = render(
    <CountryList
      nav={DUMMY_NAV}
      selected={DUMMY_SELECTED_DATA}
      onCountryChange={mock}
      classNames={mock2}
    />
  );
  expect(tree).toMatchSnapshot();
});

test("Ensures Onclick function is called", () => {
  const tree = render(
    <CountryList
      nav={DUMMY_NAV}
      selected={DUMMY_SELECTED_DATA}
      onCountryChange={mock}
      classNames={mock2}
    />
  );
  const btn = tree.getAllByTestId("testCountry0")[0];
  fireEvent.click(btn);
  expect(mock).toHaveBeenCalledTimes(1);
});

test("Ensures ClassNames getsCalled", () => {
  const tree = render(
    <CountryList
      nav={DUMMY_NAV}
      selected={DUMMY_SELECTED_DATA}
      onCountryChange={mock}
      classNames={mock2}
    />
  );
  expect(mock2).toHaveBeenCalled();
});
