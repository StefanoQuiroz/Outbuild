import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, onClick, type = 'button', className = '' }) => {
    return (
        <button type={type} onClick={onClick} className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded ${className}`}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.string,
    className: PropTypes.string,
};

export default Button;
