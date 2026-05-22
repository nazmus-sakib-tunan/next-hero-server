import TasksCard from "@/components/TasksCard";
import { getTasks } from "@/lib/task";

const TasksPage = async () => {

  const tasks = await getTasks();
  return (
    <div>
      <h2> task : {tasks.length}</h2>

      <div>
      {tasks.map((task)=> <TasksCard key={task.id} task={task} />)}
      </div>

    </div>
  );
};

export default TasksPage;