import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './Card';

describe('Card Component', () => {
    const defaultProps = {
        titre: 'Test Title',
        imageUrl: 'https://via.placeholder.com/150',
        description: 'Test Description',
        actionText: 'Click Me',
        extraClass: 'test-class',
        onActionClick: jest.fn(),
    };

    test('renders the Card component with props', () => {
        render(<Card {...defaultProps} />);
        
        expect(screen.getByAltText('Card Image')).toHaveAttribute('src', defaultProps.imageUrl);
        expect(screen.getByText(defaultProps.titre)).toBeInTheDocument();
        expect(screen.getByText(defaultProps.description)).toBeInTheDocument();
        expect(screen.getByText(defaultProps.actionText)).toBeInTheDocument();
        expect(screen.getByRole('button')).toHaveClass('outline-primary');
    });

    test('calls onActionClick when button is clicked', () => {
        render(<Card {...defaultProps} />);
        
        fireEvent.click(screen.getByText(defaultProps.actionText));
        expect(defaultProps.onActionClick).toHaveBeenCalled();
    });

    test('applies extraClass to the card', () => {
        render(<Card {...defaultProps} />);
        
        expect(screen.getByRole('img').closest('.card')).toHaveClass(defaultProps.extraClass);
    });

    test('renders without crashing when optional props are not provided', () => {
        render(<Card />);
        
        expect(screen.getByAltText('Card Image')).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeInTheDocument();
    });
});