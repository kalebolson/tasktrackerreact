import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30PM',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meet with Client',
        day: 'Feb 6th at 3:30PM',
        reminder: true,
    },
    {
        id: 3,
        text: 'Go to Store',
        day: 'Feb 8th at 12:00PM',
        reminder: false,
    },
    {
        id: 4,
        text: 'Relax',
        day: 'Feb 10th at 9:00AM',
        reminder: true,
    },
])

const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) +1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) => 
    task.id === id ? {...task, reminder: !task.reminder} : task))
}

const toggleAddTask = () => {
  setShowAddTask(!showAddTask)
}

  //the && is just a ternary without an else
  return (
    <div className="container">
        <Header title= "Task Tracker" 
        onShowAddTaskToggle={toggleAddTask} 
        showAdd={showAddTask}/>
        {showAddTask && <AddTask onAdd={addTask}/>} 
        {tasks.length > 0 
        ? <Tasks 
            tasks={tasks} 
            onDelete={deleteTask}
            onToggle={toggleReminder}
          /> 
        : ('No tasks to show')}
    </div>
  );
}

export default App;
