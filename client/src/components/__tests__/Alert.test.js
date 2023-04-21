import { Alert } from "../Alert";
import { render } from "@testing-library/react";


test("Matches Alert Succesfull component", () => {
    const tree = render(<Alert value={true}/>);
    expect(tree.getByTestId('result').textContent).toEqual('Country data retrieved')
});

test("Matches Alert Unsuccesfull component", () => {
    const tree = render(<Alert value={false}/>);
    expect(tree.getByTestId('result').textContent).toEqual('Country data retrieval unsuccessful')
});



test("Matches Alert Succesfull snapshot", () => {
    const tree = render(<Alert value={true}/>);
    expect(tree).toMatchSnapshot();
});

test("Matches Alert Unsuccesfull snapshot", () => {
    const tree = render(<Alert value={false}/>);
    expect(tree).toMatchSnapshot();
});
  
  