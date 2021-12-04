import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {
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

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

  return (
    <div className="container">
        <Header title= "Task Tracker" />
        <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
