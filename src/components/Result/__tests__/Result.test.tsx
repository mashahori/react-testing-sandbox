import { render, screen } from "@testing-library/react";
import { Result } from "../Result";

describe("component result", () => {
  test("renders component without data", () => {
    render(<Result />);
    const textElement = screen.getByText(/result:/i);
    expect(textElement).toBeInTheDocument();
  });

  test("renders component with data", () => {
    render(<Result data="mock data" />);
    const textElement = screen.getByText(/mock data/i);
    expect(textElement).toBeInTheDocument();
  });

  test("result snapshot", () => {
    const view = render(<Result data="mock data" />);
    expect(view).toMatchSnapshot();
  });
});
