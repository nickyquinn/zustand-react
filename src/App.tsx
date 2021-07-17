import React, { useEffect } from "react";
import logo from './logo.svg';
import styles from './App.module.scss';
import Name from './components/NameComponent/NameComponent';
import {userStore} from "./stores/userStore"
import NameComponent from "./components/NameComponent/NameComponent";

function App() {
  const { darkMode, flipTheme } = userStore()

  // Similar to componentDidMount and componentDidUpdate:  
  // useEffect(() => {    
  //   document.title = name.length == 0 ? "Pullstate-react" : `Pullstate: ${name}`;
  // }, [name]); //With an array, effect only runs when the referenced value(s) changes

  let darkmodeClass = darkMode ? "" : styles.light

  return (
    <div className={styles.App + ' ' + darkmodeClass}>
      <header className={styles['App-Header']}>
        <img src={logo} className={styles['App-logo']} alt="logo" />
        <Name />

      </header>
      <input type="checkbox" id="chkMode" name="chkMode" defaultChecked={darkMode} onChange={(e) => flipTheme() } /><label htmlFor="chkMode">Dark mode</label>
    </div>
  );
}

export default App;
