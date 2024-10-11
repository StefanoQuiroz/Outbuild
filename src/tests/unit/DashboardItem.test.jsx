import React from 'react';
import { render, screen } from '@testing-library/react';
import DashboardItem from '../../components/organisms/DashboardItem';

const mockComment = {
    id: 1,
    name: 'Test Comment',
    email: 'test@test.com',
};

const openModalMock = jest.fn();

describe('DashboardItem Component', () => {
    test('renders the FiEye icon', () => {
        render(<DashboardItem comment={mockComment} openModal={openModalMock} />);

        const icon = screen.getByTestId('FiEye');
        expect(icon).toBeInTheDocument();
    });

    test('calls openModal when the button is clicked', () => {
        render(<DashboardItem comment={mockComment} openModal={openModalMock} />);

        const button = screen.getByRole('button');
        button.click();
        expect(openModalMock).toHaveBeenCalledWith(mockComment);
    });
});
