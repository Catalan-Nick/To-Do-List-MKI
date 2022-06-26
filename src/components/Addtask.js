import { useState } from 'react'

const Addtask = ({ onAdd }) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        //validation
        if(!text) {
            alert("Please add a task")
            return
        }

        onAdd({ text, day, reminder })
        //clear the form
        setText('')
        setDay('')
        setReminder(false)
    }


  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label>Task</label>
            <input 
                type="text" 
                placeholder="Add Task"
                value={text}
                //type in input it will trigger on change, value is whatever is typed in.
                onChange={(e) => setText(e.target.value)} />
        </div>
        <div className="form-control">
            <label>Day & Time</label>
            <input 
            type="text" 
            placeholder="Add Day & Time" 
            value={day}
                onChange={(e) => setDay(e.target.value)} />
        </div>
        <div className="form-control form-control-check">
            <label>Set Reminder</label>
            <input 
            type="checkbox"
            checked={reminder}
            value={reminder}
                onChange={(e) => setReminder(e.currentTarget.checked)} />
        </div>

        <input type="submit" value='Save' className="btn btn-block"/>
    </form>
  )
}

export default Addtask