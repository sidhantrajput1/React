import "./App.css";
import AddTask from "./components/addTask";
import FilterTask from "./components/FilterTask";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Task Manager</h1>

      <div className="">
        <AddTask />
        <FilterTask />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
