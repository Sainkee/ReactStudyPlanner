import { useState } from "react";

import InputSection from "./components/InputSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="text-center mt-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl uppercase font-semibold">
          CentraLizer
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl ">to center your plan</p>
      </div>
      <InputSection />
    </>
  );
}

export default App;
