import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "../redux/slices/task/taskSlice";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-4 py-2 bg-gray-100 px-4 w-[400px] items-center">
      <li className="w-[250px]">{task.text}</li>
      <div className="flex gap-2">
        <button
          className="bg-blue-400 px-6 py-2 cursor-pointer"
          onClick={() => dispatch(toggleTask(task.id))}
        >
          {task.completed ? "Undo" : "Done"}
        </button>
        <button onClick={() => dispatch(deleteTask(task.id))} className="bg-red-400/75 px-6 py-2 cursor-pointer">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
