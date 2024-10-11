import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

const Input = ({ type, value, onChange, id, placeholder, showIcon, iconType, onIconClick }) => {
    return (
        <div className='relative'>
            <input
                type={type}
                value={value}
                onChange={onChange}
                id={id}
                placeholder={placeholder}
                className='w-full px-3 py-2 pr-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            {showIcon && (
                <div className='absolute inset-y-0 right-0 pr-3 flex items-center'>
                    <Icon iconType={iconType} onClick={onIconClick} />
                </div>
            )}
        </div>
    );
};

Input.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    showIcon: PropTypes.bool,
    onIconClick: PropTypes.func,
    iconType: PropTypes.oneOf(['eye', 'eyeOff']),
};

export default Input;
