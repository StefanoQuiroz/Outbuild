import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Modal from '../../components/molecules/Modal';

describe('Modal Component', () => {
    test('renders modal with children', () => {
        render(<Modal closeModal={() => {}}>Test Modal Content</Modal>);
        const modalContent = screen.getByText(/test modal content/i);
        expect(modalContent).toBeInTheDocument();
    });

    test('closes modal when close button is clicked', () => {
        const closeModalMock = jest.fn();
        render(
            <Modal closeModal={closeModalMock}>
                <button onClick={closeModalMock}>Close</button>
            </Modal>
        );
        const closeButton = screen.getByText(/close/i);
        fireEvent.click(closeButton);
        expect(closeModalMock).toHaveBeenCalledTimes(1);
    });
});
