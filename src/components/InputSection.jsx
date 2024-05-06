import { useState, useEffect } from "react";
import PlanList from "./PlanList";
import { v4 as uniqId } from "uuid";
import {toast} from "react-toastify"


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
    toast.warn("All Field Are Required!");
      return;
    }

    setData([...data, { str, num, id: uniqId() }]);
    setStr("");
    setNum("");
  };

  const deletePlan = (id) => {
    setData(data.filter((i) => i.id !== id));
  };

  //   to persist data into
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("data"));
    if (storedData) {
      setData(storedData);
      console.log(storedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  return (
    <>
      <div className="flex gap-4 p-4 bg-gray-100 rounded-lg flex-col items-center justify-center text-black md:flex-row max-w-[80%] mx-auto my-10">
        <span className="flex flex-col flex-1">
          <input
            type="text"
            id="text-Input"
            value={str}
            placeholder="Enter Your Plan:"
            className="flex-1 border border-gray-300 text-white p-2 rounded focus:outline-none focus:border-blue-500"
            aria-label="Text input"
            onChange={onChangeHandle}
          />
        </span>
        <span className="flex flex-col flex-1">
          <input
            id="number-Input"
            type="number"
            value={num}
            onChange={onChangeNumHandle}
            placeholder="Enter Study Hours:"
            className=" border border-gray-300 p-2 text-white rounded focus:outline-none focus:border-blue-500"
            aria-label="Number input"
          />
        </span>
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

      <div className="flex flex-col border border-neutral-500  w-full rounded-lg bg-neutral-700 max-w-[80%] mx-auto text-center items-center  justify-center">
        <h1 className="text-xl py-5 font-serif font-semibold underline text-yellow-400 ">Your Task </h1>
        

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
