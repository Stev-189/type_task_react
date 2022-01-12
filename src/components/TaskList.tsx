import React from 'react'
import { Task } from '../interfaces/Task.interface';
import TaskCard from './TaskCard';

interface Props {
  tasks: Task[]
  deleteATask: (id: number) => void
}

function TaskList({ tasks, deleteATask }: Props) {
  return (
    <>
        {
          tasks.map(task => (
            <div className="col-md-4 pb-2">
              <TaskCard 
                task={task} 
                key={task.id} 
                deleteATask={deleteATask}
              />
            </div>
          ))
        }
    </>
  )
}

export default TaskList
