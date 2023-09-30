import { useState } from 'react';

const useInput = (initialValue, validate) => {
    const [value, setValue] = useState(initialValue);
    const [error, setError] = useState(true);
    const [isDerty, setIsDerty] = useState(false);

    const handleChange = (event) => {
        setIsDerty(true)
        const newValue = event.target.value;
        setValue(newValue);
        if (validate && isDerty) {
            const validationError = validate(newValue);
            setError(validationError);
        }
    };

    const reset = () => {
        setValue(initialValue);
        setError(null);
    };

    return {
        value,
        error,
        onChange: handleChange,
        reset,
    };
};

export default useInput;