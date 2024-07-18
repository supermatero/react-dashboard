import { useContext, useEffect, useRef, useState } from "react";
import { SidebarContext } from "../../../context/SidebarContext";
import "./AreaTop.css";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'; 
import { MdOutlineMenu } from "react-icons/md";
import { addDays } from "date-fns";
import { DateRange } from "react-date-range";

export default function AreaTop() {
  const { openSidebar } = useContext(SidebarContext);

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays( new Date(), 7),
      key: 'selection',
    },
  ]);

  const [showDatePicker, setShowDatePicker] = useState(false);
  const dateRangeRef = useRef(null);
  //handler
  const handleInputClick = () => {
    setShowDatePicker(true);
  };
  const hancleClickOutside = (event) => {
    if(dateRangeRef.current && !dateRangeRef.current.contains(event.target)) {
      setShowDatePicker(false);
    }
  }
   //add event listener to document to close datepicker when clicking outside
  useEffect( () => {
    document.addEventListener('mousedown', hancleClickOutside);
    return () => {
      document.removeEventListener('mousedown', hancleClickOutside);
    }
  }, []);

  return (
    <section className='content-area-top'>
      <div className="area-top-l">
        <button type="button" className="sidebar-open-btn" onClick={openSidebar}>
        <MdOutlineMenu size={24}/>
        </button> 
        <h2 className="area-top-tittle">Dashboard</h2>
      </div>

      <div className="area-top-r">
        <div ref={dateRangeRef} className={`date-range-wrapper ${!showDatePicker ? "hide-date-range" : ""}`} onClick={handleInputClick}>
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={state}
            showMonthAndYearPickers={false}
            color="#3d91ff"
             />
        </div>
      </div>
    </section>
  )
}
