import React from 'react';
import PropTypes from 'prop-types';
import { FiEye } from 'react-icons/fi';

const DashboardItem = ({ comment, openModal }) => {
    return (
        <div className='border-b p-4 flex justify-between items-center'>
            <div className='flex space-x-6 items-center'>
                <p className='text-sm font-semibold'>{comment.id}</p>
                <p className='text-sm font-semibold'>{comment.name}</p>
                <p className='text-sm text-gray-600'>{comment.email}</p>
            </div>
            <button onClick={() => openModal(comment)} className='text-blue-500 hover:text-blue-700'>
                <FiEye className='h-5 w-5' data-testid='FiEye' />
            </button>
        </div>
    );
};

DashboardItem.propTypes = {
    comment: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    }).isRequired,
    openModal: PropTypes.func.isRequired,
};

export default DashboardItem;
