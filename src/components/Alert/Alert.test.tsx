import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Alert from "./Alert";

describe("Alert", () => {
  test("renders an information alert", () => {
    render(<Alert className="alert-information">Information alert</Alert>);

    const alert = screen.getByText("Information alert");
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveClass("alert-information");
  });

  test("renders a success alert", () => {
    render(<Alert className="alert-success">Success alert</Alert>);

    const alert = screen.getByText("Success alert");
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveClass("alert-success");
  });

  test("renders an error alert", () => {
    render(<Alert className="alert-error">Error alert</Alert>);

    const alert = screen.getByText("Error alert");
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveClass("alert-error");
  });

  test("renders a warning alert", () => {
    render(<Alert className="alert-warning">Warning alert</Alert>);

    const alert = screen.getByText("Warning alert");
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveClass("alert-warning");
  });

  test("renders an information alert by default", () => {
    render(<Alert>Default alert</Alert>);

    const alert = screen.getByText("Default alert");
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveClass("alert-information");
  });

  test("renders children", () => {
    render(<Alert><button>hey</button></Alert>);

    const button = screen.getByText("hey");
    expect(button).toBeInTheDocument();
  });
});
