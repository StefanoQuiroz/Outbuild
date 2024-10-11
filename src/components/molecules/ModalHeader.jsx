import React from 'react';
import PropTypes from 'prop-types';

const ModalHeader = ({ title, onClose }) => {
    return (
        <div className='flex justify-between items-center mb-4'>
            <h2 className='text-xl font-bold text-center'>{title}</h2>
            <button onClick={onClose} className='bg-red-500 text-white py-1 px-2 rounded hover:bg-red-700'>
                Close
            </button>
        </div>
    );
};

ModalHeader.propTypes = {
    title: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default ModalHeader;
