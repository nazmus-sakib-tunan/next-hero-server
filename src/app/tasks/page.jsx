import { AddTask } from "@/components/AddTask";
import TasksCard from "@/components/TasksCard";
import { getTasks } from "@/lib/task";
import { createATask } from './../../lib/actions';

const TasksPage = async () => {

  const tasks = await getTasks();
  return (
    <div>
      <h2> task : {tasks.length}</h2>
      <AddTask createATask={createATask} />

      <div>
      {tasks.map((task)=> <TasksCard key={task.id} task={task} />)}
      </div>

    </div>
  );
};

export default TasksPage;