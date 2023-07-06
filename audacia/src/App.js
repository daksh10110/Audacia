import React from "react";

import SlideShow from "./components/SlideShow";

const App = () => {
  return (
    <div>
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, background: "#fff", padding: "10px", zIndex: 1 }}>
        {/* Add your navbar content here */}
        <h1>Navbar</h1>
      </nav>
      <SlideShow />
    </div>
  );
};

export default App;