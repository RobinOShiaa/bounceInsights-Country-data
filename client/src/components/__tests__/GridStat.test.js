import { GridStat } from "../GridStat";
import { render } from "@testing-library/react";

test("Matches GridStat component snapshot", () => {
  const tree = render(<GridStat property="testProperty" value="testValue" />);
  expect(tree).toMatchSnapshot();
});
