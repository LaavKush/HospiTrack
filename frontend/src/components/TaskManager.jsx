import { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const TaskCard = ({ task, moveTask }) => {
  const [, ref] = useDrag(() => ({
    type: "TASK",
    item: { id: task.id },
  }));

  return (
    <div ref={ref} className="p-4 bg-gray-100 rounded-lg shadow-md">{task.name}</div>
  );
};

const TaskColumn = ({ status, tasks, moveTask }) => {
  const [, drop] = useDrop(() => ({
    accept: "TASK",
    drop: (item) => moveTask(item.id, status),
  }));

  return (
    <div ref={drop} className="p-6 w-1/3 bg-gray-200 min-h-[300px]">
      <h2 className="font-semibold text-lg mb-4">{status}</h2>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} moveTask={moveTask} />
      ))}
    </div>
  );
};

const TaskManager = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Clean ICU", status: "Pending" },
    { id: 2, name: "Sanitize OPD", status: "In Progress" },
  ]);

  const moveTask = (id, status) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, status } : t)));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex gap-6">
        <TaskColumn status="Pending" tasks={tasks.filter((t) => t.status === "Pending")} moveTask={moveTask} />
        <TaskColumn status="In Progress" tasks={tasks.filter((t) => t.status === "In Progress")} moveTask={moveTask} />
      </div>
    </DndProvider>
  );
};

export default TaskManager;
