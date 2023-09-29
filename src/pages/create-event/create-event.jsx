import React from 'react'
import DropdownMenu from '../../components/ui/drop-down-menu'
import Input from '../../components/ui/input'
import { Clock10, CalendarDays, Users, SlidersHorizontal, MessageSquare, MapPin } from 'lucide-react'

function CreateEvent() {
  return (
    <div className='create-event'>
        <Input icon={MapPin} placeholder={'Address'}/>
        <Input icon={MessageSquare} placeholder={'Comment'}/>
        <div>
            <Input icon={CalendarDays} placeholder={'Date'}/>
            <Input icon={Clock10} placeholder={'Time'}/> 
        </div>
        <Input icon={SlidersHorizontal} placeholder={'Format'}/>
        <Input icon={Users} placeholder={'Slots'}/>
        <div>
            <DropdownMenu title='format' items={['3x3', '4x4']}/>
        </div>
    </div>
  )
}

export default CreateEvent