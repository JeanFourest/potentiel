import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from './Modal';

describe('Modal Component', () => {
    const mockOnClose = jest.fn();

    const defaultProps = {
        isOpen: true,
        title: 'Test Modal',
        imgUrl: 'test-image.jpg',
        content: 'This is a test modal content.',
        onClose: mockOnClose,
    };

    it('should render the modal when isOpen is true', () => {
        render(<Modal {...defaultProps} />);
        expect(screen.getByText('Test Modal')).toBeInTheDocument();
        expect(screen.getByText('This is a test modal content.')).toBeInTheDocument();
    });

    it('should not render the modal when isOpen is false', () => {
        render(<Modal {...defaultProps} isOpen={false} />);
        expect(screen.queryByText('Test Modal')).not.toBeInTheDocument();
    });

    it('should call onClose when the close button is clicked', () => {
        render(<Modal {...defaultProps} />);
        fireEvent.click(screen.getByText('×'));
        expect(mockOnClose).toHaveBeenCalledTimes(1);
    });
});