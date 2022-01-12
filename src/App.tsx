import { useState } from 'react';
import './App.css';
import logo from './logo.svg';
import { Task } from './interfaces/Task.interface';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';


interface Props {
  title?: string
}

function App({title}: Props) {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: 'Learn React',
      description: 'The best way to learn React',
      completed: false
    }
  ])

  const getCurrentTimestamp = (): number => new Date().getTime();

  const addANewTask = (task: Task): void =>
    setTasks([
      ...tasks,
      { ...task, completed: false, id: getCurrentTimestamp() },
    ]);

  const deleteATask = (id: number): void =>setTasks(tasks.filter((task) => task.id !== id));

  return (
    <div className="bg-dark text-white" style={{height: '100vh'}}>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a href='/' className='navbar navbar-brand'>
            <img src={logo} alt="logo" style={{width: "4rem"}} />
            {title && <h2>{ title }</h2>}
          </a>
        </div>
      </nav>
      {/* <h1>{ title }</h1> */}
      <main className="container p-4">
        <div className="row">
          <div className="col-md-4">
            <TaskForm addANewTask={addANewTask}/>
          </div>
          <div className="col-md-8">
            <div className="row">
              <TaskList 
              tasks={tasks} 
              deleteATask={deleteATask}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
