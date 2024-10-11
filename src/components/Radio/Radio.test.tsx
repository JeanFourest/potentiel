import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Radio from './Radio';

describe('Radio Component', () => {
    const defaultProps = {
        titre: 'Test Radio Group',
        labels: ['Option 1', 'Option 2', 'Option 3'],
        nameGroup: 'testRadioGroup',
    };

    it('should render the radio buttons with labels', () => {
        render(<Radio {...defaultProps} />);
        expect(screen.getByText('Test Radio Group')).toBeInTheDocument();
        defaultProps.labels.forEach(label => {
            expect(screen.getByLabelText(label)).toBeInTheDocument();
        });
    });

    it('should update the selected value when a radio button is clicked', () => {
        render(<Radio {...defaultProps} />);
        const option1 = screen.getByLabelText('Option 1') as HTMLInputElement;
        const option2 = screen.getByLabelText('Option 2') as HTMLInputElement;

        // Initially, no radio button should be selected
        expect(option1.checked).toBe(false);
        expect(option2.checked).toBe(false);

        // Click on the first option
        fireEvent.click(option1);
        expect(option1.checked).toBe(true);
        expect(option2.checked).toBe(false);

        // Click on the second option
        fireEvent.click(option2);
        expect(option1.checked).toBe(false);
        expect(option2.checked).toBe(true);
    });
});