import { useState } from "react";
import PlanList from "./PlanList";
import { v4 as uniqId } from "uuid";

export default function InputSection() {
  const [data, setData] = useState([]);
  const [str, setStr] = useState("");
  const [num, setNum] = useState("");

  const onChangeHandle = (e) => {
    e.preventDefault();
    setStr(e.target.value);
  };
  const onChangeNumHandle = (e) => {
    e.preventDefault();
    setNum(Number(e.target.value));
  };

  const addData = () => {
    if (str === "" || num === "") {
      return;
    }

    setData([...data, { str, num, id: uniqId() }]);
    setStr("");
    setNum("");
  };

  const deletePlan = (id) => {
    setData(data.filter((i) => i.id !== id));
  };

  return (
    <>
      <div className="flex gap-4 p-4 bg-gray-100 rounded-lg flex-col items-center justify-center text-black md:flex-row max-w-[80%] mx-auto my-10">
        <span className="flex flex-col flex-1"><label className="bg-white/80  max-w-fit p-2 px-4 " htmlFor="text-Input">Enter Your Plan:</label>
        <input
          type="text"
          id="text-Input"
          value={str}
          placeholder="Enter text"
          className="flex-1 border border-gray-300 text-white p-2 rounded focus:outline-none focus:border-blue-500"
          aria-label="Text input"
          onChange={onChangeHandle}
        /></span>
       <span className="flex flex-col flex-1"> <label htmlFor="number-Input" className="bg-white/80 p-2 px-4 max-w-fit ">Enter Study Hour: </label>
        <input
          id="number-Input"
          type="number"
          value={num}
          onChange={onChangeNumHandle}
          placeholder="Enter number"
          className=" border border-gray-300 p-2 text-white rounded focus:outline-none focus:border-blue-500"
          aria-label="Number input"
        /></span>
        <span className="md:self-end">
          <button
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            aria-label="Submit button"
            onClick={addData}
          >
            Submit
          </button>
        </span>
      </div>

      <div className="flex flex-col  w-full rounded-t bg-neutral-700 max-w-[80%] mx-auto text-center items-center  justify-center">
        <h1 className="text-xl py-5 font-serif font-semibold ">Your Task </h1>

        <div className=" w-[95%] flex flex-col gap-5 py-10 px-5">
          {data.map((item) => (
            <PlanList
              key={item.id}
              str={item.str}
              num={item.num}
              handleDelete={() => deletePlan(item.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
