import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Icon from '../../components/atoms/Icon';

describe('Icon Component', () => {
    test('renders eye icon', () => {
        render(<Icon iconType='eye' onClick={() => {}} />);
        const icon = screen.getByRole('button');
        expect(icon).toBeInTheDocument();
    });

    test('calls onClick when icon is clicked', () => {
        const onClickMock = jest.fn();
        render(<Icon iconType='eye' onClick={onClickMock} />);
        const icon = screen.getByRole('button');
        fireEvent.click(icon);
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });
});
