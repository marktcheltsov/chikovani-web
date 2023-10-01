import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function DateInput() {
    const [date, setDate] = useState(new Date());
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);

    const handleDateChange = (newDate) => {
        setDate(newDate);
    };

    const toggleCalendar = () => {
        setIsCalendarOpen(!isCalendarOpen);
    };

    return (
        <div className="date-input">
            <input
                type="text"
                value={date.toDateString()}
                onClick={toggleCalendar}
                readOnly
            />
            {isCalendarOpen && (
                <div className="calendar-container">
                    <Calendar
                        onChange={handleDateChange}
                        value={date}
                    />
                </div>
            )}
        </div>
    );
}

export default DateInput;
