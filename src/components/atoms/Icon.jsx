import React from 'react';
import PropTypes from 'prop-types';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const Icon = ({ iconType, onClick }) => {
    return (
        <button type='button' onClick={onClick} className='absolute inset-y-0 right-0 px-3 flex items-center'>
            {iconType === 'eye' ? <FiEye className='h-5 w-5 text-gray-600' /> : <FiEyeOff className='h-5 w-5 text-gray-600' />}
        </button>
    );
};

Icon.propTypes = {
    iconType: PropTypes.oneOf(['eye', 'eyeOff']).isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Icon;
