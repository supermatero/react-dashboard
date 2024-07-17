import './App.css'
import { useContext, useEffect } from 'react';
import { ThemeContext } from './context/ThemeContext';
import { DARK_THEME, LIGHT_THEME } from './constants/themeConstants';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FaMoon } from "react-icons/fa";
import { CiSun } from "react-icons/ci";
import BaseLayout from './layout/BaseLayout';
import { Dashboard, PageNotFound } from "./pages";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme);
  //adding dark mode
  useEffect(() =>{
    if(theme === DARK_THEME) {
      document.body.classList.add('dark-mode');
    }else{
      document.body.classList.remove('dark-mode');
    }
  },[theme]);

  return (

      <Router>
        <Routes>
          <Route element={<BaseLayout/>}>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="*" element={<PageNotFound/>}/>
          </Route>
        </Routes>
        <button type="button" className='theme-toggle-btn' onClick={toggleTheme}>
          {theme == LIGHT_THEME ? <FaMoon/> : <CiSun style={{color:'yellow'}}/>}  
        </button> 
      </Router>
  
  )
}

export default App
