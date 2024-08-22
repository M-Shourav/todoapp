"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { IoClose } from "react-icons/io5";

const InputForm = () => {
  const [todo, setTodo] = useState("");
  const handleTodo = (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
    e.preventDefault();
    console.log(todo);
    if (todo === "") {
      toast.error("Please write your todo");
    } else {
      toast.success("Todo add successfully");
      setTodo("");
    }
  };
  return (
    <div>
      <form
        onClick={handleTodo}
        className="h-8 md:h-10 flex items-center gap-4 text-sm relative"
      >
        <input
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="add todo item"
          value={todo}
          className=" h-full flex-1 bg-transparent border-[1px]
           border-gray-400 hover:border-green-500 outline-none tracking-wide
            pl-4 pr-7 rounded-md focus-visible:border-green-500 duration-200
             placeholder:text-gray-400 placeholder:text-xs"
        />
        {todo && (
          <span
            onClick={() => setTodo("")}
            className="absolute top-3 right-[110px] text-white hover:text-red-500 cursor-pointer text-sm"
          >
            <IoClose />
          </span>
        )}
        <button
          type="submit"
          className="h-full border-[1px] border-gray-600 px-2 rounded-md
         hover:text-orange-600 uppercase text-xs duration-200"
        >
          Add todo
        </button>
      </form>
    </div>
  );
};

export default InputForm;
