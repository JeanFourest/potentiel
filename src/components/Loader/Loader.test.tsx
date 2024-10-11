import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoaderComponent from "./Loader";

describe("LoaderComponent", () => {
  test("renders a spinner when type is spinner", () => {
    render(<LoaderComponent type="spinner" />);
    
    // Vérifier que le spinner est affiché
    const spinner = screen.getByRole("presentation", { hidden: true });
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveClass("spinner");
  });

  test("renders a spinner with custom class", () => {
    render(<LoaderComponent type="spinner" className="spinner-primary" />);
    
    const spinner = screen.getByRole("presentation", { hidden: true });
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveClass("spinner-primary");
  });

  test("renders a progress bar when type is progress-bar", () => {
    render(<LoaderComponent type="progress-bar" progress={50} />);
    
    const progressBar = screen.getByText("50%");
    expect(progressBar).toBeInTheDocument();
    expect(progressBar).toHaveClass("progress-bar");
    expect(progressBar).toHaveStyle("width: 50%");
  });

  test("renders a progress bar with custom class", () => {
    render(<LoaderComponent type="progress-bar" className="progress-bar-success" progress={25} />);
    
    const progressBar = screen.getByText("25%");
    expect(progressBar).toBeInTheDocument();
    expect(progressBar).toHaveClass("progress-bar-success");
    expect(progressBar).toHaveStyle("width: 25%");
  });

  test("handles progress values of 0 and 100 correctly", () => {
    render(<LoaderComponent type="progress-bar" progress={0} />);
    const progressBar0 = screen.getByText("0%");
    expect(progressBar0).toBeInTheDocument();
    expect(progressBar0).toHaveStyle("width: 0%");

    render(<LoaderComponent type="progress-bar" progress={100} />);
    const progressBar100 = screen.getByText("100%");
    expect(progressBar100).toBeInTheDocument();
    expect(progressBar100).toHaveStyle("width: 100%");
  });
});
