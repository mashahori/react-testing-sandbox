import { render, screen } from "@testing-library/react";
import { Search } from "../Search";
import userEvent from "@testing-library/user-event";

const onChange = jest.fn();

describe("component search", () => {
  test("renders component", () => {
    render(<Search handleSubmit={onChange} />);
    const textElement = screen.getByText(/поиск/i);
    expect(textElement).toBeInTheDocument();
  });

  test("renders component without props", () => {
    render(<Search />);
    const textElement = screen.getByText(/поиск/i);
    expect(textElement).toBeInTheDocument();
  });

  test("result logic", () => {
    render(<Search handleSubmit={onChange} />);

    userEvent.click(screen.getByRole("button"));

    expect(onChange).toHaveBeenCalled();
  });

  test("result snapshot", () => {
    const view = render(<Search handleSubmit={onChange} />);
    expect(view).toMatchSnapshot();
  });
});
