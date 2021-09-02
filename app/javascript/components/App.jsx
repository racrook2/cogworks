import React from 'react'
import Routes from 'routes/Index'
import { BODY, PRIMARY_TEXT } from 'utils/Colors';

function App() {
  if (localStorage.getItem('cogworksDarkMode')) {
    document.body.style.setProperty('background-color', BODY);
    document.body.style.setProperty('color', PRIMARY_TEXT);
  }

  return (
    <>
      {Routes}
    </>
  )
}

export default App
