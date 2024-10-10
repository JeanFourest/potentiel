import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Toggle from "./Toggle";

describe("Toggle", () => {
  test("component should render with rounded class", () => {
    render(<Toggle rounded={true} />);
    const toggle = screen.getByRole("checkbox");
    // get span
    const span = toggle.nextElementSibling;
    expect(span).toHaveClass("round");
  });

  test("component should render with squared class", () => {
    render(<Toggle />);
    const toggle = screen.getByRole("checkbox");
    // get span
    const span = toggle.nextElementSibling;
    expect(span).not.toHaveClass("round");
  });

  test("component should render with isToggled prop", () => {
    render(<Toggle isToggled={true} />);
    const toggle = screen.getByRole("checkbox");
    expect(toggle).toBeChecked();
  });

  test("component should render with isToggled false prop", () => {
    render(<Toggle />);
    const toggle = screen.getByRole("checkbox");
    expect(toggle).not.toBeChecked();
  });

  test("component should call onToggle prop", () => {
    const handleToggle = jest.fn();
    render(<Toggle onToggle={handleToggle} />);
    const toggle = screen.getByRole("checkbox");
    fireEvent.click(toggle);
    expect(handleToggle).toHaveBeenCalled();
  });
});
