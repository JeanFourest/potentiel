import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Alert from "./Alert";

describe("Alert", () => {
  test("renders an information alert", () => {
    render(<Alert className="alert-information">Information alert</Alert>);

    // get div class alert-information
    const alert = screen.getByText("Information alert");
    expect(alert.parentElement).toBeInTheDocument();
    expect(alert.parentElement).toHaveClass("alert-information");
  });

  test("renders a success alert", () => {
    render(<Alert className="alert-success">Success alert</Alert>);

    const alert = screen.getByText("Success alert");
    expect(alert.parentElement).toBeInTheDocument();
    expect(alert.parentElement).toHaveClass("alert-success");
  });

  test("renders an error alert", () => {
    render(<Alert className="alert-error">Error alert</Alert>);

    const alert = screen.getByText("Error alert");
    expect(alert.parentElement).toBeInTheDocument();
    expect(alert.parentElement).toHaveClass("alert-error");
  });

  test("renders a warning alert", () => {
    render(<Alert className="alert-warning">Warning alert</Alert>);

    const alert = screen.getByText("Warning alert");
    expect(alert.parentElement).toBeInTheDocument();
    expect(alert.parentElement).toHaveClass("alert-warning");
  });

  test("renders an information alert by default", () => {
    render(<Alert>Default alert</Alert>);

    const alert = screen.getByText("Default alert");
    expect(alert.parentElement).toBeInTheDocument();
    expect(alert.parentElement).toHaveClass("alert-information");
  });

  test("renders children", () => {
    render(
      <Alert>
        <button>hey</button>
      </Alert>
    );

    const button = screen.getByText("hey");
    expect(button).toBeInTheDocument();
  });

  test("closes the alert automatically after 5 seconds", async () => {
    render(<Alert automaticClose>Alert</Alert>);

    await new Promise((r) => setTimeout(r, 6000));

    const alert = screen.queryByText("Alert");
    expect(alert).not.toBeInTheDocument();
  }, 10000);
});
