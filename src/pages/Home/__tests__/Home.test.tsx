import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Home } from "../Home";

describe("component home", () => {
  test("renders componenta", () => {
    render(<Home />);
    const textElement = screen.getByText(/home/i);
    expect(textElement).toBeInTheDocument();
  });

  test("renders typed data", () => {
    render(<Home />);

    userEvent.type(screen.getByRole("searchbox"), "sss");
    userEvent.click(screen.getByText(/поиск/i));

    const textElement = screen.queryByText(/sss/i);
    expect(textElement).toBeInTheDocument();
  });

  test("home snapshot", () => {
    const view = render(<Home />);
    expect(view).toMatchSnapshot();
  });
});
