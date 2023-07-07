import React from "react";
import SlideShow from "./components/SlideShow";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div style={{ position: "relative" }}>
      <Navbar />
      <div style={{ position: "relative", zIndex: 0 }}>
        <SlideShow />
      </div>
    </div>
  );
};

export default App;
