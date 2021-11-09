import { useState } from 'react';
import Tasks from './Tasks';

const Create = () => {
    
    const [showTask, setShowTask] = useState(false);
    
    const handleClick = () => {
        setShowTask(true)
    }

    return (
        <div className = "create">
            <button id="addTask" onClick={handleClick}>Add Task</button>
            
            {showTask && <Tasks/>}
        </div>
    );
}

export default Create;