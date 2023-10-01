import { useState, useEffect } from 'react';
import '../../styles/components/ui/input.css';

const Input = ({ icon: Icon, placeholder, handle, value, type }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isDerty, setIsDerty] = useState(false);
    const [inputColor, setInputColor] = useState('#27272a');
    
    const handleOnFocus = () => {
        setIsDerty(true)
        setIsFocused(true);
    };

    const handleOnBlur = () => {
        setIsFocused(false);
    };

    useEffect(() => {
        if (value && value.length && isDerty) {
            setInputColor('#FFF') 
            return
        }
        if (isFocused) {
            setInputColor('#FFF') 
        } else{
            setInputColor('#27272a') 
        }
    }, [isFocused, value, isDerty])

    return (
        <div className={`input__container ${isFocused ? 'focused' : ''}`} style={{color: inputColor, borderColor: inputColor}}>
            <Icon size={20} color={inputColor} strokeWidth={2} />
            <input
                className='input'
                type={type ? type : 'text'}
                placeholder={isFocused ? '' : placeholder}
                value={value}
                onChange={handle}
                onClick={handleOnFocus}
                onBlur={handleOnBlur}
                style={{color: inputColor}}
            />
        </div>
    );
};

export default Input;
