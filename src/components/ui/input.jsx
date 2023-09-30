import { useState, useEffect } from 'react';
import '../../styles/components/ui/input.css';

const Input = ({ icon: Icon, placeholder, handle, value, type, isValid }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [iconColor, setIconColor] = useState('#27272a');
    const isNeedValidation = isValid !== undefined
    
    const handleOnFocus = () => {
        setIsFocused(true);
    };

    const handleOnBlur = () => {
        setIsFocused(false);
    };

    useEffect(() => {
        if (isFocused) {
            setIconColor('#FFF') 
        } 
    }, [isFocused])

    useEffect(() => {
        if (isNeedValidation && !isValid) {
            setIconColor('#7F1D1D') 
        } 
        if (isNeedValidation && isValid) {
            setIconColor('#33CC66') 
        } 
    }, [isValid, isNeedValidation])
    

    return (
        <div className={`input__container ${isFocused ? 'focused' : ''} ${isNeedValidation && !isValid && 'input__container_error'} ${isNeedValidation && isValid && 'input__container_success'}`}>
            <Icon size={20} color={iconColor} strokeWidth={2} />
            <input
                className='input'
                type={type ? type : 'text'}
                placeholder={isFocused ? '' : placeholder}
                value={value}
                onChange={handle}
                onClick={handleOnFocus}
                onBlur={handleOnBlur}
            />
        </div>
    );
};

export default Input;
