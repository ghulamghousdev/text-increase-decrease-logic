import React, { useState, useEffect } from "react";
import "./App.css";
import "./AccessibleFonts.css";

function App() {
  const [sliderValue, setSliderValue] = useState(10);
  const [fontType, setFontType] = useState("Small");
  const setFont = () => {
    if (sliderValue === 10) {
      setFontType("Small");
    } else if (sliderValue === 20) {
      setFontType("Medium");
    } else if (sliderValue === 40) {
      setFontType("Large");
    }
  };
  const chng = (e) => {
    let a = sliderValue;
    a = a + 10;
    setSliderValue(a);
    setFont();
  };

  return (
    <div className="App">
      <button onClick={(e) => chng(e)}>increaseSize</button>
      <button>decreaseSize</button>
      <p className={`header${fontType}`}>
        Testing the fonts
      </p>

      <blockquote className={`footer${fontType}`}>
        Some text in a blockquote
      </blockquote>
    </div>
  );
}

export default App;
