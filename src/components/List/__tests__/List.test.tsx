import { render, screen } from "@testing-library/react";
import { List } from "../List";

const mockData = ["1", "2", "3"];

describe("component list", () => {
  test("renders component without data", () => {
    render(<List />);
    const textElement = screen.queryByRole("list");
    expect(textElement).toBeNull();
  });

  test("renders component with data", () => {
    render(<List data={mockData} />);
    const textElement = screen.getByText(/1/i);
    expect(textElement).toBeInTheDocument();
  });

  test("list snapshot", () => {
    const view = render(<List />);
    expect(view).toMatchSnapshot();
  });
});
