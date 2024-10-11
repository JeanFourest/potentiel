import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Tableau, { TableauColumn } from "./Tableau";

interface TestData {
  name: string;
  age: number;
}

const data: TestData[] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 40 },
  { name: "Eve", age: 45 },
];

const columns: TableauColumn<TestData>[] = [
  { header: "Name", accessor: "name" },
  { header: "Age", accessor: "age" },
];

describe("Tableau Component", () => {
  test("renders table headers correctly", () => {
    render(<Tableau data={data} columns={columns} />);

    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Age")).toBeInTheDocument();
  });

  test("renders table rows correctly", () => {
    render(<Tableau data={data} columns={columns} pagination={false} />);

    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("Bob")).toBeInTheDocument();
    expect(screen.getByText("Charlie")).toBeInTheDocument();
    expect(screen.getByText("David")).toBeInTheDocument();
    expect(screen.getByText("Eve")).toBeInTheDocument();
  });

  test("handles row selection", () => {
    render(<Tableau data={data} columns={columns} selectable />);

    const checkbox = screen.getAllByRole("checkbox")[0];
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  test("paginates correctly", () => {
    render(
      <Tableau data={data} columns={columns} rowsPerPage={2} pagination />
    );

    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("Bob")).toBeInTheDocument();
    expect(screen.queryByText("Charlie")).not.toBeInTheDocument();

    const nextButton = screen.getByText("Suivant");
    fireEvent.click(nextButton);

    expect(screen.getByText("Charlie")).toBeInTheDocument();
    expect(screen.getByText("David")).toBeInTheDocument();
  });

  test("disables pagination buttons appropriately", () => {
    render(
      <Tableau data={data} columns={columns} rowsPerPage={2} pagination />
    );

    const prevButton = screen.getByText("Précédent");
    const nextButton = screen.getByText("Suivant");

    expect(prevButton).toBeDisabled();

    expect(nextButton).not.toBeDisabled();

    fireEvent.click(nextButton);
    fireEvent.click(nextButton);

    expect(nextButton).toBeDisabled();

    expect(prevButton).not.toBeDisabled();
  });
});
