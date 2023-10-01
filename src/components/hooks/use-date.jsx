import { useState } from 'react';

const useDate = (initialValue, validate) => {
    const [date, setDate] = useState(initialValue);
    const [error, setError] = useState(null);
    const [isDirty, setIsDirty] = useState(false);

    const handleChange = (newDate) => {
        setIsDirty(true);
        setDate(newDate);
        if (validate && isDirty) {
            const validationError = validate(newDate);
            setError(validationError);
        }
    };

    const reset = () => {
        setDate(initialValue);
        setError(null);
        setIsDirty(false);
    };

    return {
        date,
        error,
        onChange: handleChange,
        reset,
    };
};

export default useDate;
