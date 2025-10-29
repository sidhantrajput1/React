import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/slices/task/taskSlice"

const FilterTask = () => {
  const filter = useSelector((state) => state.tasks.filters);
  const dispatch = useDispatch();
console.log(filter)
  return (
    <div className="flex gap-2 justify-center mt-4">
      <button
        className={`px-3 py-1 rounded-md ${
          filter === "all" ? "bg-blue-400 text-white" : "bg-gray-200"
        }`}
        onClick={() => dispatch(setFilter("all"))}
      >
        All
      </button>

      <button
        className={`px-3 py-1 rounded-md ${
          filter === "completed" ? "bg-blue-400 text-white" : "bg-gray-200"
        }`}
        onClick={() => dispatch(setFilter("completed"))}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterTask;
