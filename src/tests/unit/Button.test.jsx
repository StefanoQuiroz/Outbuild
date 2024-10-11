import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../../components/atoms/Button';

describe('Button Component', () => {
    test('renders Button with text', () => {
        render(<Button onClick={() => {}}>Click Me</Button>);
        const button = screen.getByText(/click me/i);
        expect(button).toBeInTheDocument();
    });

    test('calls onClick when button is clicked', () => {
        const onClickMock = jest.fn();
        render(<Button onClick={onClickMock}>Click Me</Button>);
        const button = screen.getByText(/click me/i);
        fireEvent.click(button);
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });
});
