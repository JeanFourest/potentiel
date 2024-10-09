import { fireEvent, render, screen } from "@testing-library/react";
import Checkbox from "./Checkbox";
import "@testing-library/jest-dom";

describe("Checkbox", () => {
  test("component should contain multiple checkboxes checked", () => {
    const values: any = [];

    const group = [
      {
        label: "Check All",
        value: "checkAll",
        checked: false,
        checkAll: true,
      },
      {
        label: "Option 1",
        value: "option1",
        checked: false,
        checkAll: false,
      },
      {
        label: "Option 2",
        value: "option2",
        checked: false,
        checkAll: false,
      },
    ];

    render(<Checkbox group={group} onChange={(e: any) => values.push(e)} />);
    const checkboxes = screen.getAllByRole("checkbox");
    expect(checkboxes).toHaveLength(3);

    fireEvent.click(checkboxes[0]);
    expect(values[0]).toEqual(["checkAll", "option1", "option2"]);
  });

  test("component should contain multiple checkboxes unchecked", () => {
    const values: any = [];

    const group = [
      {
        label: "Check All",
        value: "checkAll",
        checked: true,
        checkAll: true,
      },
      {
        label: "Option 1",
        value: "option1",
        checked: true,
        checkAll: false,
      },
      {
        label: "Option 2",
        value: "option2",
        checked: true,
        checkAll: false,
      },
    ];

    render(<Checkbox group={group} onChange={(e: any) => values.push(e)} />);
    const checkboxes = screen.getAllByRole("checkbox");
    expect(checkboxes).toHaveLength(3);

    fireEvent.click(checkboxes[0]);
    expect(values[0]).toEqual([]);
  });

  test("component should contain multiple checkboxes checked when checkAll is checked", () => {
    const values: any = [];

    const group = [
      {
        label: "Check All",
        value: "checkAll",
        checked: false,
        checkAll: true,
      },
      {
        label: "Option 1",
        value: "option1",
        checked: false,
        checkAll: false,
      },
      {
        label: "Option 2",
        value: "option2",
        checked: false,
        checkAll: false,
      },
    ];

    render(<Checkbox group={group} onChange={(e: any) => values.push(e)} />);
    const checkboxes = screen.getAllByRole("checkbox");
    expect(checkboxes).toHaveLength(3);

    fireEvent.click(checkboxes[0]);
    expect(values[0]).toEqual(["checkAll", "option1", "option2"]);
  });
});
