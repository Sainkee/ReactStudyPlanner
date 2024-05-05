import { FilePenLine, Trash2 } from "lucide-react";
import { useState } from "react";

export default function PlanList({ str, num, handleDelete }) {
  const [edit, setEdit] = useState(false);
  const [string, setString] = useState(str || "");
  const [numVal, setNumVal] = useState(num || 0);
  const handlestr = (e) => {
    setString(e.target.value);
  };

  const addOne = () => setNumVal(numVal + 1);
  const subOne = () => setNumVal(numVal - 1);

  console.log(str, num);
  return (
    <div className="p-2 border rounded-lg flex justify-between items-center bg-white/65">
      <div className="flex justify-around items-center md:w-[100%] w-1/2  text-white ">
        {edit ? (
          <input
            type="text"
            value={string}
            autoFocus
            onChange={handlestr}
            className={`flex-1 border border-gray-300 p-2  break-words whitespace-normal rounded focus:outline-none focus:border-blue-500 bg-transparent w-[70%]  text-white `}
          ></input>
        ) : (
          <span className="text-lg font-medium w-[70%] max-w-1/2 break-words whitespace-normal text-gray-100">
            {string}
          </span>
        )}
        <span className=" w-[30%]"> {numVal}</span>
      </div>
      <div className="flex space-x-3">
        <span
          className={`${
            edit ? "text-orange-500" : "text-green-500"
          } flex items-center cursor-pointer bg-yellow-300 rounded-full px-1 hover:bg-yellow-400 `}
        >
          <FilePenLine size={"20px"} onClick={() => setEdit(!edit)} />
        </span>
        <button
          onClick={addOne}
          className="p-2 bg-blue-500 text-white rounded-full text-xl hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          +
        </button>
        <button
          onClick={subOne}
          disabled={numVal <= 0}
          className="p-2 bg-red-500 text-white rounded-full text-xl hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300 disabled:cursor-not-allowed"
        >
          -
        </button>
        <button
          onClick={handleDelete}
          className="py-2 px-1  bg-red-600 text-white rounded-full hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-300"
        >
          <Trash2 size={"20px"} />
        </button>
      </div>
    </div>
  );
}
