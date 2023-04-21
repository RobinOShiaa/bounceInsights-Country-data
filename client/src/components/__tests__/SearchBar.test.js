import SearchBar from "../SearchBar";
import { fireEvent, render } from "@testing-library/react";

const mock = jest.fn(() => {});

test("Matches SearchBar component snapshot", () => {
  const tree = render(<SearchBar onChange={mock} />);
  expect(tree).toMatchSnapshot();
});

test("Ensures function is called for onChange", () => {
  const utils = render(<SearchBar onChange={mock} />);
  const input = utils.getByTestId("test-input");
  fireEvent.change(input, { target: { value: "23" } });
  expect(input.value).toBe("23");
});
