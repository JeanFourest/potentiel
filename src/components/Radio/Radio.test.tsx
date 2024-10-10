import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Radio from "./Radio";

describe('Radio Component', () => {
    test('renders without crashing', () => {
        render(<Radio labels={["Test Radio"]} />);
        const radioElement = document.querySelector('input[type="radio"]');
        expect(radioElement).toBeInTheDocument();
    });

    test('displays the correct label', () => {
        render(<Radio labels={["Test Radio"]} />);
        const radioElement = document.querySelector('input[type="radio"]');
        expect(radioElement).toBeInTheDocument();
    });

    test('displays multiple labels', () => {
        const labels = ["Test Radio", "Test Radio 2"];
        render(<Radio labels={labels} />);
        const radioElements = document.querySelectorAll('input[type="radio"]');
        expect(radioElements).toHaveLength(2);
    });
});