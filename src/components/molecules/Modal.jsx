import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ children }) => {
    return (
        <div className='fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center'>
            <div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-md'>{children}</div>
        </div>
    );
};

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    closeModal: PropTypes.func.isRequired,
};

export default Modal;
