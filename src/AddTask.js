import { useState } from 'react';
import Tasks from './Tasks';

const AddTask = () =>{

    const [showTask, setShowTask] = useState(false);
    const handleClick = () => {
        setShowTask(true)
    }

    return (
        <div>
            <button id="addTask" onClick={handleClick}>Add Task</button>
            {showTask && <Tasks showTask={true}/>}
        </div>
    )
}

export default AddTask;