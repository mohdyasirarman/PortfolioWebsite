import { useState } from "react";
import NavBar from "./components/NavBar";
import "./index.css";
import Herosection from "./components/Herosection";

function App() {
  const [isParentFocused, setParentFocused] = useState(false);
  const handleFocus = () => setParentFocused(true);
  const handleBlur = () => setParentFocused(false);

  return (
    <>
      <div
        onFocus={handleFocus}
        onBlur={handleBlur}
        tabIndex="0"
      >
        <NavBar isParentFocused={isParentFocused} />
        <Herosection/>
      </div>
    </>
  );
}

export default App;
