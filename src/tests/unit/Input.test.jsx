import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from '../../components/atoms/Input';

describe('Input Component', () => {
    test('renders input', () => {
        render(<Input type='text' value='test' onChange={() => {}} id='test-input' />);
        const input = screen.getByDisplayValue(/test/i);
        expect(input).toBeInTheDocument();
    });

    test('calls onChange when input is changed', () => {
        const onChangeMock = jest.fn();
        render(<Input type='text' value='' onChange={onChangeMock} id='test-input' />);
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'new value' } });
        expect(onChangeMock).toHaveBeenCalledTimes(1);
    });
});
