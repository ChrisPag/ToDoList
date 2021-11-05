import { useState } from 'react';


const Create = () => {
    const [desc, setDesc] = useState();
    const [showTask, setShowTask] = useState(false);
    
    const handleClick = () => {
        setShowTask(true)
    }

    return (
        <div className = "create">
            <button onClick={handleClick}>Add Task</button>
            {showTask && 
            <form>
                <input
                    type="text"
                    placeholder="Enter task here"
                    value={ desc }
                    onChange = {(e) => setDesc(e.target.value)}
                />
            </form>}
            
        </div>
    );
}

export default Create;