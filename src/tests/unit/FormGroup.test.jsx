import React from 'react';
import { render, screen } from '@testing-library/react';
import FormGroup from '../../components/molecules/FormGroup';

describe('FormGroup Component', () => {
    test('renders label and input', () => {
        render(<FormGroup labelText='Email' inputType='email' inputValue='test@test.com' onInputChange={() => {}} inputId='email' />);
        const label = screen.getByText(/email/i);
        const input = screen.getByDisplayValue(/test@test.com/i);
        expect(label).toBeInTheDocument();
        expect(input).toBeInTheDocument();
    });
});
