import './index.css'
import Header from './components/Header'
import Tasks from './components/Tasks';
import Addtask from './components/Addtask';
import { useState } from "react"

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  
  // Task component
  const [tasks, setTasks] = useState([
      {
          id: 1,
          text: 'Drs Appointment',
          day: 'July 5th at 230pm',
          reminder: true,
      },
      {
          id: 2,
          text: 'Meeting',
          day: 'July 6th',
          reminder: true,
      },
      {
          id: 3,
          text: 'Shopping',
          day: 'July 7th',
          reminder: false,
      },
  ])
  //Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task}
    setTasks([...tasks, newTask])
  }
  //Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
// Toggle Reminder
// map through where task.id matches id thats clicked it will toggle reminder, otherwise it stays the same.
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ?
   { ...task, reminder: !task.reminder} : task))
}

  return (
    <div className='container'>
      <Header 
        title='Task Tracker'
        onAdd={() => setShowAddTask(!showAddTask)}
        //boolean on if its shown or not
        showAdd={showAddTask}
        />
      {/* shorter way of ternary without the else */}
      {showAddTask && <Addtask onAdd={addTask}/>}
      {tasks.length > 0 ? 
        <Tasks 
          tasks={tasks} 
          onDelete={deleteTask} 
          onToggle={toggleReminder}/>
      : 'There are no tasks'} 
    </div>
  );
}

export default App;
