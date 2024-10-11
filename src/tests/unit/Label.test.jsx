import React from 'react';
import { render, screen } from '@testing-library/react';
import Label from '../../components/atoms/Label';

describe('Label Component', () => {
    test('renders label with text', () => {
        render(<Label htmlFor='test-input' text='Test Label' />);
        const label = screen.getByText(/test label/i);
        expect(label).toBeInTheDocument();
    });
});
