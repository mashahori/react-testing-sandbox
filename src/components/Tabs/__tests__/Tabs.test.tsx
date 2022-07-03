import { render, screen } from "@testing-library/react";
import { Tabs } from "../Tabs";
import userEvent from "@testing-library/user-event";

describe("component tabs", () => {
  test("renders component", () => {
    render(<Tabs />);
    const textElement = screen.getByText(/tab1/i);
    const tabContent = screen.getByText(/content1/i);
    expect(textElement).toBeInTheDocument();
    expect(tabContent).toBeInTheDocument();
  });

  test("result logic", () => {
    render(<Tabs />);

    userEvent.click(screen.getByText(/tab2/i));

    const tabContent = screen.getByText(/content2/i);
    expect(tabContent).toBeInTheDocument();
  });

  test("result snapshot", () => {
    const view = render(<Tabs />);
    expect(view).toMatchSnapshot();
  });
});
