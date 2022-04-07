import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'
import AddTask from './components/AddTask'



function App() {
	const [ showAddTask, setShowAddTask ] = useState(false)
	const [tasks, setTasks] = useState([
	{
		id : 1,
		text: 'Appointment',
		day: 'Feb 5th at 2:30 pm',
		reminder: true,
	},
	{
		id : 2,
		text: 'Meeting',
		day: 'Feb 6th at 1:30pm',
		reminder: true,
	},
	{
		id : 3,
		text: 'Shopping',
		day: 'Feb 7th at 5:00pm',
		reminder: true,
	},
	])
	
	const addTask = (task) => {
		const id = Math.floor(Math.random() *1000) + 1
		const newTask = {id, ...task}
		setTasks([...tasks, newTask])
		}
	
	//Toggle remainder
	const toggleReminder = (id) => {
		setTasks(
			tasks.map( (task) => task.id === id ? { ...task, reminder: !task.reminder } : task ) 
			)
		}
	
	//Delete Task
	const deleteTask = (id) => {
		setTasks(tasks.filter((task => task.id !== id)))
		}
	
  return (
	  <div className='container'>
	  	<Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
	  	{ showAddTask && <AddTask onAdd={addTask} /> }
	  	{tasks.length > 0 ? 
			<Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask} /> : 'No Tasks to Show'
		}
	  </div>
  );
}

export default App;
