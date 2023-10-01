import React, { useState } from 'react';
import '../styles/components/ui/drop-down-menu.css';
import DropdownMenu from '../components/ui/drop-down-menu';
import Input from '../components/ui/input';
import { MapPin, SlidersHorizontal, Users, MessageSquare, CalendarDays, Clock10 } from 'lucide-react';
import useInput from '../components/hooks/use-input';
import Button from '../components/ui/button';
// import DateInput from '../components/ui/date-input';

function CreateEvent() {
    const options = ['4x4', '5x5', '6x6', '7x7', '8x8', '9x9', '10x10', '11x11'];
    const [selectedOption, setSelectedOption] = useState(null);

    const address = useInput('', (value) => {
        console.log(selectedOption)
        if (value.length < 3) {
            return 'Address should be at least 3 characters long.';
        }
        return null;
    });

    const date = useInput(getCurrentDate(), null); // Используем текущую дату

    function getCurrentDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    return (
        <div className='create-event'>
            <form>
                <Input icon={MapPin} placeholder={'Address'} value={address.value} isValid={!address.error} handle={address.onChange}/>
                <Input icon={CalendarDays} placeholder={'Date'} type="date" value={date.value} isValid={!date.error} handle={date.onChange}/>
                <Input icon={Clock10} placeholder={'Time'} type="time" value={address.value} isValid={!address.error} handle={address.onChange}/>
                {/* <DateInput/> */}
                <div className='dropdown-menu-box'>
                    <DropdownMenu options={options} icon={SlidersHorizontal} onSelect={handleOptionSelect} placeholder={'Format'} />
                </div>
                <div className='dropdown-menu-box'>
                    <DropdownMenu options={options} icon={Users} onSelect={handleOptionSelect} placeholder={'Slots'} />
                </div>
                <Input icon={MessageSquare} placeholder={'Comment'}/>
                <div className='buttons-box'>
                    <Button castomClassName={'button_full-width'}>Create event</Button>
                    <Button castomClassName={'button_full-width'}>Save as template</Button>
                </div>
            </form>
        </div>
    );

    function handleOptionSelect(option) {
        setSelectedOption(option);
    }
}

export default CreateEvent;
