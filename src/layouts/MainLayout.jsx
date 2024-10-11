import React from 'react';
import PropTypes from 'prop-types';

export default function MainLayout({ children }) {
    return (
        <div className='min-h-screen flex flex-col'>
            <header className='bg-blue-500 text-white py-4'>
                <div className='container mx-auto'>My Application - Stefano Quiroz</div>
            </header>
            <main className='flex-grow container mx-auto p-4'>{children}</main>
            <footer className='bg-gray-800 text-white py-4'>
                <div className='container mx-auto text-center'>© 2024 My Application</div>
            </footer>
        </div>
    );
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
