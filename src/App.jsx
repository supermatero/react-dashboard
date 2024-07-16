
import { useContext } from 'react';
import './App.css'
import ThemeContext from './context/ThemeContext';

function App() {
  const [theme, toogleTheme] = useContext(ThemeContext);
  console.log(theme);

  return (
    <>
      <div>asdf</div>
    </>
  )
}

export default App
