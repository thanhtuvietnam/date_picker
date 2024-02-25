import { useState } from 'react';
import DateDisplay from './DateDisplay';
import './date.css';
const DateContainer = () => {
   const [date, setDate] = useState(Date.now());
   return (
      <>
         <input type="date" className="date-input" onChange={(e) => setDate(e.target.value)} />

         <DateDisplay date={date} />
      </>
   );
};

export default DateContainer;
