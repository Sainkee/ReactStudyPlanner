import { useState } from "react";

import InputSection from "./components/InputSection";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="text-center mt-10">
        <h1 className="text-4xl my-5 md:text-6xl lg:text-7xl uppercase font-semibold">
          Academic Success Plan
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl ">
          Strategies and Schedules for Optimal Learning
        </p>
      </div>
      <InputSection />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
 
    </>
  );
}

export default App;
