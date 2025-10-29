import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { items, filters } = useSelector((state) => state.tasks);

  const filtered = filters === 'completed' ? items.filter( task => task.completed) : items

  console.log("items ", items);
  return (
    <div className="flex justify-center mt-10 overflow-hidden h-[600px] p-3 ">
      <ul className="flex flex-col gap-4 overflow-y-scroll">
        {filtered.map(data => (
           <TaskItem key={data.id} task={data} />     
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
