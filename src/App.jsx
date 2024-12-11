import { useState } from 'react'
import './App.css'

const App = () => {
  const [bgColor, setBgColor] = useState("#ffffff");

  const changeBackground = (color) => {
    setBgColor(color);
  };

  return (
    <>
     <div className="app" style={{ backgroundColor: bgColor, height: "100vh" }}>
      <h1>Background Changer App</h1>
      <div className="color-buttons">
        <button onClick={() => changeBackground("pink")}>Pink</button>
        <button onClick={() => changeBackground("yellow")}>Yellow</button>
        <button onClick={() => changeBackground("red")}>Red</button>
        <button onClick={() => changeBackground("blue")}>blue</button>
        <button onClick={() => changeBackground("black")}>black</button>
        <button onClick={() => changeBackground("green")}>green</button>
        <button onClick={() => changeBackground("white")}>Reset</button>
      </div>
    </div>
    </>
  )
}
export default App