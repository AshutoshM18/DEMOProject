'use client'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { DateRange, Range,RangeKeyDict } from "react-date-range";

interface CalenderProps{
    value:Range;
    onChange:(value:RangeKeyDict) => void;
    disabledDates?:Date[]

}
function Calender({disabledDates,onChange,value}:CalenderProps) {
  return (
 <DateRange rangeColors={['#262626']}
 ranges={[value]}
 date={new Date()}
onChange={onChange}
direction='vertical'
showDateDisplay={false}
minDate={new Date()}
disabledDates={disabledDates}
 />
  )
}

export default Calender