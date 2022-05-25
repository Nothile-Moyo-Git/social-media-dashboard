import Header from './components/header/Header';
import { useState } from 'react';
import './App.css';

function App() {

  // Set defaultTheme based on OS
  const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

  const [themeColor, setThemeColor] = useState(defaultTheme);

  return (
    <div className={`${themeColor} max-w-7xl m-auto p-4 font-inter`}>
      <Header themeColor={themeColor} setThemeColor={setThemeColor}/>
    </div>
  );
}

export default App;
