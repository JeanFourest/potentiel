import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoaderComponent from "./Loader";

describe("LoaderComponent", () => {
  test("renders progress bar with correct progress", () => {
    render(<LoaderComponent type="progress-bar" progress={50} />);

    const progressBar = screen.getByText("50%");
    expect(progressBar).toBeInTheDocument();
    expect(progressBar).toHaveStyle("width: 50%");
  });

  test("applies custom class to progress bar", () => {
    render(<LoaderComponent type="progress-bar" className="progress-bar-success" progress={75} />);

    const progressBar = screen.getByText("75%");
    expect(progressBar).toBeInTheDocument();
    expect(progressBar).toHaveClass("progress-bar-success");
  });

  test("renders progress bar at 100%", () => {
    render(<LoaderComponent type="progress-bar" className="progress-bar-danger" progress={100} />);

    const progressBar = screen.getByText("100%");
    expect(progressBar).toBeInTheDocument();
    expect(progressBar).toHaveStyle("width: 100%");
    expect(progressBar).toHaveClass("progress-bar-danger");
  });
});
