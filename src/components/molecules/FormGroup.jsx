import React from 'react';
import PropTypes from 'prop-types';
import Label from '../atoms/Label';
import Input from '../atoms/Input';

const FormGroup = ({ labelText, inputType, inputValue, onInputChange, inputId, showIcon, iconType, onIconClick }) => {
    return (
        <div className='mb-4'>
            <Label htmlFor={inputId} text={labelText} />
            <Input
                type={inputType}
                value={inputValue}
                onChange={onInputChange}
                id={inputId}
                showIcon={showIcon}
                iconType={iconType}
                onIconClick={onIconClick}
            />
        </div>
    );
};

FormGroup.propTypes = {
    labelText: PropTypes.string.isRequired,
    inputType: PropTypes.string.isRequired,
    inputValue: PropTypes.string.isRequired,
    onInputChange: PropTypes.func.isRequired,
    inputId: PropTypes.string.isRequired,
    showIcon: PropTypes.bool,
    iconType: PropTypes.oneOf(['eye', 'eyeOff']),
    onIconClick: PropTypes.func,
};

export default FormGroup;
