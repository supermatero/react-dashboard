import { useEffect, useRef, useState } from 'react'

import { HiDotsHorizontal } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function AreaTableAction() {
  const [showDropdown, setShowDropdown] = useState();
  //handler
  const handleDropdown = ()=>{
    setShowDropdown(!showDropdown);
  };
  const dropdownref = useRef(null);
  const handleClickOutside = (event)=>{
    if(dropdownref.current &&!dropdownref.current.contains(event.target)){
      setShowDropdown(false);
    }
  };
  useEffect( ()=>{
    document.addEventListener("mousedown", handleClickOutside);
    return() =>{
      document.removeEventListener("mousedown", handleClickOutside);
    }
  },[]);
  return (
    
     <button type="button" className="action-dropdown-btn" onClick={handleDropdown}>
      <HiDotsHorizontal size={18}/>
      {
        showDropdown && (
        <div className="action-dropdown-menu" ref={dropdownref}>
          <ul className="dropdown-menu-list">
            <li className="dropdown-menu-item">
              <Link to="/view" className="dropdown-menu-link">View</Link>
            </li>
            <li className="dropdown-menu-item">
              <Link to="/edit" className="dropdown-menu-link">Edit</Link>
            </li>
            <li className="dropdown-menu-item">
              <Link to="/delete" className="dropdown-menu-link">Delete</Link>
            </li>
          </ul>
        </div>
        )
      }
     </button>
    
  )
}
