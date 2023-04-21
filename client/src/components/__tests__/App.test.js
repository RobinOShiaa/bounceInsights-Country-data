import App from "../../App";
import { render } from "@testing-library/react";

test("Matches App component snapshot", () => {
  const tree = render(<App />);
  expect(tree).toMatchSnapshot();
});
