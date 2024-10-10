import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";
import { FaBeer } from "react-icons/fa";
import React from "react";

describe("Button Component", () => {
    test("renders button with text", () => {
        render(<Button text="Click Me" onClick={() => {}} extraClass="danger" />);
        const buttonElement = screen.getByText(/Click Me/i);
        expect(buttonElement).toBeInTheDocument();
    });
    
    test("renders button with icon", () => {
        render(<Button icon={<FaBeer data-testid="icon" />} onClick={() => {}} extraClass="icon-button" />);
        const iconElement = screen.getByTestId("icon");
        expect(iconElement).toBeInTheDocument();
    });
    
    test("button click event", () => {
        const handleClick = jest.fn();
        render(<Button text="Click Me" onClick={handleClick} extraClass="danger" />);
        const buttonElement = screen.getByText(/Click Me/i);
        fireEvent.click(buttonElement);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
    
    test("button is disabled", () => {
        render(<Button text="Click Me" onClick={() => {}} extraClass="danger" disabled={true} />);
        const buttonElement = screen.getByText(/Click Me/i);
        expect(buttonElement).toBeDisabled();
    });
    
    test("button is enabled", () => {
        render(<Button text="Click Me" onClick={() => {}} extraClass="danger" disabled={false} />);
        const buttonElement = screen.getByText(/Click Me/i);
        expect(buttonElement).not.toBeDisabled();
    });
});