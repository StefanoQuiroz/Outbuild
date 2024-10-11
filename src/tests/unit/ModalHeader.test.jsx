import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ModalHeader from '../../components/molecules/ModalHeader';

describe('ModalHeader Component', () => {
    test('renders ModalHeader with title', () => {
        render(<ModalHeader title='Test Title' onClose={() => {}} />);
        const title = screen.getByText(/test title/i);
        expect(title).toBeInTheDocument();
    });

    test('calls onClose when close button is clicked', () => {
        const onCloseMock = jest.fn();
        render(<ModalHeader title='Test Title' onClose={onCloseMock} />);
        const closeButton = screen.getByText(/close/i);
        fireEvent.click(closeButton);
        expect(onCloseMock).toHaveBeenCalledTimes(1);
    });
});
