import { render } from "@testing-library/react";
import { Country } from "../Country";
import {
  DUMMY_COUNTRY_DATA,
  DUMMY_FLAG_DATA,
  DUMMY_SELECTED_DATA,
} from "./data_test";

test("Matches Country component snapshot with no Loading text display", () => {
  const tree = render(
    <Country
      selected={DUMMY_SELECTED_DATA}
      country={DUMMY_COUNTRY_DATA}
      countryFlag={DUMMY_FLAG_DATA}
    />
  );
  expect(tree).toMatchSnapshot();
});

test("Matches Country component snapshot with Loading text display", () => {
  const tree = render(
    <Country
      selected={null}
      country={DUMMY_COUNTRY_DATA}
      countryFlag={DUMMY_FLAG_DATA}
    />
  );
  expect(tree).toMatchSnapshot();
});
