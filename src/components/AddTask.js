import { useState } from 'react'

function AddTask() {
	

	const [text, setText ] = useState ('')

	const [day, setDay ] = useState ('')

	const [reminder, setReminder ] = useState (false)
	
	return (
		<form className = 'add-form' >
			<div className='form-control'>
				<label>Tasks</label>
				<input type='text' placeholder='Add Task' value={text} onChange={ (e)=>setText(e.target.value) } />
			</div>
			
			<div className='form-control'>
				<label>Day and Time</label>
				<input type='text' placeholder='Add Date and Time' value={day} onChange={ (e)=>setDay(e.target.value) } />
			</div>
			
			<div className='form-control form-control-check'>
				<label>Set Reminder</label>
				<input type='checkbox' value={reminder} onChange={ (e)=>setReminder(e.currentTarget.checked) } />
			</div> 
			<input type='submit' className='btn btn-block' value='Save Task' />
		</form>
	);
}

export default AddTask