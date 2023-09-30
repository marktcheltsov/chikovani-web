import React, { useState } from 'react';
import '../../styles/components/ui/drop-down-menu.css';
import DropdownMenu from '../../components/ui/drop-down-menu';
import Input from '../../components/ui/input';
import { Clock10, CalendarDays, Users, SlidersHorizontal, MessageSquare, MapPin } from 'lucide-react';
import useInput from '../../components/hooks/use-input';
import Button from '../../components/ui/button';

function CreateEvent() {
    const address = useInput('', (value) => {
        if (value.length < 3) {
            return false;
        }
        return true;
    });

    const options = ['Опция 1', 'Опция 2', 'Опция 3'];
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        console.log(selectedOption)
    };

    return (
        <div className='create-event'>
            <form>
                <Input icon={MapPin} placeholder={'Address'} value={address.value} isValid={address.error} handle={address.onChange}/>
                <div className='dropdown-menu-box'>
                    <DropdownMenu icon={Clock10} options={options} onSelect={handleOptionSelect} placeholder={'Time'}/>
                    <DropdownMenu icon={CalendarDays} options={options} onSelect={handleOptionSelect} placeholder={'Date'}/>
                </div>
                <div className='dropdown-menu-box'>
                    <DropdownMenu options={['3x3', '4x4']} icon={SlidersHorizontal}  onSelect={(option) => { /* обработка выбора */ }} placeholder={'Format'} />
                </div>
                <div className='dropdown-menu-box'>
                    <DropdownMenu options={['3x3', '4x4']} icon={Users}  onSelect={(option) => { /* обработка выбора */ }} placeholder={'Slots'} />
                </div>
                <Input icon={MessageSquare} placeholder={'Comment'}/>
                <div className='buttons-box'>
                    <Button castomClassName={'button_full-width'}>Create event</Button>
                    <Button castomClassName={'button_full-width'}>Save as template</Button>
                </div>
            </form>
        </div>
    );
}

export default CreateEvent;