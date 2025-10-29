import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/slices/task/taskSlice.js";

const AddTask = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addTask(text));
    setText("");
  };

  // console.log(text)
  return (
    <form onSubmit={handleSubmit} className="flex gap-1  justify-center mt-5">
      <input
        className="border-2 rounded-md outline-none p-2"
        type="text"
        placeholder="Add a task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        className="py-2 px-4 rounded-md  bg-blue-400 cursor-pointer"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default AddTask;
