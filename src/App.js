import React from "react";

const api = {
  key: "de628831cd41c3cb01ac6acdc847bd06",
  base: "https://api.openweathermap.org/data/2.5/"
}


function App() {
  return (
    <div className="app">
    <main>
      <div className="search-box">
        <input 
        type="text"
        className="search-bar"
        placeholder="search..."
        />
      </div>
      <div className="location-box">
      <div className="location"></div>
      <div className="date"></div>
      </div>
    
    </main>
      
    </div>
  );
}

export default App;
