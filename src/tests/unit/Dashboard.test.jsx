import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from '../../components/templates/Dashboard';
import fetchMock from 'jest-fetch-mock';

describe('Dashboard Component', () => {
    beforeEach(() => {
        fetchMock.resetMocks();
    });

    test('renders Dashboard with a list of comments', async () => {
        const mockComments = [
            { id: 1, name: 'id labore ex et quam laborum', email: 'Eliseo@gardner.biz', body: 'Test comment body 1' },
            { id: 2, name: 'quo vero reiciendis velit similique earum', email: 'Jayne_Kuhic@sydney.com', body: 'Test comment body 2' },
        ];

        fetchMock.mockResponseOnce(JSON.stringify(mockComments));

        render(
            <Router>
                <Dashboard />
            </Router>
        );
        expect(await screen.findByText(/id labore ex et quam laborum/i)).toBeInTheDocument();
        expect(await screen.findByText(/Eliseo@gardner.biz/i)).toBeInTheDocument();
        expect(await screen.findByText(/quo vero reiciendis velit similique earum/i)).toBeInTheDocument();
        expect(await screen.findByText(/Jayne_Kuhic@sydney.com/i)).toBeInTheDocument();
    });
});
