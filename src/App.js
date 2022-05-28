import Header from './components/header/Header';
import { useState } from 'react';
import './App.css';
import SocialCardsList from './components/cards/SocialCardsList';
import OverviewCardsList from './components/cards/OverviewCardsList';

function App() {

  // Set defaultTheme based on OS
  const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

  const [themeColor, setThemeColor] = useState(defaultTheme);

  return (
    <main className={`${themeColor} font-inter ${ themeColor === 'dark' ? 'bg-very-dark-blue' : 'bg-white'}`}>
      <Header themeColor={themeColor} setThemeColor={setThemeColor}/>
      <SocialCardsList/>
      <OverviewCardsList/>
    </main>
  );
}

export default App;
